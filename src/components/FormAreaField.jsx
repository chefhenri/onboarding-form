import {Grid, TextField} from "@mui/material";

const FormAreaField = ({ fieldKey }) => {
    return (
            <Grid item xs={12} key={fieldKey}>
                <TextField fullWidth multiline variant="outlined" />
            </Grid>
    )
}

export default FormAreaField
