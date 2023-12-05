import React from 'react'
import ReactDOM from 'react-dom/client'
import NavbarFood from './components/Navbar/NavbarFood'
import HeaderFood from './components/Header/HeaderFood'
import AboutUsFood from './components/AboutUs/AboutUsFood'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarFood/>
    <HeaderFood/>
    <AboutUsFood/>
  </React.StrictMode>,
)
