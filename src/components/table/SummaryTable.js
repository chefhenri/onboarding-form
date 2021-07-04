import React from "react";
import {Table, TableBody} from "@material-ui/core";
import SummaryTableHead from "./SummaryTableHead";
import SummaryTableRow from "./SummaryTableRow";

const SummaryTable = ({section, fields}) => {
    return (
        <Table size="small" aria-label={`${section}-info-table`}>
            <SummaryTableHead/>
            <TableBody>
                {fields.map(field => (<SummaryTableRow field={field}/>))}
            </TableBody>
        </Table>
    )
}

export default SummaryTable
