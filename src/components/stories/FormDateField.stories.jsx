// FormDateField.stories.jsx

import { Container, Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import FormDateField from "../form/FormDateField";

export default {
    title: 'Date Picker',
    component: FormDateField,
    decorators: [
        (Story) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Container>
                    <Paper sx={{ margin: '2rem', padding: '2rem' }}>
                        <Story />
                    </Paper>
                </Container>
            </LocalizationProvider>
        )
    ]
}

const Template = (args) => <FormDateField {...args}/>

export const Default = Template.bind({})
