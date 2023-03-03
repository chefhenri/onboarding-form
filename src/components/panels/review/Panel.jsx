import { Box, Paper, Stack, Typography } from "@mui/material"

import ReviewNav from "./Nav"
import ReviewList from "./List"

const ReviewPanel = ({ sections, handleBack }) => {
    return (
        <Paper elevation={3} sx={{ height: '70vh', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
                        Review
                    </Typography>
                </Box>
                <ReviewList {...{ sections }} />
                <ReviewNav {...{ handleBack }} />
            </Stack>
        </Paper>
    )
}

export default ReviewPanel
