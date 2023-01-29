import {Checkbox, FormControlLabel, Grid} from "@mui/material";

const FormCheckboxField = ({ name, checked, handler, defaultChecked = false }) => {
    return (
            <Grid item xs={4}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name={name}
                            checked={checked}
                            defaultChecked={defaultChecked}
                            onChange={handler}/>
                    }
                    label={"Placeholder"}/>
            </Grid>
    )
}

export default FormCheckboxField
