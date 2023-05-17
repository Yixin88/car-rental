import React from 'react'

export default function ContactForm() {

  function formCheck(e) {
    e.preventDefault();
  }

  return (
    <section className='contactForm-section'>
      <div className='contactForm-section__container'>
        <div className='contactForm-left'>
          <h2>Need additional information?</h2>
          <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+44-123-4567">+44-123-4567</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:contact@carrental.com">contact@carrental.com</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <a href="#">London, United Kingdom</a>
            </li>
          </ul>
        </div>

        <form action="post" className='contactForm-right'>
          <label htmlFor="fullName" className='contactFormLabel'>Full Name</label>
          <input type="text" id='fullName' placeholder='e.g. John Smith' required/>
          <label htmlFor="email" className='contactFormLabel'>Email</label>
          <input type="email" id='email' placeholder='example@email.com' required/>
          <label htmlFor="message" className='contactFormLabel'>Tell us about it</label>
          <textarea id="message" placeholder='Please type your message here' required></textarea>
          <button type='submit' onClick={formCheck}><i className='fa-solid fa-envelope-open-text'></i>Send Message</button>
        </form>
      </div>
    </section>
  )
}
