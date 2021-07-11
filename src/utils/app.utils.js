import React, {createContext, useState} from "react";
import {DateTime as DT} from "luxon";

// TODO: Add defaults for checkboxes
export const SectionDataContext = createContext(useState(
    {
        sections: {
            account: {},
            comments: {},
            config: {
                fields: [
                    {
                        id: 'activation-date',
                        value: DT.local().plus({weeks: 1}),
                        label: 'Desired Activation Date'
                    },
                    {
                        id: 'retention-policy-slider',
                        value: 90,
                        label: 'Adjust slider to select XM Fax Retention Policy'
                    }
                ]
            },
            info: {
                fields: [
                    {
                        id: 'install-date',
                        value: DT.local().plus({weeks: 1}),
                        label: 'Install Date'
                    },
                    {
                        id: 'removal-date',
                        value: DT.local().plus({weeks: 4}),
                        label: 'Removal Date'
                    }
                ]
            },
            resell: {
                fields: [
                    {
                        id: 'ticket-notify',
                        value: true,
                        label: 'Notify Reseller about new Onboarding Tickets'
                    },
                    {
                        id: 'resupply-notify',
                        value: true,
                        label: 'Notify Reseller of Credit resupply'
                    }
                ]
            },
        }
    }
))
