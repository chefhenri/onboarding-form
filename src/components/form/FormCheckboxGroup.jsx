import {FormControl, FormGroup, FormLabel, Grid} from "@mui/material";

import FormCheckboxField from "./FormCheckboxField";
import {useState} from "react";

const FormCheckboxGroup = () => {
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
                    <FormControl component="fieldset" variant="standard" fullWidth>
                        <FormLabel component="legend">Placeholder</FormLabel>
                        <FormGroup row>
                            {Object.keys(checked).map((name, idx) => (
                                    <FormCheckboxField {...{ name, checked: checked[name], handler: handleChecked }} key={idx}/>
                            ))}
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
    )
}

export default FormCheckboxGroup
