// FormCheckboxField.stories.jsx

import { useState } from "react";
import { Container, Paper } from "@mui/material";

import FormCheckboxField from "../form/FormCheckboxField";

export default {
    title: "Checkbox",
    component: FormCheckboxField
}

const Template = (args) => {
    const [checked, setChecked] = useState(false)

    const toggle = () => {
        setChecked(!checked)
    }

    return (
        <Container>
            <Paper sx={{ padding: '2rem' }}>
                <FormCheckboxField {...args} handler={toggle} />
            </Paper>
        </Container>
    )
}

export const Checked = Template.bind({})
Checked.args = { defaultChecked: true }

export const Unchecked = Template.bind({})
Unchecked.args = { defaultChecked: false }
