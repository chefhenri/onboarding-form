import { useState } from "react";
import { Grid, TextField } from "@mui/material";

const FormTextArea = ({ id, name, label, required }) => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <Grid item xs={12}>
            <TextField fullWidth multiline variant="filled" rows={5} {...{id, name, label, required, value}} onChange={event => handleChange(event)} />
        </Grid>
    )
}

export default FormTextArea
