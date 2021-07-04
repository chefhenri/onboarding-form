import React from "react";
import {TableCell, TableRow} from "@material-ui/core";

const SummaryTableRow = ({field}) => {
    const handleValue = (value) => {
        switch (typeof value) {
            case "boolean":
                return value ? 'Yes' : 'No'
            case "object":
                return value.toLocaleString()
            default:
                return value
        }
    }

    return (
        <TableRow>
            <TableCell align="left">
                <p>{field.label}</p>
            </TableCell>
            <TableCell align="right">
                <p>{handleValue(field.value)}</p>
            </TableCell>
        </TableRow>
    )
}

export default SummaryTableRow
