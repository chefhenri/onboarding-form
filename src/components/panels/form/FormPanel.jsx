import { Box, Grid, Paper, Stack, Typography } from "@mui/material"

import FormNav from "./FormNav"
import FormCheckboxGroup from "./fields/CheckboxGroup"
import FormDatePicker from "./fields/DatePicker"
import FormSwitch from "./fields/Switch"
import FormTextArea from "./fields/TextArea"
import FormTextField from "./fields/TextField"
import FormSelect from "./fields/Select"

const FormPanel = ({ subsections, activeSubsection, handleNext, handleBack, canNavigate }) => {
    const subsection = subsections[activeSubsection]

    return (
        <Paper elevation={3} sx={{ width: '920px', height: '700px', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <Stack spacing={6}>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
                            Section Heading
                        </Typography>
                    </Box>
                    <Box>
                        <Box component="div" sx={{ width: '80px', height: '5px', bgcolor: '#0066FF', borderTopLeftRadius: '50px', borderTopRightRadius: '50px' }} />
                        <Typography component="div" variant="h6" sx={{ fontWeight: 700, marginBottom: '1rem' }}>
                            {subsection.heading}
                        </Typography>
                        <Grid container rowSpacing={3} columnSpacing={2}>
                            {subsection.fields.map(field => {
                                let key = `${subsection.heading}-${field.id}-field`

                                // TODO: Add case for 'select', 'slider'
                                switch (field.type) {
                                    case 'checkbox':
                                        return <FormCheckboxGroup key={key} {...field} />
                                    case 'date':
                                        return <FormDatePicker key={key} {...field} />
                                    case 'select':
                                        return <FormSelect key={key} {...field} />
                                    case 'switch':
                                        return <FormSwitch key={key} {...field} />
                                    case 'textarea':
                                        return <FormTextArea key={key} {...field} />
                                    default:
                                        return <FormTextField key={key} {...field} />
                                }
                            })}
                        </Grid>
                    </Box>
                </Stack>
                <FormNav {...{ subsections, activeSubsection, handleNext, handleBack, canNavigate }} />
            </Stack>
        </Paper>
    )
}

export default FormPanel
