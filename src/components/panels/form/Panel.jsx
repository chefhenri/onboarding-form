import { Box, Paper, Stack, Typography } from "@mui/material"

import FormNav from "./Nav"
import FormContainer from "./Container"

const FormPanel = ({
    sectionHeading,
    subsections,
    activeSubsection,
    handleNext,
    handleBack,
    canNavigate,
    inReview
}) => {
    const subsection = subsections[activeSubsection]

    return (
        <Paper elevation={3} sx={{ height: '50vh', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <Stack spacing={6}>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
                            {sectionHeading}
                        </Typography>
                    </Box>
                    <FormContainer {...{ subsection }} />
                </Stack>
                <FormNav {...{
                    subsections,
                    activeSubsection,
                    handleNext,
                    handleBack,
                    canNavigate,
                    inReview
                }} />
            </Stack>
        </Paper>
    )
}

export default FormPanel
