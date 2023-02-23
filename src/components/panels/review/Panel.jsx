import { Box, Grid, Paper, Stack, Typography } from "@mui/material"

import ReviewNav from "./Nav"
import ReviewHeading from './Heading'
import ReviewContainer from "./Container"

const ReviewPanel = ({ sections, handleBack }) => {
    return (
        <Paper elevation={3} sx={{ height: '50vh', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
                        Review
                    </Typography>
                </Box>
                <ReviewContainer {...{ sections }} />
                <ReviewNav {...{ handleBack }} />
            </Stack>
        </Paper>
    )
}

export default ReviewPanel
