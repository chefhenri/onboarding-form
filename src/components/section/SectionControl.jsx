import {Box, Button, Grid} from "@mui/material";

const SectionControl = ({ active, next, back, skip, optional, numSteps }) => {
    return (
            <Box sx={{ marginTop: '2rem', width: '100%' }}>
                <Grid container columnSpacing="0.5rem">
                    <Grid item>
                        <Button
                            sx={{ paddingX: '16px' }}
                            variant={ active === 0 ? 'disabled': 'text' }
                            onClick={() => back()}>
                            Back
                        </Button>
                    </Grid>
                    {optional && (
                            <Grid item>
                                <Button variant="contained" onClick={() => skip()}>Skip</Button>
                            </Grid>
                    )}
                    <Grid item>
                        <Button
                            variant={ active === numSteps - 1 ? 'disabled': 'contained' }
                            onClick={() => next()}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Box>
    )
}

export default SectionControl
