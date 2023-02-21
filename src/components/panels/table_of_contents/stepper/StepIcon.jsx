import { styled } from "@mui/material";

const StyledIconRoot = styled('div')(({ theme, ownerState }) => ({
    display: 'flex',
    alignItems: 'center',
    ...(ownerState.active && {
        color: 'palette.primary.main'
    }),
    '& .StyledStepIcon-circle': {
        display: 'none'
    },
    '& .StyledStepIcon-active': {
        display: 'block',
        width: 4,
        height: 22,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#0066FF'
    },
    '& .StyledStepIcon-completed': {
        display: 'none'
    },
}))

const StyledStepIcon = ({ active, completed, className }) => {
    return (
        <StyledIconRoot {...{ ownerState: active, className }} sx={{ borderWidth: '1px', borderColor: '#0066FF' }}>
            {completed ? (
                <div className="StyledStepIcon-completed" />
            ) : (
                <div className={active ? 'StyledStepIcon-active' : 'StyledStepIcon-circle'} />
            )}
        </StyledIconRoot>
    )
}

export default StyledStepIcon
