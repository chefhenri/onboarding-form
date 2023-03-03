import { useContext } from "react"
import { Step, StepLabel, Stepper } from "@mui/material"
import { SectionCtx } from "../../../../contexts"

import StyledConnector from "./Connector"
import StyledStepIcon from "./StepIcon"

// TODO: Allow steps navigation via step label click
const ContentsStepper = ({ headings, activeSection }) => {
    const setSection = useContext(SectionCtx)

    const handleStepClick = (idx) => {
        setSection({ type: 'set_section', payload: { index: idx } })
    }

    return (
        <Stepper orientation="vertical" activeStep={activeSection} connector={<StyledConnector />}>
            {headings.map((heading, idx) => (
                <Step key={`section-${idx}-heading`}>
                    <StepLabel StepIconComponent={StyledStepIcon} onClick={() => handleStepClick(idx)}>
                        {heading}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default ContentsStepper
