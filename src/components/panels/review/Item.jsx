import _ from 'lodash'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Divider, Stack, Typography } from "@mui/material"

const DATE_FMT = 'MM/DD/YYYY'

const ReviewItem = ({ id, name, type, label, options }) => {
    const formData = useSelector((state) => state.form)
    const fmtAsGroup = type === 'checkbox'

    const formatValue = (name, type, options) => {
        let value = formData[name]

        if (value === undefined) return

        switch (type) {
            // case 'checkbox':
            //     return value ? 'Yes' : 'No'
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
        fmtAsGroup ? (
            <>
                <Typography component="span" sx={{ width: '50%', opacity: '62%' }}>
                    {label}
                </Typography>
                {options.map((opt, idx) => {
                    let nom = _.camelCase([name, 'opt', idx])
                    let val = formatValue(nom, type)

                    return (
                        <Stack
                            key={_.kebabCase([nom, 'record'])}
                            direction="row-reverse"
                            sx={{ width: '100%' }}>
                            <Typography
                                component="span"
                                sx={{
                                    // paddingLeft: '1rem',
                                    width: '50%',
                                    // width: '100%',
                                    // textAlign: 'left',
                                    // fontWeight: val ? 500 : 400,
                                    opacity: val ? '100%' : '62%'
                                }}>
                                {opt}
                            </Typography>
                            {/* <Typography component="span">
                                {formatValue(nom, type)}
                            </Typography> */}
                        </Stack>
                    )
                })}
                <Divider />
            </>
        ) : (
            <>
                <Stack direction="row">
                    <Typography component="span" sx={{ width: '50%', opacity: '62%' }}>
                        {label}
                    </Typography>
                    <Typography>
                        {formatValue(name, type, options)}
                    </Typography>
                </Stack>
                <Divider />
            </>
        )
    )
}

export default ReviewItem
