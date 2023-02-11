import { FormControlLabel, Grid, Switch } from "@mui/material";
import { useState } from "react";

const FormSwitch = ({ id, name, type, label, default: defaultChecked, required }) => {
    const [checked, setChecked] = useState(defaultChecked)

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <Grid item sx={{ marginTop: '1rem' }}>
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
