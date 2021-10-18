import {createContext} from "react";

/*
Constants
 */

export const formTitle = 'MFP Onboarding Form'
export const ACCOUNT_INFO_SECTION_NAME = 'acctContactInfo'
export const RESELLER_INFO_SECTION_NAME = 'resellerInfo'
export const MFP_INFO_SECTION_NAME = 'mfpInfo'
export const CONFIG_DETAILS_SECTION_NAME = 'configDetails'
export const ADD_COMMENTS_SECTION_NAME = 'addComments'

/*
Contexts
 */

export const SectionNameContext = createContext(null)

// TODO: Add defaults for checkboxes
export const SectionDataContext = createContext(null)

/*
Helpers
 */

export const initSectionData = (template) => {
    let sections = {
        [ACCOUNT_INFO_SECTION_NAME]: [],
        [RESELLER_INFO_SECTION_NAME]: [],
        [MFP_INFO_SECTION_NAME]: [],
        [CONFIG_DETAILS_SECTION_NAME]: [],
        [ADD_COMMENTS_SECTION_NAME]: []
    }

    template.forEach(section => {
        sections[section.id] = section['subsections']['fields']
    })

    return sections
}
