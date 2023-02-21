import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

import { sections } from './assets/onboarding-form.json'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <App {...{ sections }} />
    </Provider>
  </React.StrictMode>
)
