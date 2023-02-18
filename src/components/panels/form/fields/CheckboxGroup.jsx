import { FormControl, FormGroup, FormLabel, Grid } from "@mui/material";

import FormCheckbox from "./Checkbox";
import { useState } from "react";

const sizes = {
    'half': 6,
    'full': 12
}

// !FIXME: Reducer appends empty option, cannot toggle checkbox
const FormCheckboxGroup = ({ size, label, options, required }) => {
    // Map list of options to object to track 'checked' state
    const [checked, setChecked] = useState(options.reduce((a, v) => ({
        ...a,
        [v]: false
    }), {}))

    const handleChecked = (event) => {
        setChecked((prevChecked) => ({
            ...prevChecked,
            [event.target.name]: event.target.checked
        }))
    }

    return (
        <Grid item xs={sizes[size]}>
            <Grid container>
                <FormControl component="fieldset" variant="standard" required={required} fullWidth>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup row>
                        {Object.keys(checked).map((label, idx) => (
                            <FormCheckbox {...{ label, checked: checked[label], handler: handleChecked }} key={idx} />
                        ))}
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FormCheckboxGroup
