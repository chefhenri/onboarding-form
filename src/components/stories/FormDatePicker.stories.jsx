// FormDateField.stories.jsx

import { Container, Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import FormDatePicker from "../form/FormDatePicker";

export default {
    title: 'Date Picker',
    component: FormDatePicker,
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

const Template = (args) => <FormDatePicker {...args}/>

export const Default = Template.bind({})
