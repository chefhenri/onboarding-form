import {useState} from "react";

import {Box, Step, Stepper, StepLabel} from "@mui/material";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const SectionStepper = () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep(currentStep => currentStep + 1)
    }

    const handleBack = () => {
        setActiveStep(currentStep => currentStep - 1)
    }

    return (
            <Box sx={{ width: '100%', marginBottom: '2rem' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, idx) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                    ))}
                </Stepper>
            </Box>
    )
}

export default SectionStepper
