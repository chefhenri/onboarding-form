import { StepConnector, stepConnectorClasses, styled } from "@mui/material";

const StyledConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.root}`]: {
        display: 'none'
    }
}))

export default StyledConnector
