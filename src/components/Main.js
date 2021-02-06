import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import {Button, Typography} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {makeStyles} from "@material-ui/core/styles";

import Finish from "./Finish";
import Account from "../sections/Account";
import Reseller from "../sections/Reseller";
import Information from "../sections/Information";
import Configuration from "../sections/Configuration";
import Comments from "../sections/Comments";
import {CommentsContext} from "../contexts/comments-context";

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
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}))

const formTitle = 'MFP Onboarding Form'

export default function Main(props) {
    const classes = styles()
    const [active, setActive] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const [commentsData, setCommentsData] = React.useState({})

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

    const handleSkip = () => {
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

    // TODO: Add context providers to other sections
    const getSection = (idx) => {
        switch (idx) {
            case 0:
                return <Account header={props.sections[idx].header} fields={props.sections[idx].fields}/>
            case 1:
                return <Reseller header={props.sections[idx].header} fields={props.sections[idx].fields}
                                 hints={props.sections[idx].hints}/>
            case 2:
                return <Information header={props.sections[idx].header} fields={props.sections[idx].fields}
                                    hints={props.sections[idx].hints} options={props.sections[idx].options}/>
            case 3:
                return <Configuration header={props.sections[idx].header} fields={props.sections[idx].fields}
                                      hints={props.sections[idx].hints} options={props.sections[idx].options}/>
            case 4:
                return (
                    <CommentsContext.Provider value={{data: commentsData, update: setCommentsData}}>
                        <Comments header={props.sections[idx].header} fields={props.sections[idx].fields}/>
                    </CommentsContext.Provider>
                )

            default:
                throw new Error('Unknown section')
        }
    }

    return (
        <main id={'main'} className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component={"h1"} variant={"h4"} align={"center"}>{formTitle}</Typography>
                <Stepper className={classes.stepper} activeStep={active}>{generateLabels()}</Stepper>
                <Fragment>
                    {active === props.headers.length ? (
                        <Finish/>
                    ) : (
                        <div>
                            {getSection(active)}
                            <div>
                                <Button disabled={active === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>
                                {isOptional(active) && (
                                    <Button variant="contained" color="primary" onClick={handleSkip}
                                            className={classes.button}>
                                        Skip
                                    </Button>
                                )}
                                <Button variant="contained" color="primary" onClick={handleNext}
                                        className={classes.button}>
                                    {active === props.headers.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </Fragment>
            </Paper>
        </main>
    )
}
