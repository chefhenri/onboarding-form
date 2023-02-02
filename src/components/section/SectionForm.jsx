import { Box, Grid } from "@mui/material";
import FormHeading from "../form/FormHeading";
import FormTextField from "../form/FormTextField";
import FormTextArea from "../form/FormTextArea";
import FormSwitch from "../form/FormSwitch";
import FormCheckboxGroup from "../form/FormCheckboxGroup";
import FormDatePicker from "../form/FormDatePicker";
import FormSelect from "../form/FormSelect";
import FormSlider from "../form/FormSlider";

const SectionForm = () => {
    return (
        <Box sx={{ height: '600px', overflowY: 'scroll' }}>
            <Grid container spacing="24">
                <FormHeading label={"Text Fields"} info="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <FormTextField label={'Placeholder'} />
                <FormTextField label={'Placeholder'} />

                <FormHeading label={"Date Pickers"} />
                <FormDatePicker />
                <FormDatePicker />

                <FormHeading label={"Checkbox Group"} />
                <FormCheckboxGroup />

                <FormHeading label={"Switches"} />
                <FormSwitch />
                <FormSwitch />

                <FormHeading label={"Select"} />
                <FormSelect />

                <FormHeading label={"Slider"} />
                <FormSlider />

                <FormHeading label={"Text Area"} />
                <FormTextArea />
            </Grid>
        </Box>
    )
}

export default SectionForm
