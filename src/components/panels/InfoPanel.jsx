import { Paper, Typography } from "@mui/material"

const InfoPanel = ({ info }) => {
    return (
        // TODO: Add ::before element to fade overflow text
        // TODO: Widen surface to make more room for info text
        <Paper elevation={3} sx={{ width: '200px', height: '270px', padding: '1rem', borderRadius: '15px', overflowY: 'auto' }}>
            <Typography>{info}</Typography>
        </Paper>
    )
}

export default InfoPanel
