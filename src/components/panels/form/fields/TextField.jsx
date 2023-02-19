import { useState } from "react";
import { Grid, TextField } from "@mui/material";

const FormTextField = ({ id, name, type, label, required }) => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <Grid item xs={6}>
            <TextField fullWidth variant="filled" {...{ id, name, type, label, required, value }} onChange={event => handleChange(event)} />
        </Grid>
    )
}

export default FormTextField