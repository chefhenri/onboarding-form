import { Divider, Fade, Paper, Stack, Typography } from "@mui/material"

import { Info } from "feather-icons-react/build/IconComponents"

const InfoPanel = ({ info }) => {
    const showPanel = info ? true : false

    return (
        <Fade in={showPanel}>
            <Paper elevation={3} sx={{
                width: '260px',
                padding: '1rem',
                overflow: 'auto',
                borderRadius: '15px',
                backgroundColor: 'lightgray'
            }}>
                <Stack spacing={1} sx={{ position: 'relative' }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <Info size={20} />
                        <Typography component="div" variant="h6">Info</Typography>
                    </Stack>
                    <Divider />
                    <Typography variant="body1">{info}</Typography>
                </Stack>
            </Paper>
        </Fade>
    )
}

export default InfoPanel
