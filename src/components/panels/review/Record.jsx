import moment from "moment"
import { Grid, Stack, Typography } from "@mui/material"

const DATE_FMT = 'MM/DD/YYYY'

const ReviewRecord = ({ type, label, value, options }) => {
    const getFormattedValue = () => {
        switch (type) {
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
        <Grid item xs={6}>
            <Stack direction="row" spacing={1}>
                <Typography>
                    <span>{label}:</span>
                </Typography>
                <Typography sx={{ fontWeight: 500 }}>
                    <span>{getFormattedValue()}</span>
                </Typography>
            </Stack>
        </Grid>
    )
}

export default ReviewRecord
