import {Divider, Grid, Typography} from "@mui/material";

// TODO: Add 'info' control and content
const FormHeading = ({ text }) => {
    return (
            <Grid item xs={12}>
                <Typography variant="h6">{text}</Typography>
                <Divider />
            </Grid>
    )
}

export default FormHeading
