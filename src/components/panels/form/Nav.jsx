import { Button, Stack } from "@mui/material"
import FormStepper from "./fields/stepper/Stepper"

const FormNav = ({
    subsections,
    activeSubsection,
    handleNext,
    handleBack,
    canNavigate,
    inReview
}) => {
    const headings = subsections.map(subsection => subsection.heading)

    // Can navigate back if there is an available section or subsection
    const canNavBack = canNavigate.back.section || canNavigate.back.subsection

    // Can't navigate next to an available section or subsection, but can navigate to review
    const canNavReview = (!canNavigate.next.section && !canNavigate.next.subsection) && !inReview

    return (
        <Stack direction="row" sx={{ justifyContent: 'space-between' }} >
            <Button variant="outlined" onClick={handleBack} disabled={!canNavBack}>
                Back
            </Button>
            <FormStepper {...{ headings, activeSubsection }} />
            <Button variant="contained" onClick={handleNext}>
                {canNavReview ? 'Review' : 'Next'}
            </Button>
        </Stack >
    )
}

export default FormNav
