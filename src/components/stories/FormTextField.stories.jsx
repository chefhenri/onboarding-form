// FormTextField.stories.jsx

import { Container, Paper } from "@mui/material";
import { useState } from "react";

import FormTextField from "../form/FormTextField";

export default {
    title: 'Text Input',
    component: FormTextField
}

const Template = (args) => {
    const [value, setValue] = useState(args.value)

    const handleValue = (newVal) => {
        setValue(newVal)
    }

    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormTextField {...args} value={value} onChange={handleValue} />
            </Paper>
        </Container>
    )
}

export const Default = Template.bind({})
Default.args = { label: 'Text Field', required: false }

export const Required = Template.bind({})
Required.args = { ...Default.args, required: true }
