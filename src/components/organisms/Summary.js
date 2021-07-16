import React from "react";
import {Paper, TableContainer} from "@material-ui/core";

export default function Summary({sections}) {
    return (
        <TableContainer component={Paper}>
            {sections.map(section => (
                // TODO: Render tables for section data
                <></>
            ))}
        </TableContainer>
    )
}
