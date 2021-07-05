import React from "react";
import {Paper, TableContainer} from "@material-ui/core";

import SummaryTable from "../atoms/SummaryTable";

export default function Summary({sections}) {
    return (
        <TableContainer component={Paper}>
            {sections.map(section => (
                <SummaryTable section={section} fields={[]}/>
            ))}
        </TableContainer>
    )
}
