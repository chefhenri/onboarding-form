import { useReducer } from "react"
import { Container, Stack } from "@mui/material"

import FormPanel from "./form/FormPanel"
import ContentsPanel from "./table_of_contents/ContentsPanel"
import InfoPanel from "./info/InfoPanel"

// const sections = [
//     {
//         heading: 'Account Contact Information',
//         subsections: [
//             {
//                 heading: 'Company Information',
//                 fields: [
//                     {
//                         label: 'Company Name',
//                         required: true
//                     },
//                     {
//                         label: 'Company Website',
//                         required: true
//                     }
//                 ]
//             },
//             {
//                 heading: 'Account Owner Information',
//                 info: "The Account Owner is the person authorized to make policy changes on the Account.",
//                 fields: [
//                     {
//                         label: 'Account Owner Name',
//                         required: true
//                     },
//                     {
//                         label: 'Account Owner Title',
//                         required: true
//                     },
//                     {
//                         label: 'Account Owner Phone',
//                         required: true
//                     },
//                     {
//                         label: 'Account Owner Email',
//                         required: true
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         heading: 'Reseller Information',
//         subsections: [
//             {
//                 heading: 'Reseller Contact Information',
//                 info: "Filling out these fields is recommended for clients who have managed print/professional IT services from their MFP Reseller.\nThe Reseller is required to install the XM Fax and XM SendSecure apps on the MFP for Xerox and HP.",
//                 fields: [
//                     {
//                         label: 'Reseller Name',
//                         required: true
//                     },
//                     {
//                         label: 'Reseller Email',
//                         required: true
//                     }
//                 ]
//             },
//             {
//                 heading: 'Installation Contact Information',
//                 fields: [
//                     {
//                         label: 'Contact Email',
//                         required: true
//                     },
//                     {
//                         label: 'Contact Phone',
//                         required: true
//                     }
//                 ]
//             }
//         ]
//     }
// ]

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

    const subsections = sections[activeSection].subsections
    const headings = sections.map(section => section.heading)
    const info = sections[activeSection].subsections[activeSubsection].info

    console.log(info);

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
    }

    const handleBack = () => {
        if (canNavigate.back.subsection) sectionDispatch({ type: 'prev_subsection' })

        // !FIXME: Gets last index of current section rather than the one before
        else if (canNavigate.back.section) sectionDispatch({ type: 'prev_section', payload: { index: subsections.length - 1 } })
    }

    return (
        <Container sx={{ mt: '8rem' }}>
            <Stack direction="row" spacing={4}>
                <FormPanel {...{ subsections, handleNext, handleBack, canNavigate }} activeSubsection={activeSubsection} />
                <Stack direction="column" spacing={4}>
                    <ContentsPanel {...{ headings }} activeSection={activeSection} />
                    <InfoPanel {...{ info }} />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Wrapper
