import React from "react";
import Paper from "@material-ui/core/Paper";

import ContentBtnGroup from "../components/molecules/ContentBtnGroup";
import FormHeader from "../components/organisms/FormHeader";
import Summary from "../components/templates/Summary";

import {styles} from "../styles/main.styles";
import Section from "../components/templates/Section";

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
                {active === headers.length ? (
                    <Summary/>
                ) : (<>
                    <Section data={sections[active]} active={active}/>
                    <ContentBtnGroup
                        active={active}
                        next={handleNext}
                        back={handleBack}
                        skip={handleSkip}
                        optional={isOptional}
                        length={headers.length - 1}/>
                </>)}
            </Paper>
        </main>
    )
}

export default Main
