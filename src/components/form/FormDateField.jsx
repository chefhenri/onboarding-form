import {useState} from "react";

import {Grid, TextField} from "@mui/material";
import {DesktopDatePicker} from "@mui/x-date-pickers";

const FormDateField = () => {
    const [date, setDate] = useState()

    const handleDateChange = (newDate) => {
        setDate(newDate)
    }

    return (
            <Grid item xs={6}>
                <DesktopDatePicker
                    label={"Placeholder"}
                    inputFormat="MM/DD/YYYY"
                    value={date}
                    onChange={handleDateChange}
                    renderInput={(props) => (<TextField {...props} fullWidth/>)}/>
            </Grid>
    )
}

export default FormDateField
