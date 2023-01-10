import {Box, Button} from "@mui/material";

const SectionControl = ({ active, next, back, steps = 2 }) => {
    return (
            <Box sx={{ marginTop: '2rem', width: '100%' }}>
                <Button sx={{ paddingX: '16px' }} variant={ active === 0 ? 'disabled': 'text' } onClick={() => back()}>Back</Button>
                <Button variant={ active === steps ? 'disabled': 'contained' } onClick={() => next()}>Next</Button>
            </Box>
    )
}

export default SectionControl
