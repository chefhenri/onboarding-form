// FormHeading.stories.jsx

import FormHeading from "../form/FormHeading";

export default {
    title: "Heading",
    component: FormHeading
}

const Template = (args) => <FormHeading {...args} />

export const Default = Template.bind({})
Default.args = { heading: 'Some Heading' }