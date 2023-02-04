// FormCheckboxGroup.stories.jsx

import FormCheckboxGroup from "../form/FormCheckboxGroup";
import { Container, Paper } from "@mui/material";

export default {
    title: "Checkbox Group",
    component: FormCheckboxGroup
}

const Template = (args) => {
    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormCheckboxGroup {...args} />
            </Paper>
        </Container>
    )
}

export const Default = Template.bind({})
Default.args = { label: 'Some Checkboxes', required: false }

export const Required = Template.bind({})
Required.args = { ...Default.args, required: true }