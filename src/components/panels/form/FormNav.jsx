import { Button, Stack } from "@mui/material"
import { useState } from "react"
import FormStepper from "./FormStepper"

// TODO: Push to bottom of layout
const FormNav = ({ steps = ['Step 1', 'Step 2', 'Step 3'] }) => {
    const [activeStep, setActiveStep] = useState(0)

    const totalSteps = steps.length

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    return (
        <Stack direction="row" sx={{ justifyContent: 'space-between' }} >
            <Button variant={activeStep === 0 ? 'disabled': 'outlined'} onClick={handleBack}>
                Back
            </Button>
            <FormStepper {...{ steps, activeStep }} />
            <Button variant={activeStep === totalSteps ? 'disabled' : 'contained'} onClick={handleNext}>
                Next
            </Button>
        </Stack >
    )
}

export default FormNav
