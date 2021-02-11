import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';

import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import {SectionContext} from "./contexts/section-context";

// TODO: Add 'Info' and 'Help' text to headings
const sectionData = require('./data/onboarding-form.json')

render(
    <StrictMode>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            {/* TODO: Provide section data */}
            <SectionContext.Provider value={null}>
                <App headers={sectionData.map(section => section.header)} sections={sectionData}/>
            </SectionContext.Provider>
        </MuiPickersUtilsProvider>
    </StrictMode>,
    document.querySelector('#root')
);
