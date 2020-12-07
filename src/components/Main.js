import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {makeStyles} from "@material-ui/core/styles";

import Content from "./Content";
import Finish from "./Finish";

const styles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    completed: {
        display: 'inline-block',
    }
}))

const formTitle = 'MFP Onboarding Form'

export default function Main(props) {
    const classes = styles()
    const [active, setActive] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isOptional = (section) => {
        return section === 1 || section === 2
    }

    const isSkipped = (section) => {
        return skipped.has(section)
    }

    const handleNext = () => {
        if (isSkipped(active)) skipped.delete(active)

        setActive(active + 1)
        setSkipped(skipped)
    }

    const handleBack = () => {
        setActive(active - 1)
    }

    const handleSkip = (section) => {
        if (!isOptional(active)) throw new Error(`You can't skip a required section.`)

        setActive(active + 1)
        setSkipped(skipped.add(active))
    }

    const generateLabels = () => (
        props.headers.map((label, idx) => {
            const sectionProps = {}
            const labelProps = {}

            if (isOptional(idx))
                labelProps.optional = <Typography variant="caption">Optional</Typography>

            if (isSkipped(idx))
                sectionProps.completed = false

            return (
                <Step key={label} {...sectionProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
            )
        })
    )

    return (
        <main id={'main'} className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component={"h1"} variant={"h4"} align={"center"}>{formTitle}</Typography>
                <Stepper className={classes.stepper} activeStep={active}>{generateLabels()}</Stepper>
                <Fragment>
                    {active === props.headers.length ? (
                        <Finish/>
                    ) : (
                        <Content {...props}
                                 active={active}
                                 next={handleNext}
                                 back={handleBack}
                                 skip={handleSkip}
                                 optional={isOptional}/>
                    )}
                </Fragment>
            </Paper>
        </main>
    )
}
