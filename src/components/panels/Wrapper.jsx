import { Container, Stack } from "@mui/material"
import FormPanel from "./form/FormPanel"
import ContentsPanel from './ContentsPanel'
import InfoPanel from "./InfoPanel"

const Wrapper = () => {
    return (
        <Container sx={{mt: '8rem'}}>
            <Stack direction="row" spacing={4}>
                <FormPanel />
                <Stack direction="column" spacing={4}>
                    <ContentsPanel />
                    <InfoPanel />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Wrapper
