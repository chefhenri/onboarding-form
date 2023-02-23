import { useReducer, useState } from "react"
import { Box, Collapse, Container, Fade, Grow, Stack } from "@mui/material"

import FormPanel from "./form/Panel"
import ContentsPanel from "./table_of_contents/Panel"
import InfoPanel from "./info/Panel"
import ReviewPanel from "./review/Panel"
import { TransitionGroup } from "react-transition-group"

const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'next_section': {
            return {
                activeSection: state.activeSection + 1,
                activeSubsection: 0
            }
        } case 'prev_section': {
            return {
                activeSection: state.activeSection - 1,
                activeSubsection: action.payload.index
            }
        } case 'next_subsection': {
            return {
                activeSection: state.activeSection,
                activeSubsection: state.activeSubsection + 1
            }
        } case 'prev_subsection': {
            return {
                activeSection: state.activeSection,
                activeSubsection: state.activeSubsection - 1
            }
        } default: {
            throw new Error('Uknown action: ' + action.type)
        }
    }
}

const Wrapper = ({ sections }) => {
    const [{ activeSection, activeSubsection }, sectionDispatch] = useReducer(sectionReducer, {
        activeSection: 0,
        activeSubsection: 0
    })

    const [inReview, setInReview] = useState(false)

    const sectionHeading = sections[activeSection].heading
    const subsections = sections[activeSection].subsections
    const headings = sections.map(section => section.heading)
    const info = sections[activeSection].subsections[activeSubsection].info

    const canNavigate = {
        back: {
            section: activeSection > 0,
            subsection: activeSubsection > 0
        },
        next: {
            section: activeSection < sections.length - 1,
            subsection: activeSubsection < subsections.length - 1
        }
    }

    const handleNext = () => {
        if (canNavigate.next.subsection) sectionDispatch({ type: 'next_subsection' })
        else if (canNavigate.next.section) sectionDispatch({ type: 'next_section' })
        else if (!canNavigate.next.section && !inReview) setInReview(true)
    }

    const handleBack = () => {
        if (inReview) setInReview(false)
        else if (canNavigate.back.subsection) sectionDispatch({ type: 'prev_subsection' })
        else if (canNavigate.back.section) {
            let index = sections[activeSection - 1].subsections.length - 1

            sectionDispatch({ type: 'prev_section', payload: { index } })
        }
    }

    return (
        <Container sx={{ mt: '8rem' }}>
            <Stack direction="row" spacing={4}>
                <Fade in={inReview} timeout={{ appear: 0, enter: 350, exit: 0 }} unmountOnExit>
                    <Box sx={{ width: '100%' }}>
                        <ReviewPanel {...{ sections, handleBack }} />
                    </Box>
                </Fade>
                <Fade in={!inReview} timeout={{ appear: 0, enter: 350, exit: 0 }} unmountOnExit>
                    <Box sx={{ width: '100%', minWidth: '70%' }}>
                        <FormPanel {...{
                            sectionHeading,
                            subsections,
                            handleNext,
                            handleBack,
                            canNavigate,
                            inReview
                        }}
                            activeSubsection={activeSubsection} />
                    </Box>
                </Fade>
                <Fade in={!inReview} timeout={{ appear: 0, enter: 350, exit: 0 }} unmountOnExit>
                    <Stack direction="column" spacing={4} sx={{ width: '30%' }}>
                        <ContentsPanel {...{ headings }} activeSection={activeSection} />
                        <InfoPanel {...{ info }} />
                    </Stack>
                </Fade>
            </Stack>
        </Container>
    )
}

export default Wrapper
