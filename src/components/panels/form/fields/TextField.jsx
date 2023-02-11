import { Grid, TextField } from "@mui/material";

const FormTextField = ({ id, name, type, label, required }) => {
    return (
        <Grid item xs={6}>
            <TextField fullWidth variant="standard" {...{ id, name, type, label, required }} />
        </Grid>
    )
}

export default FormTextField