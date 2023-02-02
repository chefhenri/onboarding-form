import { useState } from "react";
import { Box, Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

import InfoPopover from "./InfoPopover";

// TODO: Add 'info' control and content
const FormHeading = ({ label, info }) => {
    const [anchor, setAnchor] = useState(null)

    const togglePopover = (event) => setAnchor(event.currentTarget)
    const handleClose = () => setAnchor(null)
    const open = Boolean(anchor)

    return (
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6">{label}</Typography>
                {info && (
                    <>
                        <Tooltip title="Info" arrow>
                            <IconButton onClick={togglePopover}>
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                        <InfoPopover text={info} anchor={anchor} isOpen={open} handleClose={handleClose} />
                    </>
                )}
            </Box>
            <Divider />
        </Grid>
    )
}

export default FormHeading
