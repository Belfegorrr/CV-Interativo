import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './components/global.css'
import './i18n/Translate'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <App />   
  </React.StrictMode>
)
