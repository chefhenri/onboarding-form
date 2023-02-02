import { FormControlLabel, Grid, Switch } from "@mui/material";

const FormSwitch = ({ checked, defaultChecked, handler }) => {
    return (
        <Grid item xs={6}>
            <FormControlLabel
                control={
                    <Switch
                        checked={checked}
                        defaultChecked={defaultChecked}
                        onChange={handler} />
                }
                label={"Placeholder"} />
        </Grid>
    )
}

export default FormSwitch
