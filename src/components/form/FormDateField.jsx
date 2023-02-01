import { useState } from "react";

import { Grid, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment";

const DATE_FMT = 'MM/DD/YYYY'

const FormDateField = () => {
    const [date, setDate] = useState(moment())

    const handleDateChange = (newDate) => {
        setDate(newDate)
    }

    return (
        <Grid item xs={6}>
            <DesktopDatePicker
                label={"Placeholder"}
                inputFormat={DATE_FMT}
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (<TextField {...props} fullWidth />)} />
        </Grid>
    )
}

export default FormDateField
