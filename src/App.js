import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {DateTime as DT} from "luxon";

import {SectionDataContext} from "./utils/app.utils";
import FormProgress from "./components/atoms/FormProgress";
import Main from "./components/organisms/Main";

const App = (props) => {
    const useSectionData = useState({
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
    })

    return (
        <SectionDataContext.Provider value={useSectionData}>
            <CssBaseline/>
            <FormProgress/>
            <Main {...props}/>
        </SectionDataContext.Provider>
    );
}

export default App
