import {Box, Grid} from "@mui/material";
import FormHeading from "../form/FormHeading";
import FormTextField from "../form/FormTextField";
import FormAreaField from "../form/FormAreaField";
import FormSwitchField from "../form/FormSwitchField";
import FormCheckboxGroup from "../form/FormCheckboxGroup";

const fields = Array(6).fill(0)

const SectionForm = () => {
    return (
            <Box sx={{ overflowY: 'scroll', height: '600px' }}>
                <Grid container spacing="24">
                    <FormHeading text={"Placeholder"} />
                    {fields.map((_, idx) => (
                            <FormTextField key={idx} label={'Placeholder'} />
                    ))}
                    <FormHeading text={"Placeholder"} />
                    <FormSwitchField/>
                    <FormSwitchField/>
                    <FormAreaField />

                    <FormHeading text={"Placeholder"} />
                    <FormCheckboxGroup />
                </Grid>
            </Box>
    )
}

export default SectionForm
