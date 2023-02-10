import { Step, StepLabel, Stepper } from "@mui/material"

// TODO: Customize step labels
const FormStepper = ({ headings, activeSubsection }) => {
    return (
        <Stepper activeStep={activeSubsection}>
            {headings.map((heading, idx) => (
                <Step key={`subsection-${idx}`}>
                    <StepLabel>{heading}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default FormStepper
