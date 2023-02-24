import _ from 'lodash'
import moment from "moment"
import { useSelector } from "react-redux"
import { Grid, Stack, Typography } from "@mui/material"

const DATE_FMT = 'MM/DD/YYYY'

const ReviewRecord = ({ id, name, type, label, value, options }) => {
    const formData = useSelector((state) => state.form)

    const getFormattedValue = () => {
        switch (type) {
            case 'checkbox':
                return (
                    options.map((opt, idx) => {
                        let nom = _.camelCase([name, 'opt', idx])
                        let val = formData[nom]

                        console.log(nom, val);

                        return (
                            <span>{opt}: {val ? 'Yes' : 'No'}</span>
                        )
                    })
                )
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
        <Grid item xs={6}>
            <Stack direction="row" spacing={1}>
                <Typography>
                    <span>{label}:</span>
                </Typography>
                <Typography sx={{ fontWeight: 500 }}>
                    {getFormattedValue()}
                </Typography>
            </Stack>
        </Grid>
    )
}

export default ReviewRecord
