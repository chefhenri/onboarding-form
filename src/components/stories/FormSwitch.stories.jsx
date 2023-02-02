// FormSwitchField.stories.jsx

import { useState } from "react";

import FormSwitch from "../form/FormSwitch";
import { Container, Paper } from "@mui/material";

export default {
    title: 'Switch',
    component: FormSwitch
}

const Template = (args) => {
    const [checked, setChecked] = useState(args.defaultChecked)

    const toggle = () => {
        setChecked(!checked)
    }

    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormSwitch {...args} checked={checked} handler={toggle} />
            </Paper>
        </Container>
    )
}

export const Default = Template.bind({})
Default.args = { defaultChecked: false }
