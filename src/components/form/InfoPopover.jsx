import { Paper, Popover, Typography } from "@mui/material"

const InfoPopover = ({ text, anchor, isOpen, handleClose }) => {
    return (
        <Popover
            sx={{ translate: '-10rem' }}
            open={isOpen}
            anchorEl={anchor}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}>
            <Paper sx={{ padding: '.75rem', width: '15rem', height: '17rem' }}>
                <Typography>{text}</Typography>
            </Paper>
        </Popover>
    )
}

export default InfoPopover
