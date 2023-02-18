import { useState } from "react";

import { Grid, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment";

const DATE_FMT = 'MM/DD/YYYY'

const FormDatePicker = ({ id, name, label, delta, deltaUnit, required }) => {
    const [date, setDate] = useState(moment().add(delta, deltaUnit))

    const handleDateChange = (newDate) => {
        setDate(newDate)
    }

    return (
        <Grid item xs={6}>
            <DesktopDatePicker
                {...{ id, name, label }}
                inputFormat={DATE_FMT}
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                    <TextField
                        {...props}
                        variant="standard"
                        required={required}
                        fullWidth />
                )} />
        </Grid>
    )
}

export default FormDatePicker
