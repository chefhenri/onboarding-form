import { Button, Stack } from "@mui/material"
import FormStepper from "./FormStepper"

const FormNav = ({ subsections, activeSubsection, handleNext, handleBack, canNavigate }) => {
    const headings = subsections.map(subsection => subsection.heading)

    // Can navigate back if there is an available section or subsection
    const canNavBack = canNavigate.back.section || canNavigate.back.subsection

    // Can navigate next if there is an available section or subsection
    const canNavNext = canNavigate.next.section || canNavigate.next.subsection

    return (
        <Stack direction="row" sx={{ justifyContent: 'space-between' }} >
            <Button variant="outlined" onClick={handleBack} disabled={!canNavBack}>
                Back
            </Button>
            <FormStepper {...{ headings, activeSubsection }} />
            <Button variant="contained" onClick={handleNext} disabled={!canNavNext}>
                Next
            </Button>
        </Stack >
    )
}

export default FormNav
