import { Checkbox, FormControlLabel, Grid } from "@mui/material";

const FormCheckbox = ({ label, checked, handler }) => {
        return (
                <Grid item xs={4}>
                        <FormControlLabel control={
                                <Checkbox
                                        checked={checked}
                                        onChange={handler} />
                        }
                                label={label} />
                </Grid>
        )
}

export default FormCheckbox
