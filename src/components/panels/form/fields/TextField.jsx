import { Grid, TextField } from "@mui/material";

const FormTextField = ({ value = '', label, required }) => {
    return (
        <Grid item xs={6}>
            <TextField fullWidth variant="standard" {...{ value, label, required }} />
        </Grid>
    )
}

export default FormTextField