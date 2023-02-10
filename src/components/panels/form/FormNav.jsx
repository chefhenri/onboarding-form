import { Button, Stack } from "@mui/material"
import FormStepper from "./FormStepper"

const FormNav = ({ subsections, activeSubsection, handleNext, handleBack }) => {
    const headings = subsections.map(subsection => subsection.heading)

    return (
        <Stack direction="row" sx={{ justifyContent: 'space-between' }} >
            <Button variant="outlined" onClick={handleBack}>
                Back
            </Button>
            <FormStepper {...{ headings, activeSubsection }} />
            <Button variant="contained" onClick={handleNext}>
                Next
            </Button>
        </Stack >
    )
}

export default FormNav
