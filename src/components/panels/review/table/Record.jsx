import _ from 'lodash'
import moment from "moment"
import { useSelector } from "react-redux"
import { Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"

const DATE_FMT = 'MM/DD/YYYY'

const TableRecord = ({ heading, subsections }) => {
    const formData = useSelector((state) => state.form)

    // const getFormattedValue = () => {
    //     switch (type) {
    //         case 'checkbox':
    //             return (
    //                 <Stack spacing={1}>
    //                     {options.map((opt, idx) => {
    //                         let nom = _.camelCase([name, 'opt', idx])

    //                         return (
    //                             <Stack direction="row" spacing={1}>
    //                                 <Typography>
    //                                     {opt}:
    //                                 </Typography>
    //                                 <Typography sx={{ fontWeight: 500 }}>
    //                                     {formData[nom] ? 'Yes' : 'No'}
    //                                 </Typography>
    //                             </Stack>
    //                         )
    //                     })}
    //                 </Stack >
    //             )
    //         case 'date':
    //             return (
    //                 <Typography sx={{ fontWeight: 500 }}>
    //                     {moment(value).format(DATE_FMT)}
    //                 </Typography>
    //             )
    //         case 'select':
    //             return (
    //                 <Typography sx={{ fontWeight: 500 }}>
    //                     {options.filter(option => option.value === value)[0].label}
    //                 </Typography>
    //             )
    //         case 'slider':
    //             return (
    //                 <Typography sx={{ fontWeight: 500 }}>
    //                     {typeof value === 'boolean' ? 'Unlimited' : value}
    //                 </Typography>
    //             )
    //         case 'switch':
    //             return (
    //                 <Typography sx={{ fontWeight: 500 }}>
    //                     {value ? 'Yes' : 'No'}
    //                 </Typography>
    //             )
    //         default:
    //             return (
    //                 <Typography sx={{ fontWeight: 500 }}>
    //                     {value}
    //                 </Typography>
    //             )
    //     }
    // }

    const formatValue = (name, type, options) => {
        let value = formData[name]

        switch(type) {
            case 'checkbox':
                return
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
                <Table>
                    <TableBody>
                        {subsections.map(({ fields }) => {
                            return fields.map(({ id, name, type, label, options }) => {
                                return (
                                    <TableRow key={_.kebabCase([id, 'cell'])}>
                                        <TableCell>
                                            <Typography>{label}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>{formatValue(name, type, options)}</Typography>
                                        </TableCell>
                                    </TableRow>
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
