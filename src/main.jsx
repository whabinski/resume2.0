import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Entry point for the React application.
// This file mounts the root React component into the DOM.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App /> {/* App contains the main routing configuration and page structure. */}
    </HashRouter>
  </React.StrictMode>
)