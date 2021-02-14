import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
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

import {SectionContext} from '../contexts/section-context'
import Content from "./Content";
import moment from "moment/moment";

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

    const [accountData, setAccountData] = React.useState({})
    const [configData, setConfigData] = React.useState({
        activationDatePicker: {
            id: 'activation-date',
            value: moment().day(15),
            label: 'Desired Activation Date'
        },
        retentionPolicySlider: {
            id: 'retention-policy-slider',
            value: 90,
            label: 'Adjust slider to select XM Fax Retention Policy'
        }
    })
    const [commentsData, setCommentsData] = React.useState({})
    const [infoData, setInfoData] = React.useState({
        installDatePicker: {
            id: 'install-date',
            value: moment().day(15),
            label: 'Install Date'
        },
        removalDatePicker: {
            id: 'removal-date',
            value: moment().day(29),
            label: 'Removal Date'
        }
    })
    const [resellerData, setResellerData] = React.useState({
        ticketNotifSwitch: {
            id: 'ticket-notify',
            value: true,
            label: 'Notify Reseller about new Onboarding Tickets'
        },
        resupplyNotifSwitch: {
            id: 'resupply-notify',
            value: true,
            label: 'Notify Reseller of Credit resupply'
        }
    })

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

    const getSection = (idx) => {
        let sectionData = props.sections[idx]
        switch (idx) {
            case 0:
                return (
                    <SectionContext.Provider value={{data: accountData, update: setAccountData}}>
                        <Account {...sectionData}/>
                    </SectionContext.Provider>
                )
            case 1:
                return (
                    <SectionContext.Provider value={{data: resellerData, update: setResellerData}}>
                        <Reseller {...sectionData}/>
                    </SectionContext.Provider>
                )
            case 2:
                return (
                    <SectionContext.Provider value={{data: infoData, update: setInfoData}}>
                        <Information {...sectionData}/>
                    </SectionContext.Provider>
                )
            case 3:
                return (
                    <SectionContext.Provider value={{data: configData, update: setConfigData}}>
                        <Configuration {...sectionData}/>
                    </SectionContext.Provider>
                )
            case 4:
                return (
                    <SectionContext.Provider value={{data: commentsData, update: setCommentsData}}>
                        <Comments {...sectionData}/>
                    </SectionContext.Provider>
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
                        // TODO: Provide section data
                        <Finish/>
                    ) : (
                        <Content active={active}
                                 section={getSection(active)}
                                 next={handleNext}
                                 back={handleBack}
                                 optional={isOptional}
                                 skip={handleSkip}
                                 length={props.headers.length - 1}/>
                    )}
                </Fragment>
            </Paper>
        </main>
    )
}
