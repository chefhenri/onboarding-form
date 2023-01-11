import {Box, Grid} from "@mui/material";
import FormHeading from "../form/FormHeading";
import FormTextField from "../form/FormTextField";
import FormAreaField from "../form/FormAreaField";

const fields = Array(6).fill(0)

const SectionForm = () => {
    return (
            <Box>
                <Grid container spacing="24">
                    <FormHeading text={"Placeholder"} />
                    {fields.map((_, idx) => (
                            <FormTextField key={idx} label={'Placeholder'} />
                    ))}
                    <FormHeading text={"Placeholder"} />
                    <FormAreaField />
                </Grid>
            </Box>
    )
}

export default SectionForm
