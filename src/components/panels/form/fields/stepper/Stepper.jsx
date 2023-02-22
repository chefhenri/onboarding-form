import { Step, Stepper, StepLabel } from "@mui/material"
import StyledConnector from "./Connector"
import StyledStepIcon from "./StepIcon"

const FormStepper = ({ headings, activeSubsection }) => {
    return (
        <Stepper activeStep={activeSubsection} connector={<StyledConnector />}>
            {headings.map((heading, idx) => (
                <Step key={`subsection-${idx}`}>
                    <StepLabel StepIconComponent={StyledStepIcon} />
                </Step>
            ))}
        </Stepper>
    )
}

export default FormStepper
