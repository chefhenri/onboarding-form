import { Step, StepLabel, Stepper } from "@mui/material"

const ContentsStepper = ({ headings, activeSection }) => {
    return (
        <Stepper orientation="vertical" activeStep={activeSection}>
            {headings.map((heading, idx) => (
                <Step key={`section-${idx}-heading`}>
                    <StepLabel>
                        {heading}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default ContentsStepper
