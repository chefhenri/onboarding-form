// FormCheckboxField.stories.jsx

import {useState} from "react";

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

    return <FormCheckboxField {...args} handler={toggle} />
}

export const Checked = Template.bind({})
Checked.args = {defaultChecked: true}

export const Unchecked = Template.bind({})
Unchecked.args = {defaultChecked: false}
