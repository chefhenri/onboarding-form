import {Box, Step, Stepper, StepLabel, Typography} from "@mui/material";

const steps = [
    {label: 'Select campaign settings', optional: false},
    {label: 'Create an ad group', optional: true},
    {label: 'Create an ad', optional: false}
];

const SectionStepper = ({ active }) => {
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
