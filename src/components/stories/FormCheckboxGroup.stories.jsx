// FormCheckboxGroup.stories.jsx

import FormCheckboxGroup from "../form/FormCheckboxGroup";
import { Container, Paper } from "@mui/material";

export default {
    title: "Checkbox Group",
    component: FormCheckboxGroup
}

export const Default = () => {
    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormCheckboxGroup />
            </Paper>
        </Container>
    )
}