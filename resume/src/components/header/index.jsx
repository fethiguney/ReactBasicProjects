
import React from 'react'
import Avatar from './Avatar'
import MobileMenu from './mobile-menu'
import Name from './name'
import SocialIcons from './social-icons'
import MainNav from './main-nav'
import Copyright from './copyright'
import "./index.css"




const Header = () => {
  return (
    <header className="header pull-left">
        <MobileMenu/>
        <Avatar/>
        <Name/>
        <SocialIcons/>
        <MainNav/>
        <Copyright/>
    </header>
    
    
  )
}

export default Header