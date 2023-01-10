import {Box, Button} from "@mui/material";

const SectionControl = ({ active, next, back, skip, optional, numSteps }) => {
    return (
            <Box sx={{ marginTop: '2rem', width: '100%' }}>
                <Button sx={{ paddingX: '16px' }} variant={ active === 0 ? 'disabled': 'text' } onClick={() => back()}>Back</Button>
                {optional && ( <Button variant="contained" onClick={() => skip()}>Skip</Button> )}
                <Button variant={ active === numSteps - 1 ? 'disabled': 'contained' } onClick={() => next()}>Next</Button>
            </Box>
    )
}

export default SectionControl
