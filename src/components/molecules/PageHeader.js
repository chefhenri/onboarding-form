import React from "react";

import {styles} from "../../styles/app.styles";
import {AppBar, Toolbar, Typography} from "@mui/material";

const PageHeader = () => {
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

export default PageHeader
