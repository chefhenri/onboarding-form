import {Box, Grid} from "@mui/material";
import FormHeading from "../form/FormHeading";
import FormTextField from "../form/FormTextField";
import FormAreaField from "../form/FormAreaField";
import FormSwitchField from "../form/FormSwitchField";
import FormCheckboxGroup from "../form/FormCheckboxGroup";
import FormDateField from "../form/FormDateField";

const SectionForm = () => {
    return (
            <Box sx={{ overflowY: 'scroll', height: '600px' }}>
                <Grid container spacing="24">
                    <FormHeading text={"Text Fields"} />
                    <FormTextField label={'Placeholder'} />
                    <FormTextField label={'Placeholder'} />

                    <FormHeading text={"Date Pickers"} />
                    <FormDateField />
                    <FormDateField />

                    <FormHeading text={"Switches"} />
                    <FormSwitchField/>
                    <FormSwitchField/>

                    <FormHeading text={"Text Area"} />
                    <FormAreaField />

                    <FormHeading text={"Checkbox Group"} />
                    <FormCheckboxGroup />
                </Grid>
            </Box>
    )
}

export default SectionForm
