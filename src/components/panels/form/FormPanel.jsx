import { Box, Paper, Stack, Typography } from "@mui/material"
import FormNav from "./FormNav"

const FormPanel = () => {
    return (
        <Paper elevation={3} sx={{ width: '920px', height: '600px', borderRadius: '15px' }}>
            <Stack spacing={6} sx={{padding: '2rem'}}>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
                        Section Heading
                    </Typography>
                </Box>
                <Box>
                    <Box component="div" sx={{ width: '80px', height: '5px', bgcolor: '#0066FF', borderTopLeftRadius: '50px', borderTopRightRadius: '50px' }}/>
                    <Typography component="div" variant="h6" sx={{ fontWeight: 700 }}>
                        Subheading
                    </Typography>
                </Box>
                <FormNav/>
            </Stack>
        </Paper>
    )
}

export default FormPanel
