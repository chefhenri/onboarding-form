import React from "react";
import {
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    table: {},
    header: {
        // textAlign: 'left'
    }
}))

export default function Finish(props) {
    const classes = styles()

    return (
        <div>
            <Typography variant="h4" component="h2">
                Information Summary
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Please verify the information is correct.
            </Typography>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label={'summary-table'}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                <p className={classes.header}>Field description</p>
                            </TableCell>
                            <TableCell align="right">
                                <p className={classes.header}>Field information</p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* TODO: Repeat for section field data */}
                        {/*<TableRow>*/}
                        {/*    <TableCell align="left">*/}
                        {/*        <p className={classes.header}>{field.label}</p>*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell align="right">*/}
                        {/*        <p className={classes.header}>{field.value}</p>*/}
                        {/*    </TableCell>*/}
                        {/*</TableRow>*/}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
