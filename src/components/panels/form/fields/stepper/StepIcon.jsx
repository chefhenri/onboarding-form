import { styled } from "@mui/material";
import { Check } from "feather-icons-react/build/IconComponents";

const StyledIconRoot = styled('div')(({ theme, ownerState }) => ({
    display: 'flex',
    width: 22,
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: 'palette.primary.main'
    }),
    '& .StyledStepIcon-completed': {
        color: 'palette.primary.main',
        zIndex: 1,
        fontSize: '1rem'
    },
    '& .StyledStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor'
    }
}))

const StyledStepIcon = ({ active = false, completed = true, className }) => {
    return (
        <StyledIconRoot {...{ ownerState: active, className }}>
            {completed ? (
                <Check className="StyledStepIcon-completed" />
            ) : (
                <div className="StyledStepIcon-circle" />
            )}
        </StyledIconRoot>
    )
}

export default StyledStepIcon
