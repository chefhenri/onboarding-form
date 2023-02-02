import { Box, Grid } from "@mui/material";
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
                <FormHeading label={"Text Fields"} info="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <FormTextField label={'Placeholder'} />
                <FormTextField label={'Placeholder'} />

                <FormHeading label={"Date Pickers"} />
                <FormDateField />
                <FormDateField />

                <FormHeading label={"Checkbox Group"} />
                <FormCheckboxGroup />

                <FormHeading label={"Switches"} />
                <FormSwitchField />
                <FormSwitchField />

                <FormHeading label={"Select"} />
                <FormSelectField />

                <FormHeading label={"Slider"} />
                <FormSliderField />

                <FormHeading label={"Text Area"} />
                <FormAreaField />
            </Grid>
        </Box>
    )
}

export default SectionForm
