import { Box, Grid, Paper, Stack, Typography } from "@mui/material"

import FormNav from "./Nav"
import FormHeading from "./Heading"
import FormCheckboxGroup from "./fields/CheckboxGroup"
import FormDatePicker from "./fields/DatePicker"
import FormSwitch from "./fields/Switch"
import FormTextArea from "./fields/TextArea"
import FormTextField from "./fields/TextField"
import FormSelect from "./fields/Select"
import FormSlider from "./fields/Slider"

const FormPanel = ({
    sectionHeading,
    subsections,
    activeSubsection,
    handleNext,
    handleBack,
    canNavigate,
    inReview
}) => {
    const subsection = subsections[activeSubsection]

    return (
        <Paper elevation={3} sx={{ width: '920px', height: '700px', borderRadius: '15px' }}>
            <Stack sx={{ height: '100%', padding: '2rem', justifyContent: 'space-between' }}>
                <Stack spacing={6}>
                    <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
                            {sectionHeading}
                        </Typography>
                    </Box>
                    <Box>
                        <FormHeading heading={subsection.heading} />
                        <Grid container rowSpacing={3} columnSpacing={2}>
                            {subsection.fields.map(field => {
                                let key = `${subsection.heading}-${field.id}-field`

                                switch (field.type) {
                                    case 'checkbox':
                                        return <FormCheckboxGroup key={key} {...field} />
                                    case 'date':
                                        return <FormDatePicker key={key} {...field} />
                                    case 'select':
                                        return <FormSelect key={key} {...field} />
                                    case 'slider':
                                        return <FormSlider key={key} {...field} />
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
                <FormNav {...{
                    subsections,
                    activeSubsection,
                    handleNext,
                    handleBack,
                    canNavigate,
                    inReview
                }} />
            </Stack>
        </Paper>
    )
}

export default FormPanel
