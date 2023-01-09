import {Box, Grid, TextField} from "@mui/material";

const fields = Array(6).fill(0)

const SectionForm = () => {
    return (
            <Box>
                <Grid container spacing="24">
                    {fields.map((_, idx) => (
                            <Grid item xs={6} key={idx}>
                                <TextField fullWidth variant="outlined" label="Placeholder" />
                            </Grid>
                    ))}
                </Grid>
            </Box>
    )
}

export default SectionForm
