import {Box, Container, Paper, Typography} from "@mui/material";

import SectionStepper from "./SectionStepper";
import SectionForm from "./SectionForm";
import SectionControl from "./SectionControl";

const SectionPanel = () => {
    return (
            <Container fixed>
                <Paper sx={{ marginTop: '2rem', padding: '2rem' }}>
                    <Box>
                        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                            Placeholder
                        </Typography>
                    </Box>
                    <SectionStepper />
                    <SectionForm />
                    <SectionControl />
                </Paper>
            </Container>
    )
}

export default SectionPanel
