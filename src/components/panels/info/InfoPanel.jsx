import { Divider, Fade, Paper, Stack, Typography } from "@mui/material"

import InfoHeading from './InfoHeading'

const InfoPanel = ({ info }) => {
    const showPanel = info ? true : false

    return (
            <Fade in={showPanel}>
                <Paper elevation={3} sx={{
                    width: '260px',
                    padding: '1rem',
                    overflow: 'auto',
                    borderRadius: '15px',
                    bgcolor: 'background.panel.info'
                }}>
                    <Stack spacing={1} sx={{ position: 'relative' }}>
                        <InfoHeading />
                        <Divider />
                        <Typography variant="body1">{info}</Typography>
                    </Stack>
                </Paper>
            </Fade>
    )
}

export default InfoPanel
