import { Grid, TextField } from "@mui/material";

const FormTextArea = ({ id, name, label, required }) => {
    return (
        <Grid item xs={12}>
            <TextField fullWidth multiline variant="filled" rows={5} {...{id, name, label, required}} />
        </Grid>
    )
}

export default FormTextArea
