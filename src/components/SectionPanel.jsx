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
        let revisedSkipped = new Set(skipped.values())

        // Remove step from skipped if previously skipped, but later completed
        if (isSkipped(activeStep)) revisedSkipped.delete(activeStep)

        // Update skipped steps
        setSkipped(new Set(revisedSkipped.values()))

        // Set the active step to the next step
        setActiveStep((currentStep) => currentStep + 1)
    }

    const handleBack = () => {
        // Set the active step to the previous step
        setActiveStep((currentStep) => currentStep - 1)
    }

    const handleSkip = () => {
        // Check if the step is optional
        if (!isOptional()) throw new Error('You cannot skip a step that isn\'t optional.')

        // Add the optional step to the set of skipped steps
        setSkipped((skipped) => new Set(skipped.values()).add(activeStep))

        // Index the stepper
        handleNext()
    }

    const isOptional = () => {
        return steps[activeStep].optional
    }

    const isSkipped = (step) => {
        return skipped.has(step)
    }

    return (
            <Container fixed>
                <Paper sx={{ marginTop: '14rem', padding: '2rem' }}>
                    <Box>
                        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                            Placeholder
                        </Typography>
                    </Box>
                    <SectionStepper steps={steps} active={activeStep} isSkipped={isSkipped} />
                    <SectionForm />
                    <SectionControl
                        active={activeStep}
                        next={handleNext}
                        back={handleBack}
                        skip={handleSkip}
                        optional={steps[activeStep].optional}
                        numSteps={steps.length} />
                </Paper>
            </Container>
    )
}

export default SectionPanel
