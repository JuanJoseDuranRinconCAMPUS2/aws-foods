import React from 'react'
import ReactDOM from 'react-dom/client'
import NavbarFood from './components/navbar/NavbarFood'
import HeaderFood from './components/Header/HeaderFood'
import AboutUsFood from './components/AboutUs/AboutUsFood'
import MenuFood from './components/Menu/MenuFood'
import ServicesFood from './components/Services/ServicesFood'
import LearnMFood from './components/Learn/LearnMFood'
import FooterFood from './components/Footer/FooterFood'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarFood/>
    <HeaderFood/>
    <AboutUsFood/>
    <MenuFood/>
    <ServicesFood/>
    <LearnMFood/>
    <FooterFood/>
  </React.StrictMode>,
)
