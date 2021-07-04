import React, {useEffect} from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TablePagination,
    TableRow
} from "@material-ui/core";

export default function Summary(props) {
    useEffect(() => {
        console.log(props.data)
    }, [])

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
        <>
            <TableContainer component={Paper}>
                <Table size="small" aria-label={'summary-table'}>
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
            {/* TODO: Implement pagination */}
            <TablePagination count={props.data.length} onChangePage={() => {}} page={0} rowsPerPage={1}/>
        </>
    )
}
