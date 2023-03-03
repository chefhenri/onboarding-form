import { useReducer, useState } from "react"
import { Box, Container, Fade, Stack } from "@mui/material"

import { SectionCtx, ReviewCtx } from "../../contexts"
import { sectionReducer } from "../../reducers"

import FormPanel from "./form/Panel"
import ContentsPanel from "./table_of_contents/Panel"
import InfoPanel from "./info/Panel"
import ReviewPanel from "./review/Panel"

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
                        <SectionCtx.Provider value={sectionDispatch}>
                            <ReviewCtx.Provider value={setInReview}>
                                <ReviewPanel {...{ sections, handleBack }} />
                            </ReviewCtx.Provider>
                        </SectionCtx.Provider>
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
                        <SectionCtx.Provider value={sectionDispatch}>
                            <ContentsPanel {...{ headings }} activeSection={activeSection} />
                        </SectionCtx.Provider>
                        <InfoPanel {...{ info }} />
                    </Stack>
                </Fade>
            </Stack>
        </Container>
    )
}

export default Wrapper
