import { useReducer } from "react"
import { Container, Stack } from "@mui/material"

import FormPanel from "./form/FormPanel"
import ContentsPanel from "./table_of_contents/ContentsPanel"
import InfoPanel from "./InfoPanel"

const sections = [
    {
        heading: 'Account Contact Information',
        subsections: [
            {
                heading: 'Company Information',
                fields: [
                    {
                        label: 'Company Name',
                        required: true
                    },
                    {
                        label: 'Company Website',
                        required: true
                    }
                ]
            },
            {
                heading: 'Account Owner Information',
                fields: [
                    {
                        label: 'Account Owner Name',
                        required: true
                    },
                    {
                        label: 'Account Owner Title',
                        required: true
                    },
                    {
                        label: 'Account Owner Phone',
                        required: true
                    },
                    {
                        label: 'Account Owner Email',
                        required: true
                    }
                ]
            }
        ]
    },
    {
        heading: 'Reseller Information',
        subsections: [
            {
                heading: 'Reseller Contact Information',
                fields: [
                    {
                        label: 'Reseller Name',
                        required: true
                    },
                    {
                        label: 'Reseller Email',
                        required: true
                    }
                ]
            },
            {
                heading: 'Installation Contact Information',
                fields: [
                    {
                        label: 'Contact Email',
                        required: true
                    },
                    {
                        label: 'Contact Phone',
                        required: true
                    }
                ]
            }
        ]
    }
]

const sectionReducer = (state, action) => {
    console.info(action.type)

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

const Wrapper = () => {
    const [sectionState, sectionDispatch] = useReducer(sectionReducer, {
        activeSection: 0,
        activeSubsection: 0
    })

    const subsections = sections[sectionState.activeSection].subsections
    const headings = sections.map(section => section.heading)

    // Prevent going after last section
    const canIncrementSection = sectionState.activeSection < sections.length - 1

    // Prevent going before first section
    const canDecrementSection = sectionState.activeSection > 0

    // Prevent going after last subsection
    const canIncrementSubsection = sectionState.activeSubsection < subsections.length - 1

    // Prevent going before first subsection
    const canDecrementSubsection = sectionState.activeSubsection > 0

    const handleNext = () => {
        if (canIncrementSubsection) sectionDispatch({ type: 'next_subsection' })
        else if (canIncrementSection) sectionDispatch({ type: 'next_section' })
    }

    const handleBack = () => {
        if (canDecrementSubsection) sectionDispatch({ type: 'prev_subsection' })
        else if (canDecrementSection) sectionDispatch({ type: 'prev_section', payload: { index: subsections.length - 1 } })
    }

    return (
        <Container sx={{ mt: '8rem' }}>
            <Stack direction="row" spacing={4}>
                <FormPanel {...{ subsections, handleNext, handleBack }} activeSubsection={sectionState.activeSubsection} />
                <Stack direction="column" spacing={4}>
                    <ContentsPanel {...{ headings }} activeSection={sectionState.activeSection} />
                    <InfoPanel />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Wrapper
