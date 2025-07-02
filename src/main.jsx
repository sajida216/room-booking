import { StrictMode } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode >
  <Router basename="/room-booking">
    <App />
  </Router>
</StrictMode>
)
