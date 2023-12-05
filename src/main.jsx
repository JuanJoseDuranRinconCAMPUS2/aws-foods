import React from 'react'
import ReactDOM from 'react-dom/client'
import NavbarFood from './components/Navbar/NavbarFood'
import HeaderFood from './components/Header/HeaderFood'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarFood/>
    <HeaderFood/>
  </React.StrictMode>,
)
