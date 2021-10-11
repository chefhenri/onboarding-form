import React from "react";
import Step from "@material-ui/core/Step";
import {Typography} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";

import {makeStyles} from "@material-ui/core/styles";

import {formTitle} from "../../utils/app.utils";

const styles = makeStyles((theme) => ({
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
}))

const FormHeader = ({headers, active, optional, skipped}) => {
    const classes = styles()

    const generateLabels = () => {
        return (
            headers.map((label, idx) => {
                const sectionProps = {}
                const labelProps = {}

                if (optional(idx))
                    labelProps.optional = <Typography variant="caption">Optional</Typography>

                if (skipped(idx))
                    sectionProps.completed = false

                return (
                    <Step key={label} {...sectionProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                )
            })
        )
    }

    return (<>
        <Typography component={"h1"} variant={"h4"} align={"center"}>
            {formTitle}
        </Typography>
        <Stepper className={classes.stepper} activeStep={active}>
            {generateLabels()}
        </Stepper>
    </>)
}

export default FormHeader
