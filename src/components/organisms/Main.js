import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

import FormHeader from "../molecules/FormHeader";
import ContentWrapper from "../molecules/ContentWrapper";

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

const Main = ({headers, sections}) => {
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

    const handleSkip = () => {
        if (!isOptional(active)) throw new Error(`You can't skip a required section.`)

        setActive(active + 1)
        setSkipped(skipped.add(active))
    }

    return (
        <main id={'main'} className={classes.layout}>
            <Paper className={classes.paper}>
                <FormHeader
                    headers={headers}
                    active={active}
                    optional={isOptional}
                    skipped={isSkipped}/>
                <ContentWrapper
                    headers={headers}
                    sections={sections}
                    active={active}
                    next={handleNext}
                    back={handleBack}
                    skip={handleSkip}
                    optional={isOptional}/>
            </Paper>
        </main>
    )
}

export default Main
