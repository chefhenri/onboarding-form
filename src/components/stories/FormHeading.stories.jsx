// FormHeading.stories.jsx

import { Container, Paper } from "@mui/material";

import FormHeading from "../form/FormHeading";

export default {
    title: "Heading",
    component: FormHeading
}

const Template = (args) => {
    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormHeading {...args} />
            </Paper>
        </Container>
    )
}

export const Default = Template.bind({})
Default.args = { heading: 'Some Heading' }