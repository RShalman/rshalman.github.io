import App from "./App";
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/_variables.scss'
import '@styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
