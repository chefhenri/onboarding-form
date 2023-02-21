import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import { update } from '../../../../slice'

const DATE_FMT = 'MM/DD/YYYY'

const FormDatePicker = ({ id, name, label, required }) => {
    const value = useSelector((state) => state.form[name])
    const dispatch = useDispatch()

    const handleChange = (date) => {
        dispatch(update({ name, value: moment(date, DATE_FMT).toISOString() }))
    }

    return (
        <Grid item xs={6}>
            <DatePicker
                {...{ id, name, label }}
                disablePast
                value={value || null}
                inputFormat={DATE_FMT}
                onChange={handleChange}
                renderInput={(props) => (
                    <TextField
                        {...props}
                        variant="filled"
                        required={required}
                        fullWidth />
                )} />
        </Grid>
    )
}

export default FormDatePicker
