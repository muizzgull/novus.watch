import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage.jsx'
import { PolicyPage } from './PolicyPage.jsx'
import { ContactPage } from './ContactPage.jsx'
import { ExplorePage } from './ExplorePage.jsx'
import { App } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
