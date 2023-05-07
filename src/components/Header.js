import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo/logo.png'

export default function Header() {

  const [ activeMenu, setActiveMenu ] = useState(false);

  return (
    <header>
        <nav className='nav-bar'>
            <div className='nav-bar__logo-image'>
                <a href="#">
                    <img src={Logo} alt="Car Rental Logo" />
                </a>
            </div>

            <div className='nav-bar__links'>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Vehicle Models</NavLink>
                <NavLink>Testimonials</NavLink>
                <NavLink>Our Team</NavLink>
                <NavLink>Contact</NavLink>
            </div>

            <div className='nav-bar__buttons'>
                <Link className='nav-bar__buttons__signIn'>Sign In</Link>
                <Link className='nav-bar__buttons__register'>Register</Link>
            </div>
        </nav>

        <i class="fa-solid fa-bars hamburger-btn" onClick={() => {setActiveMenu(true)}}></i>

        <nav className={activeMenu ? 'hamburger-menu active' : 'hamburger-menu'}>
            <i class="fa-solid fa-xmark close-btn" onClick={() => {setActiveMenu(false)}}></i>
            <NavLink onClick={() => {setActiveMenu(false)}}>Home</NavLink>
            <NavLink onClick={() => {setActiveMenu(false)}}>About</NavLink>
            <NavLink onClick={() => {setActiveMenu(false)}}>Vehicle Models</NavLink>
            <NavLink onClick={() => {setActiveMenu(false)}}>Testimonials</NavLink>
            <NavLink onClick={() => {setActiveMenu(false)}}>Our Team</NavLink>
            <NavLink onClick={() => {setActiveMenu(false)}}>Contact</NavLink>
            <Link className='mobile-signIn-btn signIn-btn'>Sign In</Link>
            <Link className='mobile-signIn-btn register-btn'>Register</Link>
        </nav>
    </header>
  )
}
