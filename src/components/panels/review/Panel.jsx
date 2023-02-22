import { Paper, Stack } from "@mui/material"

import ReviewNav from "./Nav"

const ReviewPanel = ({ subsections }) => {
    return (
        <Paper elevation={3} sx={{ width: '920px', height: '700px', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <ReviewNav />
            </Stack>
        </Paper>
    )
}

export default ReviewPanel
