import _ from 'lodash'
import { Table, TableBody, TableContainer } from "@mui/material"

import TableRecord from "./Record"

const ReviewTable = ({ sections }) => {
    return (
        <TableContainer sx={{ marginY: '2rem', overflowY: 'scroll' }}>
            <Table>
                <TableBody>
                    {sections.map(({ id, heading, subsections }) => {
                        return (<TableRecord key={_.kebabCase([id, 'record'])} {...{ heading, subsections }} />)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReviewTable
