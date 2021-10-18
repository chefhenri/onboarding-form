import React from "react";

import Finish from "./Finish";
import ContentBtnGroup from "../molecules/ContentBtnGroup";
import Section from "./Section";

import {
    ACCOUNT_INFO_SECTION_NAME,
    ADD_COMMENTS_SECTION_NAME,
    CONFIG_DETAILS_SECTION_NAME,
    MFP_INFO_SECTION_NAME,
    RESELLER_INFO_SECTION_NAME,
    SectionNameContext
} from "../../utils/app.utils";

const Content = ({headers, sections, active, next, back, skip, optional}) => {
    const getSection = (idx) => {
        let sectionData = sections[idx]
        switch (idx) {
            case 0:
                return (
                    <SectionNameContext.Provider value={ACCOUNT_INFO_SECTION_NAME}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 1:
                return (
                    <SectionNameContext.Provider value={RESELLER_INFO_SECTION_NAME}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 2:
                return (
                    <SectionNameContext.Provider value={MFP_INFO_SECTION_NAME}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 3:
                return (
                    <SectionNameContext.Provider value={CONFIG_DETAILS_SECTION_NAME}>
                        <Section {...sectionData}/>
                    </SectionNameContext.Provider>
                )
            case 4:
                return (
                    <SectionNameContext.Provider value={ADD_COMMENTS_SECTION_NAME}>
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
        ) : (<>
            {getSection(active)}
            <ContentBtnGroup
                active={active}
                next={next}
                back={back}
                skip={skip}
                optional={optional}
                length={headers.length - 1}/>
        </>)}
    </>)
}

export default Content
