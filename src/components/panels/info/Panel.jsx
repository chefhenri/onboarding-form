import { Divider, Fade, Paper, Stack, Typography } from "@mui/material"

import InfoHeading from './Heading'

const InfoPanel = ({ info }) => {
    return (
            <Fade in={info ? true : false}>
                <Paper elevation={3} sx={{
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
