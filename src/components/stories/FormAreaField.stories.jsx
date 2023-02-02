// FormAreaField.stories.jsx

import { Container, Paper } from "@mui/material";

import FormAreaField from "../form/FormAreaField";

export default {
    title: "Text Area",
    component: FormAreaField
}

const Template = (args) => {
    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormAreaField {...args} />
            </Paper>
        </Container>
    )
}

export const Default = Template.bind({})
Default.args = { prompt: 'ex. something specific...' }
