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
                    <FormHeading heading={"Text Fields"} />
                    <FormTextField label={'Placeholder'} />
                    <FormTextField label={'Placeholder'} />

                    <FormHeading heading={"Date Pickers"} />
                    <FormDateField />
                    <FormDateField />

                    <FormHeading heading={"Checkbox Group"} />
                    <FormCheckboxGroup />

                    <FormHeading heading={"Switches"} />
                    <FormSwitchField/>
                    <FormSwitchField/>

                    <FormHeading heading={"Select"} />
                    <FormSelectField />

                    <FormHeading heading={"Slider"} />
                    <FormSliderField />

                    <FormHeading heading={"Text Area"} />
                    <FormAreaField />
                </Grid>
            </Box>
    )
}

export default SectionForm
