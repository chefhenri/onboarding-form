// FormCheckboxField.stories.jsx

import { useState } from "react";
import { Container, Paper } from "@mui/material";

import FormCheckboxField from "../form/FormCheckboxField";

export default {
    title: "Checkbox",
    component: FormCheckboxField
}

const Template = (args) => {
    const [checked, setChecked] = useState(args.defaultChecked)

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

export const Default = Template.bind({})
Default.args = { defaultChecked: false }
