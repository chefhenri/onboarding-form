import {Box, Container, Paper, Typography} from "@mui/material";

import SectionStepper from "./SectionStepper";
import SectionForm from "./SectionForm";
import SectionControl from "./SectionControl";
import {useState} from "react";

const steps = [
    {label: 'Select campaign settings', optional: false},
    {label: 'Create an ad group', optional: true},
    {label: 'Create an ad', optional: false},
    {label: 'Buy adspace', optional: false},
    {label: 'Launch an ad', optional: false}
];

const SectionPanel = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [skipped, setSkipped] = useState(new Set())

    const handleNext = () => {
        setActiveStep((currentStep) => currentStep + 1)
    }

    const handleBack = () => {
        setActiveStep((currentStep) => currentStep - 1)
    }

    const isOptional = () => {
        return steps[activeStep].optional
    }

    const handleSkip = () => {
        // Check if the step is optional
        if (!isOptional()) throw new Error('You cannot skip a step that isn\'t optional.')

        // Add the optional step to the set of skipped steps
        setSkipped((skipped) => new Set(skipped.values()).add(activeStep))

        // Index the stepper
        handleNext()
    }

    return (
            <Container fixed>
                <Paper sx={{ marginTop: '14rem', padding: '2rem' }}>
                    <Box>
                        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                            Placeholder
                        </Typography>
                    </Box>
                    <SectionStepper steps={steps} active={activeStep} />
                    <SectionForm />
                    <SectionControl active={activeStep} next={handleNext} back={handleBack} skip={handleSkip} optional={steps[activeStep].optional} numSteps={steps.length} />
                </Paper>
            </Container>
    )
}

export default SectionPanel
