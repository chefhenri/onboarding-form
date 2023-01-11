import {FormControl, FormGroup, FormLabel, Grid} from "@mui/material";

import FormCheckboxField from "./FormCheckboxField";

const boxes = Array(6).fill(0)

const FormCheckboxGroup = () => {
    return (
            <Grid item xs={12}>
                <Grid container>
                    <FormControl component="fieldset" variant="standard" fullWidth>
                        <FormLabel component="legend">Placeholder</FormLabel>
                        <FormGroup row>
                            {boxes.map((_, idx) => (
                                    <FormCheckboxField />
                            ))}
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
    )
}

export default FormCheckboxGroup
