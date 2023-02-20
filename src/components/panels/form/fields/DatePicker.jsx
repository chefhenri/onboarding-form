import { useState } from "react";

import { Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const DATE_FMT = 'MM/DD/YYYY'

const FormDatePicker = ({ id, name, label, required }) => {
    const [date, setDate] = useState(null)

    const handleDateChange = (newDate) => {
        setDate(newDate)
    }

    return (
        <Grid item xs={6}>
            <DatePicker
                {...{ id, name, label }}
                disablePast
                value={date}
                inputFormat={DATE_FMT}
                onChange={handleDateChange}
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
