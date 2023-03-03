import _ from 'lodash'
import { FormControl, FormGroup, FormLabel, Grid } from "@mui/material";

import FormCheckbox from "./Checkbox";

const FormCheckboxGroup = ({ id, name, label, options, required }) => {
    return (
        <Grid item xs={12}>
            <Grid container>
                <FormControl component="fieldset" variant="standard" required={required} fullWidth>
                    <FormLabel component="legend">{label}</FormLabel>
                    <FormGroup row>
                        {options.map((option, idx) => (
                            <FormCheckbox {...{
                                name: _.camelCase([name, 'opt', idx]),
                                label: option,
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
