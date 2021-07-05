import React from "react";
import {TableCell, TableHead, TableRow} from "@material-ui/core";

const SummaryTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="left">
                    <p>Field description</p>
                </TableCell>
                <TableCell align="right">
                    <p>Field information</p>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default SummaryTableHead
