import React from "react";
import {Paper, TableContainer, Typography} from "@material-ui/core";

export default function Summary({sections}) {
    return (
        <div>
            <Typography variant="h4" component="h2">
                Information Summary
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Please verify the information is correct.
            </Typography>

            <TableContainer component={Paper}/>
        </div>
    )
}
