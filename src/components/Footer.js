import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <section className='footer-section'>
      <div className='footer-section__container'>
        <div className='carRental'>
          <h3>Car <span>Rental</span></h3>
          <ul>
            <li>
              <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
            </li>
            <li className='contact-info'>
              <i class="fa-solid fa-phone"></i>
              <a className='contact-info' href="tel:+44-123-4567">+44-123-4567</a>
            </li>
            <li className='contact-info'>
              <i class="fa-solid fa-envelope"></i>
              <a className='contact-info' href="mailto:contact@carrental.com">contact@carrental.com</a>
            </li>
          </ul>
        </div>

        <div className='company'>
          <h3>COMPANY</h3>
          <ul>
            <li><Link>London</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Mobile</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>How we work</Link></li>
          </ul>
        </div>

        <div className='working-hours'>
          <h3>WORKING HOURS</h3>
          <ul>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00am - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        <div className='subscription'>
          <h3>SUBSCRIPTION</h3>
          <ul>
            <li>Subscribe your email address for latest news & updates.</li>
            <li><input type="email" placeholder='Enter Email Address'/></li>
            <li><button>Submit</button></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
