import { Grid, TextField } from "@mui/material";

const FormTextField = ({ value, label, required = true }) => {
    return (
        <Grid item xs={6}>
            <TextField fullWidth variant="outlined" {...{ value, label, required }} />
        </Grid>
    )
}

export default FormTextField