import _ from 'lodash'
import moment from "moment"
import { useSelector } from "react-redux"
import { Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"

const DATE_FMT = 'MM/DD/YYYY'

// TODO: Adjust styling - data presentation (iconography, color)
const TableRecord = ({ heading, subsections }) => {
    const formData = useSelector((state) => state.form)

    const formatValue = (name, type, options) => {
        let value = formData[name]

        switch (type) {
            case 'checkbox':
                return value ? 'Yes' : 'No'
            case 'date':
                return moment(value).format(DATE_FMT)
            case 'select':
                return options.filter(option => option.value === value)[0].label
            case 'slider':
                return typeof value === 'boolean' ? 'Unlimited' : value
            case 'switch':
                return value ? 'Yes' : 'No'
            default:
                return value
        }
    }

    return (
        <TableRow>
            <TableCell colSpan={2}>
                <Typography variant="h6">{heading}</Typography>
                <Table size="small">
                    <TableBody>
                        {subsections.map(({ fields }) => {
                            return fields.map(({ id, name, type, label, options }) => {
                                let fmtGroup = type === 'checkbox'

                                return (
                                    fmtGroup ? (
                                        <TableRow key={_.kebabCase([id, 'cell'])}>
                                            <TableCell colSpan={1} sx={{verticalAlign: 'initial'}}>
                                                <Typography>{label}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                {options.map((opt, idx) => {
                                                    let nom = _.kebabCase([name, opt, idx])

                                                    return (
                                                        <Stack direction="row-reverse" spacing={2}>
                                                            <Typography>{formatValue(nom, type)}</Typography>
                                                            <Typography>{opt}</Typography>
                                                        </Stack>
                                                    )
                                                })}
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        <TableRow key={_.kebabCase([id, 'cell'])}>
                                            <TableCell>
                                                <Typography>{label}</Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography>{formatValue(name, type, options)}</Typography>
                                            </TableCell>
                                        </TableRow>
                                    )
                                )
                            })
                        })}
                    </TableBody>
                </Table>
            </TableCell>
        </TableRow>
    )
}

export default TableRecord
