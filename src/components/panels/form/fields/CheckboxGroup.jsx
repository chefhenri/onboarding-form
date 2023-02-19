import _ from 'lodash'
import { FormControl, FormGroup, FormLabel, Grid } from "@mui/material";

import FormCheckbox from "./Checkbox";
import { useState } from "react";

const FormCheckboxGroup = ({ label, options, required }) => {
    // Map list of options to object to track 'checked' state
    const [status, setStatus] = useState(options.reduce((acc, val, idx) => ({
        ...acc,
        [_.camelCase([label, 'box', idx])]: {
            label: val,
            checked: false
        }
    }), {}))

    const handleChecked = (event) => {
        let checkbox = event.target
        let name = _.camelCase(checkbox.name)

        setStatus((prevStatus) => ({
            ...prevStatus,
            [_.camelCase(checkbox.name)]: {
                ...prevStatus[name],
                checked: checkbox.checked
            }
        }))
    }

    // TODO: Convert input name style to camelCase
    return (
        <Grid item xs={12}>
            <Grid container>
                <FormControl component="fieldset" variant="standard" required={required} fullWidth>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup row>
                        {Object.values(status).map((status, idx) => (
                            <FormCheckbox {...{ name: _.kebabCase([label, 'box', idx]), label: status.label, checked: status.checked, handler: handleChecked }} key={idx} />
                        ))}
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FormCheckboxGroup
