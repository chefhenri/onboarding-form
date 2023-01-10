import {Grid, TextField} from "@mui/material";

const FormTextField = ({ fieldKey, label }) => {
    return (
            <Grid item xs={6} key={fieldKey}>
                <TextField fullWidth variant="outlined" label={label} />
            </Grid>
    )
}

export default FormTextField