import { Container, Stack } from "@mui/material"
import FormPanel from "./form/FormPanel"
import ContentsPanel from './ContentsPanel'
import InfoPanel from "./InfoPanel"

const subsections = [
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

const Wrapper = () => {
    return (
        <Container sx={{ mt: '8rem' }}>
            <Stack direction="row" spacing={4}>
                <FormPanel {...{ subsections }} />
                <Stack direction="column" spacing={4}>
                    <ContentsPanel />
                    <InfoPanel />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Wrapper
