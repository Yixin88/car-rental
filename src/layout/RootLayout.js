import React from 'react'
import Logo from '../images/logo/logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function RootLayout() {
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
    </header>
  )
}
