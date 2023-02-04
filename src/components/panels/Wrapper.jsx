import { useState } from "react"
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

const Wrapper = () => {
    const [activeSection, setActiveSection] = useState(0)

    const subsections = sections[activeSection].subsections
    const headings = sections.map(section => section.heading)

    return (
        <Container sx={{ mt: '8rem' }}>
            <Stack direction="row" spacing={4}>
                <FormPanel {...{ subsections }} />
                <Stack direction="column" spacing={4}>
                    <ContentsPanel {...{headings}} />
                    <InfoPanel />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Wrapper
