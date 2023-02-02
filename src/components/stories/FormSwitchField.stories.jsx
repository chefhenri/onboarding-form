// FormSwitchField.stories.jsx

import { useState } from "react";

import FormSwitchField from "../form/FormSwitchField";
import { Container, Paper } from "@mui/material";

export default {
    title: 'Switch',
    component: FormSwitchField
}

const Template = (args) => {
    const [checked, setChecked] = useState(args.defaultChecked)

    const toggle = () => {
        setChecked(!checked)
    }

    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormSwitchField {...args} checked={checked} handler={toggle} />
            </Paper>
        </Container>
    )
}

export const Default = Template.bind({})
Default.args = { defaultChecked: false }