import { Grid, TextField } from "@mui/material";

const FormAreaField = ({ prompt, value }) => {
    return (
        <Grid item xs={12}>
            <TextField fullWidth multiline variant="outlined" rows={5} placeholder={prompt} value={value} />
        </Grid>
    )
}

export default FormAreaField
