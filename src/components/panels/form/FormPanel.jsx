import { Box, Grid, Paper, Stack, Typography } from "@mui/material"

import FormNav from "./FormNav"
import FormTextField from "./fields/TextField"
import FormSwitch from './fields/Switch'
import FormDatePicker from './fields/DatePicker'
import FormCheckboxGroup from "./fields/CheckboxGroup"

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
                        <Typography component="div" variant="h6" sx={{ fontWeight: 700 }}>
                            {subsection.heading}
                        </Typography>
                        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
                            {subsection.fields.map(field => {
                                let key = `${subsection.heading}-${field.id}-field`

                                // TODO: Add case for 'checkbox', 'select', 'slider', 'textarea'
                                switch (field.type) {
                                    case 'checkbox':
                                        return <FormCheckboxGroup key={key} {...field} />
                                    case 'date':
                                        return <FormDatePicker key={key} {...field} />
                                    case 'switch':
                                        return <FormSwitch key={key} {...field} />
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
