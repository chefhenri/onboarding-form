import {FormControlLabel, Grid, Switch} from "@mui/material";

const FormSwitchField = ({ defaultChecked = true }) => {
    return (
            <Grid item xs={6}>
                <FormControlLabel control={<Switch defaultChecked={defaultChecked} />} label={"Placeholder"} />
            </Grid>
    )
}

export default FormSwitchField