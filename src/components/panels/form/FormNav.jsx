import { Button, Stack } from "@mui/material"
import FormStepper from "./FormStepper"

const FormNav = ({ subsections, activeSubsection, handleNext, handleBack }) => {
    const totalSubsections = subsections.length
    const headings = subsections.map(subsection => subsection.heading)

    return (
        <Stack direction="row" sx={{ justifyContent: 'space-between' }} >
            <Button variant={activeSubsection === 0 ? 'disabled': 'outlined'} onClick={handleBack}>
                Back
            </Button>
            <FormStepper {...{ headings, activeSubsection }} />
            <Button variant={activeSubsection === totalSubsections - 1 ? 'disabled' : 'contained'} onClick={handleNext}>
                Next
            </Button>
        </Stack >
    )
}

export default FormNav
