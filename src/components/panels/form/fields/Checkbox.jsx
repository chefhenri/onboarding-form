import { Checkbox, FormControlLabel, Grid } from "@mui/material"

const FormCheckbox = ({ name, label, checked, handler }) => {
    return (
        <Grid item xs={6}>
            <FormControlLabel control={
                <Checkbox {...{ name, checked }} onChange={handler} />
            } label={label} />
        </Grid>
    )
}

export default FormCheckbox
