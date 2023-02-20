import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { sections } from './assets/onboarding-form.json'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App {...{ sections }} />
  </React.StrictMode>
)
