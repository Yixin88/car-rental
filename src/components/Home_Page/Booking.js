import React from 'react'

export default function Booking() {
  return (
    <section className='booking-section'>
            <div className='booking'>
                <h2>Book a car</h2>
                <form className='bookingForm'>
                    <div className='bookingForm__element'>
                        <div>
                            <i className='fa-solid fa-car'></i>
                            <label for='carType'>Select Your Car Type <b>*</b></label>
                        </div>
                        <select name="" id="carType">
                            <option value="">Select your car type</option>
                            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                            <option value="VW Golf 6">VW Golf 6</option>
                            <option value="Toyota Camry">Toyota Camry</option>
                            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                            <option value="VW Passat CC">VW Passat CC</option>
                        </select>
                    </div>
                    <div className='bookingForm__element'>
                        <div>
                            <i className='fa-solid fa-location-dot'></i>
                            <label for='pickUpLocation'>Pick-Up <b>*</b></label>
                        </div>
                        <select name="" id="pickUpLocation">
                            <option value="">Select Pick Up Location</option>
                            <option value="London">London</option>
                            <option value="Manchester">Manchester</option>
                            <option value="Birmingham">Birmingham</option>
                            <option value="Bournemouth">Bournemouth</option>
                            <option value="Liverpool">Liverpool</option>
                            <option value="Edinburgh">Edinburgh</option>
                        </select>
                    </div>
                    <div className='bookingForm__element'>
                        <div>
                            <i className='fa-solid fa-location-dot'></i>
                            <label for='dropOffLocation'>Drop-Off <b>*</b></label>
                        </div>
                        <select name="" id="dropOffLocation">
                            <option value="">Select Drop Up Location</option>
                            <option value="London">London</option>
                            <option value="Manchester">Manchester</option>
                            <option value="Birmingham">Birmingham</option>
                            <option value="Bournemouth">Bournemouth</option>
                            <option value="Liverpool">Liverpool</option>
                            <option value="Edinburgh">Edinburgh</option>
                        </select>
                    </div>
                    <div className='bookingForm__element'>
                        <div>
                            <i className='fa-regular fa-calendar-days '></i>
                            <label for='pickUpDate'>Pick-Up <b>*</b></label>
                        </div>
                        <input type="date" id='pickUpDate'/>
                    </div>
                    <div className='bookingForm__element'>
                        <div>
                            <i className='fa-regular fa-calendar-days '></i>
                            <label for='dropOffDate'>Drop-Off <b>*</b></label>
                        </div>
                        <input type="date" id='dropOffDate'/>
                    </div>
                    <button type='sumbit'>Search</button>
                </form>
            </div>
        </section>
  )
}
