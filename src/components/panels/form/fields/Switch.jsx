import { FormControlLabel, Grid, Switch } from "@mui/material";
import { useState } from "react";

// TODO: Rename 'default' param - reserved keyword
const FormSwitch = ({ id, name, type, label, default: defaultChecked, required }) => {
    const [checked, setChecked] = useState(defaultChecked)

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <Grid item xs={6}>
            <FormControlLabel
                control={
                    <Switch
                        {...{ id, name }}
                        checked={checked}
                        onChange={handleChange} />
                }
                label={label} />
        </Grid>
    )
}

export default FormSwitch
