import {Box, Grid} from "@mui/material";
import FormHeading from "../form/FormHeading";
import FormTextField from "../form/FormTextField";
import FormAreaField from "../form/FormAreaField";
import FormSwitchField from "../form/FormSwitchField";
import FormCheckboxGroup from "../form/FormCheckboxGroup";
import FormDateField from "../form/FormDateField";
import FormSelectField from "../form/FormSelectField";
import FormSliderField from "../form/FormSliderField";

const SectionForm = () => {
    return (
            <Box sx={{ height: '600px', overflowY: 'scroll' }}>
                <Grid container spacing="24">
                    <FormHeading text={"Text Fields"} />
                    <FormTextField label={'Placeholder'} />
                    <FormTextField label={'Placeholder'} />

                    <FormHeading text={"Date Pickers"} />
                    <FormDateField />
                    <FormDateField />

                    <FormHeading text={"Checkbox Group"} />
                    <FormCheckboxGroup />

                    <FormHeading text={"Switches"} />
                    <FormSwitchField/>
                    <FormSwitchField/>

                    <FormHeading text={"Select"} />
                    <FormSelectField />

                    <FormHeading text={"Slider"} />
                    <FormSliderField />

                    <FormHeading text={"Text Area"} />
                    <FormAreaField />
                </Grid>
            </Box>
    )
}

export default SectionForm
