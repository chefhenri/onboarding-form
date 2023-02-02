import { Box, Button } from "@mui/material";

const SectionControl = ({ active, next, back, skip, optional, numSteps }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', width: '100%' }}>
            <Button
                sx={{ paddingX: '16px', alignSelf: 'flex-start' }}
                variant={active === 0 ? 'disabled' : 'text'}
                onClick={() => back()}>
                Back
            </Button>
            <Box>
                {optional && (<Button
                    sx={{ alignSelf: 'flex-end' }}
                    variant="text"
                    onClick={() => skip()}>
                    Skip
                </Button>)}
                <Button
                    sx={{ alignSelf: 'flex-end', marginLeft: '8px' }}
                    variant={active === numSteps - 1 ? 'disabled' : 'contained'}
                    onClick={() => next()}>
                    Next
                </Button>
            </Box>
        </Box>
    )
}

export default SectionControl
