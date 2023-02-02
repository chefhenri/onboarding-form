// FormAreaField.stories.jsx

import { Container, Paper } from "@mui/material";

import FormTextArea from "../form/FormTextArea";

export default {
    title: "Text Area",
    component: FormTextArea
}

const Template = (args) => {
    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormTextArea {...args} />
            </Paper>
        </Container>
    )
}

export const Default = Template.bind({})
Default.args = { prompt: 'ex. something specific...' }
