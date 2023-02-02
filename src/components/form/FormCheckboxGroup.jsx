import { FormControl, FormGroup, FormLabel, Grid } from "@mui/material";

import FormCheckbox from "./FormCheckbox";
import { useState } from "react";

const FormCheckboxGroup = ({ label, required }) => {
    const [checked, setChecked] = useState({
        0: false,
        1: false,
        2: false
    })

    const handleChecked = (event) => {
        setChecked((prevChecked) => ({
            ...prevChecked,
            [event.target.name]: event.target.checked
        }))
    }

    return (
        <Grid item xs={12}>
            <Grid container>
                <FormControl component="fieldset" variant="standard" required={required} fullWidth>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup row>
                        {Object.keys(checked).map((name, idx) => (
                            <FormCheckbox {...{ name, checked: checked[name], handler: handleChecked }} key={idx} />
                        ))}
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FormCheckboxGroup
