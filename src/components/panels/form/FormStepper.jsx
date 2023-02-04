import { Step, StepLabel, Stepper } from "@mui/material"

// TODO: Customize step labels
const FormStepper = ({ steps, activeStep }) => {
    return (
        <Stepper {...{ activeStep }}>
            {steps.map((label, idx) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default FormStepper
