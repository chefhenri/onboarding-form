import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';

import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

// TODO: Add 'Info' and 'Help' text to headings
const sectionData = require('./data/onboarding_form.json')

render(
    <StrictMode>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <App headers={sectionData.map(section => section.header)} sections={sectionData}/>
        </MuiPickersUtilsProvider>
    </StrictMode>,
    document.querySelector('#root')
);
