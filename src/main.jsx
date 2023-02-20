import React from 'react'
import ReactDOM from 'react-dom/client'

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { CssBaseline } from '@mui/material';

import App from './App'

import { sections } from './assets/onboarding-form.json'

// TODO: Add themeing
ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <CssBaseline />
      <App {...{ sections }} />
    </LocalizationProvider>
  </React.StrictMode>
)
