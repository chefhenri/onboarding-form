import {Box, Step, Stepper, StepLabel, Typography} from "@mui/material";

const SectionStepper = ({ steps, active }) => {
    const getLabelProps = (optional = false) => {
        let props = {}

        if (optional) props.optional = ( <Typography variant="caption">Optional</Typography> )

        return props
    }

    return (
            <Box sx={{ width: '100%', marginBottom: '2rem' }}>
                <Stepper activeStep={active}>
                    {steps.map(({ label, optional }, idx) => {
                        let labelProps = getLabelProps(optional)

                        return (
                            <Step key={label}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </Box>
    )
}

export default SectionStepper
