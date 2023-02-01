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

export const Empty = Template.bind({})
Empty.args = { prompt: 'ex. something specific...' }

export const Not_Empty = Template.bind({})
Not_Empty.args = { ...Empty.args, value: 'Something very specific...' }
