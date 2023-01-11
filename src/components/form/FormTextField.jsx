import {Grid, TextField} from "@mui/material";

const FormTextField = ({ label, required = true }) => {
    return (
            <Grid item xs={6}>
                <TextField fullWidth variant="outlined" {...{ label, required }} />
            </Grid>
    )
}

export default FormTextField