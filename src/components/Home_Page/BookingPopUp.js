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
        <div className='booking-popup__container__info'>
          <h3><i className='fa-solid fa-circle-info'></i> Upon completing this reservation enquiry, you will receive:</h3>
          <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
        </div>
        <div className='booking-popup__container__details'>
          <div className='booking-popup__container__details__left'>
            <h3>Location & Date</h3>
            <div>
              <div>
                <i className='fa-solid fa-location-dot'></i>
                <div>
                  <h4 className='test'>Pick-Up Date & Time</h4>
                  <span>2023-06-01 / <input type="time"/></span>
                </div>
              </div>
              <div>
                <i className='fa-solid fa-location-dot'></i>
                <div>
                  <h4>Drop-off Date & Time</h4>
                  <span>2023-06-01 / <input type="time"/></span>
                </div>
              </div>
              <div>
                <i className='fa-solid fa-calendar-days'></i>
                <div>
                  <h4>Pick-Up Location</h4>
                  <span>London</span>
                </div>
              </div>
              <div>
                <i className='fa-solid fa-calendar-days'></i>
                <div>
                  <h4>Drop-Off Location</h4>
                  <span>London</span>
                </div>
              </div>
            </div>
          </div>
          <div className='booking-popup__container__details__right'>
            <h3>Car - <span>VW Golf 6</span></h3>
            <img src={car} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
