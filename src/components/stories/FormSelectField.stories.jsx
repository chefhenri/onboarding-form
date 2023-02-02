// FormSelectField.stories.jsx

import { Container, Paper } from "@mui/material";
import FormSelectField from "../form/FormSelectField";

export default {
    title: 'Select',
    component: FormSelectField,
    decorators: [
        (Story) => (
            <Container>
                <Paper sx={{ padding: '2rem' }}>
                    <Story />
                </Paper>
            </Container>
        )
    ]
}

export const Default = <FormSelectField />
