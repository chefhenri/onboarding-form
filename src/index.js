import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';

import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import LuxonUtils from '@date-io/luxon'

const sectionData = require('./onboarding-form.json')
const sectionHeaders = sectionData.map(section => section.header)

render(
    <StrictMode>
        <MuiPickersUtilsProvider utils={LuxonUtils}>
            <App headers={sectionHeaders} sections={sectionData}/>
        </MuiPickersUtilsProvider>
    </StrictMode>,
    document.querySelector('#root')
);
