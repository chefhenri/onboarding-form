import _ from 'lodash'
import { useState } from "react";
import { FormControl, FormGroup, FormLabel, Grid } from "@mui/material";

import FormCheckbox from "./Checkbox";

const FormCheckboxGroup = ({ id, name, label, options, required }) => {
    // Map list of options to object to track 'checked' state
    const [status, setStatus] = useState(options.reduce((acc, val, idx) => ({
        ...acc,
        [_.camelCase([name, 'opt', idx])]: {
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

    return (
        <Grid item xs={12}>
            <Grid container>
                <FormControl component="fieldset" variant="standard" required={required} fullWidth>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup row>
                        {Object.values(status).map((status, idx) => (
                            <FormCheckbox {...{
                                name: _.camelCase([name, 'opt', idx]),
                                label: status.label,
                                checked: status.checked,
                                handler: handleChecked
                            }}
                                key={idx} />
                        ))}
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FormCheckboxGroup
