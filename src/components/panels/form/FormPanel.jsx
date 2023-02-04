import { useState } from "react"
import { Box, Grid, Paper, Stack, Typography } from "@mui/material"

import FormNav from "./FormNav"
import FormTextField from "./fields/TextField"

const FormPanel = ({ subsections, nextSection }) => {
    const [activeSubsection, setActiveSubsection] = useState(0)

    const totalSubsections = subsections.length
    const subsection = subsections[activeSubsection]

    // TODO: Cycle sections when subsections are complete
    const handleNext = () => {
        if (activeSubsection === totalSubsections) {
            nextSection()
            setActiveSubsection(0)
        } else {
            setActiveSubsection(activeSubsection + 1)
        }
    }

    const handleBack = () => {
        setActiveSubsection(activeSubsection - 1)
    }

    return (
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
                <FormNav {...{ subsections, activeSubsection, handleNext, handleBack }} />
            </Stack>
        </Paper>
    )
}

export default FormPanel
