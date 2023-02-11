import React from 'react'
import ReactDOM from 'react-dom/client'

import fs from 'fs'
import YAML from 'yaml'

import App from './App'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
