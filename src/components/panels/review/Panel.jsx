import { Paper, Stack } from "@mui/material"

import ReviewNav from "./Nav"

const ReviewPanel = ({ subsections, handleBack }) => {
    return (
        <Paper elevation={3} sx={{ height: '50vh', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <ReviewNav {...{ handleBack }} />
            </Stack>
        </Paper>
    )
}

export default ReviewPanel
