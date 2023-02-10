import { Paper, Stack, Typography } from "@mui/material"
import ContentsStepper from "./ContentsStepper"

const ContentsPanel = ({ headings, activeSection }) => {
    return (
        <Paper elevation={3} sx={{ width: '200px', height: '300px', borderRadius: '15px' }}>
            <Stack direction="column" sx={{ padding: '1rem' }}>
                <Typography component="div" variant="h6" sx={{ fontWeight: 600 }}>
                    Sections
                </Typography>
                <ContentsStepper {...{ headings, activeSection }} />
            </Stack>
        </Paper>
    )
}

export default ContentsPanel
