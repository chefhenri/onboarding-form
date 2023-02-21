import { Stack, Typography } from "@mui/material"
import { Info } from "feather-icons-react/build/IconComponents"

const InfoHeading = () => {
    return (
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Info size={20} />
            <Typography component="div" variant="h6">Info</Typography>
        </Stack>
    )
}

export default InfoHeading
