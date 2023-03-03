import { Box, Grid } from "@mui/material"

import FormHeading from './Heading'
import FormCheckboxGroup from './fields/CheckboxGroup'
import FormDatePicker from './fields/DatePicker'
import FormSelect from './fields/Select'
import FormSlider from './fields/Slider'
import FormSwitch from './fields/Switch'
import FormTextArea from './fields/TextArea'
import FormTextField from './fields/TextField'

const FormContainer = ({ subsection }) => {
    return (
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
    )
}

export default FormContainer
