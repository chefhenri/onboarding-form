import React from "react";

import {Box, Divider, Grid, Popover, Tooltip, Typography} from "@mui/material";
import {Info} from "@mui/icons-material";

import {styles} from "../../../styles/form.styles";

export default function FormHeading({id, text, info}) {
    const {heading, icon, icons, popover} = styles()

    const [anchor, setAnchor] = React.useState(null)

    const handleOpen = (event) => {
        setAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setAnchor(null)
    }

    const popOpen = Boolean(anchor)
    const popId = popOpen ? 'info-popover' : undefined

    const popoverProps = {
        id: popId,
        open: popOpen,
        anchorEl: anchor,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        onClose: handleClose
    }

    return (
        <Grid item sm={12}>
            <Typography className={heading} variant={"h6"} gutterBottom>
                {text}
                <Box className={icons} component="span">
                    {info && (
                        <Tooltip key={`${id}-info`} title='Info' placement={"top"} onClick={handleOpen} arrow>
                            <Info className={icon}/>
                        </Tooltip>
                    )}
                    {info && (
                        <Popover key={`${info}-popover`} {...popoverProps}>
                            {info.split('\n').map((fragment, idx) =>
                                <Typography key={`${id}-frag-${idx}`} className={popover}>
                                    {fragment}
                                </Typography>)}
                        </Popover>
                    )}
                </Box>
            </Typography>
            <Divider/>
        </Grid>
    )
}
