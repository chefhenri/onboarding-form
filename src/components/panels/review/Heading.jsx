import { Button, Fade, Stack, Typography } from "@mui/material"

const ReviewHeading = ({ heading, show, handler }) => {
    return (
        <Stack direction="row" width="100%" spacing={1}>
            <Typography variant="h6">{heading}</Typography>
            <Fade in={show}>
                <Button onClick={handler}>Edit</Button>
            </Fade>
        </Stack>
    )
}

export default ReviewHeading
