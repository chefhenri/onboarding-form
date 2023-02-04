import { Step, StepLabel, Stepper } from "@mui/material"

const ContentsStepper = ({ headings }) => {
    return (
        <Stepper orientation="vertical">
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
