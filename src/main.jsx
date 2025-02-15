import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import appstore from './components/appstore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <Provider store={appstore}>
    <App />
  </Provider>
    
  </StrictMode>,
)
