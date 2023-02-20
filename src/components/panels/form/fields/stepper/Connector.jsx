import { StepConnector, stepConnectorClasses, styled } from "@mui/material";

const StyledConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        display: 'none'
    },
    [`&.${stepConnectorClasses.line}`]: {
        display: 'none'
    }
    // [`&.${stepConnectorClasses.active}`]: {
    //     [`&.${stepConnectorClasses.line}`]: {
    //         display: 'none'
    //     }
    // },
    // [`&.${stepConnectorClasses.completed}`]: {
    //     [`&.${stepConnectorClasses.line}`]: {
    //         display: 'none'
    //     }
    // }
}))

export default StyledConnector
