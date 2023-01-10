import {Box, Container, Paper, Typography} from "@mui/material";

import SectionStepper from "./SectionStepper";
import SectionForm from "./SectionForm";
import SectionControl from "./SectionControl";
import {useState} from "react";

const SectionPanel = () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((currentStep) => currentStep + 1)
    }

    const handleBack = () => {
        setActiveStep((currentStep) => currentStep - 1)
    }

    return (
            <Container fixed>
                <Paper sx={{ marginTop: '2rem', padding: '2rem' }}>
                    <Box>
                        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                            Placeholder
                        </Typography>
                    </Box>
                    <SectionStepper active={activeStep} />
                    <SectionForm />
                    <SectionControl active={activeStep} next={handleNext} back={handleBack} />
                </Paper>
            </Container>
    )
}

export default SectionPanel
