import { Step, StepLabel, Stepper } from "@mui/material"
import StyledConnector from "./Connector"
import StyledStepIcon from "./StepIcon"

const ContentsStepper = ({ headings, activeSection }) => {
    return (
        <Stepper orientation="vertical" activeStep={activeSection} connector={<StyledConnector />}>
            {headings.map((heading, idx) => (
                <Step key={`section-${idx}-heading`}>
                    <StepLabel StepIconComponent={StyledStepIcon}>
                        {heading}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default ContentsStepper
