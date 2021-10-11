import React from "react";

import Finish from "../organisms/Finish";
import Content from "../organisms/Content";
import Section from "../organisms/Section";

import {SectionNameContext} from "../../utils/app.utils";

const ContentWrapper = ({headers, sections, active, next, back, skip, optional}) => {
    const getSection = (idx) => {
        let sectionData = sections[idx]
        switch (idx) {
            case 0:
                return (
                    <SectionNameContext.Provider value={'account'}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 1:
                return (
                    <SectionNameContext.Provider value={'resell'}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 2:
                return (
                    <SectionNameContext.Provider value={'info'}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 3:
                return (
                    <SectionNameContext.Provider value={'config'}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 4:
                return (
                    <SectionNameContext.Provider value={'comments'}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            default:
                throw new Error('Unknown section')
        }
    }

    return (<>
        {active === headers.length ? (
            <Finish sections={sections}/>
        ) : (
            <Content active={active}
                     next={next}
                     back={back}
                     skip={skip}
                     optional={optional}
                     section={getSection(active)}
                     length={headers.length - 1}/>
        )}
    </>)
}

export default ContentWrapper
