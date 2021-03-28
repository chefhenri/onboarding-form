import React from "react";
import {Box, Divider, Grid, Popover, Tooltip, Typography} from "@material-ui/core";
import {Info} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    heading: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    popover: {
        width: '15rem',
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2)
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: 'gray',
        marginLeft: theme.spacing(1)
    }
}))

export default function FormHeading(props) {
    const classes = styles()

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
            <Typography className={classes.heading} variant={"h6"} gutterBottom>
                {props.text}
                <Box className={classes.icons} component="span">
                    {props.hasOwnProperty('info') && (
                        <Tooltip key={`${props.id}-info`} title='Info' placement={"top"} onClick={handleOpen} arrow>
                            <Info className={classes.icon}/>
                        </Tooltip>
                    )}
                    {props.hasOwnProperty('info') && (
                        <Popover key={`${props.info}-popover`} {...popoverProps}>
                            {props.info.split('\n').map((fragment, idx) =>
                                <Typography key={`${props.id}-frag-${idx}`} className={classes.popover}>
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
