// FormSelectField.stories.jsx

import { Container, Paper } from "@mui/material";
import FormSelect from "../form/FormSelect";

export default {
    title: 'Select',
    component: FormSelect,
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

export const Default = <FormSelect />
