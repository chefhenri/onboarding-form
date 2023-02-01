import { Checkbox, FormControlLabel, Grid } from "@mui/material";

const FormCheckboxField = ({ name, checked, handler }) => {
        return (
                <Grid item xs={4}>
                        <FormControlLabel control={
                                <Checkbox
                                        name={name}
                                        checked={checked}
                                        onChange={handler} />
                        }
                                label={"Placeholder"} />
                </Grid>
        )
}

export default FormCheckboxField
