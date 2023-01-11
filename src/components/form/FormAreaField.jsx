import {Grid, TextField} from "@mui/material";

const FormAreaField = () => {
    return (
            <Grid item xs={12}>
                <TextField fullWidth multiline variant="outlined" rows={5} />
            </Grid>
    )
}

export default FormAreaField
