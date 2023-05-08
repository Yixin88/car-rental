import React from 'react'
import car from '../../images/cars-big/golf6.jpg'

export default function BookingPopUp() {
  return (
    <div className='booking-popup'>
      <div className='booking-popup__overlay'></div>
      <div className='booking-popup__container'>
        <div className='booking-popup__container__header'>
          <h2>COMPLETE RESERVATION</h2>
          <i className='fa-solid fa-xmark'></i>
        </div>
        <div className='content'>
          <div className='booking-popup__container__info'>
            <h3><i className='fa-solid fa-circle-info'></i> Upon completing this reservation enquiry, you will receive:</h3>
            <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
          </div>
          <div className='booking-popup__container__details'>
            <div className='booking-popup__container__details__left'>
              <h3 className='title'>Location & Date</h3>
              <div>
                <div>
                  <i className='fa-solid fa-location-dot'></i>
                  <div>
                    <h4 className='test'>Pick-Up Date & Time <span className='asterisk'>*</span></h4>
                    <span className='date'>2023-06-01 / <input type="time" required/></span>
                  </div>
                </div>
                <div>
                  <i className='fa-solid fa-location-dot'></i>
                  <div>
                    <h4>Drop-off Date & Time <span className='asterisk'>*</span></h4>
                    <span className='date'>2023-06-01 / <input type="time" required/></span>
                  </div>
                </div>
                <div>
                  <i className='fa-solid fa-calendar-days'></i>
                  <div>
                    <h4>Pick-Up Location</h4>
                    <span className='location'>London</span>
                  </div>
                </div>
                <div>
                  <i className='fa-solid fa-calendar-days'></i>
                  <div>
                    <h4>Drop-Off Location</h4>
                    <span className='location'>London</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='booking-popup__container__details__right'>
              <h3>Car - <span>VW Golf 6</span></h3>
              <img src={car} alt="" />
            </div>
          </div>
  
          <form className='booking-popup__container__form-container' action="post">
            <h3 className='title'>PERSONAL INFORMATION</h3>
            <div className='booking-popup__container__form-container__form'>
              <div className='top'>
                <div className='input-container'>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id='fname' placeholder='Enter your first name' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id='lname' placeholder='Enter your last name' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="number">Phone Number</label>
                  <input type="tel" id='number' placeholder='Enter your phone number' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="age">Age</label>
                  <input className='test' type="number" id='age' placeholder='e.g. 18' required/>
                </div>
              </div>
  
              <div className='middle'>
                <div className='input-container'>
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' placeholder='Enter your email address' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="address">Address</label>
                  <input type="text" id='address' placeholder='Enter your address' required/>
                </div>
              </div>

              <div className='bottom'>
                <div className='input-container'>
                  <label htmlFor="city">City</label>
                  <input type="text" id='city' placeholder='Enter your city' required/>
                </div>
                <div className='input-container'>
                  <label htmlFor="postcode">Postcode</label>
                  <input type="text" id='postcode' placeholder='Enter your postcode' required/>
                </div>
              </div>

              <div className='news-check'>
                <input className='news-checkbox' type="checkbox" id='news'/>
                <label htmlFor="news">Please send me latest news and updates</label>
              </div>
            </div>
            
            <div className='submit-container'>
              <button type='submit'>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
