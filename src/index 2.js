import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import LuxonUtils from '@date-io/luxon'
import {LocalizationProvider} from "@mui/x-date-pickers";

const sectionData = require('./onboarding-form.json')
const sectionHeaders = sectionData.map(section => section.header)

let root = createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <LocalizationProvider dateAdapter={LuxonUtils}>
            <App headers={sectionHeaders} sections={sectionData}/>
        </LocalizationProvider>
    </StrictMode>
);
