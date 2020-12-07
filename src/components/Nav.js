import React from "react";
import {Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    appBar: {
        position: 'relative'
    }
}))

export default function Nav(props) {
    const classes = styles()

    return (
        <AppBar position={"absolute"} color={"default"} className={classes.appBar}>
            <Toolbar>
                <Typography variant={"h6"} color={"inherit"} noWrap>
                    OpenText + XMedius
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
