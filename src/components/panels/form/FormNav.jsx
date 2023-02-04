import { Button, Stack } from "@mui/material"

const FormNav = () => {
    return (
        <Stack direction="row" spacing={12}>
            <Button variant="outlined">
                Back
            </Button>
            <Button variant="contained">
                Next
            </Button>
        </Stack>
    )
}

export default FormNav
