import { Container, Stack } from "@mui/material"
import FormPanel from "./form/FormPanel"
import ContentsPanel from './ContentsPanel'
import InfoPanel from "./InfoPanel"

const testSubsection = { heading: 'Company Information', fields: [{ label: 'Company Name', required: true }, { label: 'Company Website', required: true }] }

const Wrapper = () => {
    return (
        <Container sx={{ mt: '8rem' }}>
            <Stack direction="row" spacing={4}>
                <FormPanel {...{ subsection: testSubsection }} />
                <Stack direction="column" spacing={4}>
                    <ContentsPanel />
                    <InfoPanel />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Wrapper
