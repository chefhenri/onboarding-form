import React from "react";

import ContentBtnGroup from "../molecules/ContentBtnGroup";
import FormHeader from "../organisms/form/FormHeader";
import Summary from "./Summary";
import Section from "./Section";

import {styles} from "../../styles/main.styles";
import {Paper} from "@mui/material";

const Main = ({headers, sections}) => {
    const {layout, paper} = styles()
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
        <main id={'main'} className={layout}>
            <Paper className={paper}>
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
