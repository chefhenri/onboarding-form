import {Box, Grid} from "@mui/material";

import FormHeading from "../FormHeading";
import FormTextField from "../FormTextField";
import FormAreaField from "../FormAreaField";

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
