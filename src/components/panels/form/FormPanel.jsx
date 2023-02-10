import { Box, Grid, Paper, Stack, Typography } from "@mui/material"

import FormNav from "./FormNav"
import FormTextField from "./fields/TextField"

const FormPanel = ({ subsections, activeSubsection, handleNext, handleBack, canNavigate }) => {
    const subsection = subsections[activeSubsection]

    return (
        // TODO: Narrow surface to make more room for InfoPanel
        <Paper elevation={3} sx={{ width: '920px', height: '700px', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <Stack spacing={6}>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
                            Section Heading
                        </Typography>
                    </Box>
                    <Box>
                        <Box component="div" sx={{ width: '80px', height: '5px', bgcolor: '#0066FF', borderTopLeftRadius: '50px', borderTopRightRadius: '50px' }} />
                        <Typography component="div" variant="h6" sx={{ fontWeight: 700 }}>
                            {subsection.heading}
                        </Typography>
                        <Grid container spacing={2}>
                            {subsection.fields.map(({ label, required }, idx) => (
                                <FormTextField key={`${subsection.heading}-field-${idx}`} {...{ label, required }} />
                            ))}
                        </Grid>
                    </Box>
                </Stack>
                <FormNav {...{ subsections, activeSubsection, handleNext, handleBack, canNavigate }} />
            </Stack>
        </Paper>
    )
}

export default FormPanel
