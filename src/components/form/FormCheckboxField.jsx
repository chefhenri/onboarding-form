import {Checkbox, FormControlLabel, Grid} from "@mui/material";

const FormCheckboxField = () => {
    return (
            <Grid item xs={4}>
                <FormControlLabel
                    control={<Checkbox
                        checked={false}
                        onChange={() => {}}
                        name={"placeholder"}/>}
                    label={"Placeholder"}/>
            </Grid>
    )
}

export default FormCheckboxField
