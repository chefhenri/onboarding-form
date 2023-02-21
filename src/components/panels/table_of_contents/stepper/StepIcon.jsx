import { styled } from "@mui/material";

const StyledIconRoot = styled('div')(({ theme, ownerState }) => ({
    display: 'flex',
    width: 22,
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: 'palette.primary.main'
    }),
    '& .StyledStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0066FF',
        transitionDuration: '300ms',
        transitionProperty: 'background-color',
        transitionTimingFunction: 'ease-in-out'
    },
    '& .StyledStepIcon-active': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0066FF',
        backgroundColor: '#0066FF',
        transitionDuration: '300ms',
        transitionProperty: 'background-color',
        transitionTimingFunction: 'ease-in-out'
    },
    '& .StyledStepIcon-completed': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0066FF',
        backgroundColor: '#0066FF',
        transitionDuration: '300ms',
        transitionProperty: 'background-color',
        transitionTimingFunction: 'ease-in-out'
    },
}))

const StyledStepIcon = ({ active, completed, className }) => {
    return (
        <StyledIconRoot {...{ ownerState: active, className }} sx={{borderWidth: '1px', borderColor: '#0066FF'}}>
            {completed ? (
                <div className="StyledStepIcon-completed" />
            ) : (
                <div className={active ? 'StyledStepIcon-active' : 'StyledStepIcon-circle'} />
            )}
        </StyledIconRoot>
    )
}

export default StyledStepIcon
