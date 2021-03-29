import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";

export default function Summary(props) {
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
        <TableContainer component={Paper}>
            <Table aria-label={'summary-table'}>
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
                <TableBody>
                    {Object.values(props.data).map(section => (
                        Object.values(section).map(field => (
                            <TableRow>
                                <TableCell align="left">
                                    <p>{field.label}</p>
                                </TableCell>
                                <TableCell align="right">
                                    <p>{handleValue(field.value)}</p>
                                </TableCell>
                            </TableRow>
                        ))
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
