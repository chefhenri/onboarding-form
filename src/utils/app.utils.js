import {createContext} from "react";
import {getOptName} from "./form.utils";

/**
 * Constants
 */
export const formTitle = 'MFP Onboarding Form'
export const ACCOUNT_INFO_SECTION_NAME = 'acctContactInfo'
export const RESELLER_INFO_SECTION_NAME = 'resellerInfo'
export const MFP_INFO_SECTION_NAME = 'mfpInfo'
export const CONFIG_DETAILS_SECTION_NAME = 'configDetails'
export const ADD_COMMENTS_SECTION_NAME = 'addComments'

/**
 * Contexts
 */
export const SectionNameContext = createContext(null)

export const SectionDataContext = createContext(null)

/**
 * Helpers
 */
export const initSectionData = (template) => {
    let sections = {
        [ACCOUNT_INFO_SECTION_NAME]: {},
        [RESELLER_INFO_SECTION_NAME]: {},
        [MFP_INFO_SECTION_NAME]: {},
        [CONFIG_DETAILS_SECTION_NAME]: {},
        [ADD_COMMENTS_SECTION_NAME]: {}
    }

    // Initialize field data
    template.forEach(section => {
        section['subsections'].forEach(subsection => {
            subsection['fields'].forEach(field => {
                sections[section.name][field.name] = {
                    id: field.id,
                    type: field.type,
                    text: field.text,
                    value: field.type === 'box' ? {} : field.initial || null
                }

                // Initialize checkbox option data
                if (field.type === 'box') {
                    field.options.forEach((opt, idx) => {
                        sections[section.name][field.name].value[getOptName(field.name, idx)] = {
                            checked: false,
                            text: opt
                        }
                    })
                }
            })
        })

    })

    return sections
}
