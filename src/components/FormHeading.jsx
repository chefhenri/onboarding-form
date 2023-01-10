import {Box, Divider, Typography} from "@mui/material";

// TODO: Add 'info' control and content
const FormHeading = ({ text }) => {
    return (
            <Box>
                <Typography variant="h6">{text}</Typography>
                <Divider />
            </Box>
    )
}

export default FormHeading
