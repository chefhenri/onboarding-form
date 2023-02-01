import { Divider, Grid, Typography } from "@mui/material";

// TODO: Add 'info' control and content
const FormHeading = ({ heading }) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h6">{heading}</Typography>
            <Divider />
        </Grid>
    )
}

export default FormHeading
