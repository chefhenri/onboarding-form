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
    table: {}
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
                            <TableCell align="left">Field description</TableCell>
                            <TableCell align="right">Field information</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*{props.sections.map(section => (*/}
                        {/*    section.subsections.map(subsection => (*/}
                        {/*        subsection.fields.map(field => (*/}
                        {/*            <TableRow>*/}
                        {/*                <TableCell align="left">*/}
                        {/*                    {props.data[section.name][field.name].label}*/}
                        {/*                </TableCell>*/}
                        {/*                <TableCell align="right">*/}
                        {/*                    {props.data[section.name][field.name].value}*/}
                        {/*                </TableCell>*/}
                        {/*            </TableRow>*/}
                        {/*        ))*/}
                        {/*    ))*/}
                        {/*))}*/}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
