import React, { useRef, useState } from 'react'

export default function Booking() {

  const [ invalidActive, setInvalidIsActive ] = useState(false);

  const invalidContainer = useRef();
  const carType = useRef();
  const pickUpLocation = useRef();
  const dropOffLocation = useRef();
  const pickUpDate = useRef();
  const dropOffDate = useRef();

  function closeInvalidContainer() {
    setInvalidIsActive(false);
  }

  function checkField(e) {
      if (carType.current.value === "" || pickUpLocation.current.value === "" ||dropOffLocation.current.value === "" || pickUpDate.current.value === "" || dropOffDate.current.value === "") {
        e.preventDefault()
        setInvalidIsActive('true');
    }
  }

  return (
    <section className='booking-section' id='booking-section'>
            <div ref={invalidContainer} className='booking'>
                <h2>Book a car</h2>
                <div className={invalidActive ? 'booking__invalid active': 'booking__invalid'}>
                    <p>Please Enter All Fields!</p>
                    <i className="fa-solid fa-xmark" onClick={closeInvalidContainer}></i>
                </div>
                <form className='bookingForm' noValidate>
                    <div className='bookingForm__element'>
                        <div>
                            <i className='fa-solid fa-car'></i>
                            <label htmlFor='carType'>Select Your Car Type <b>*</b></label>
                        </div>
                        <select ref={carType} name="" id="carType" required >
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
                            <label htmlFor='pickUpLocation'>Pick-Up <b>*</b></label>
                        </div>
                        <select ref={pickUpLocation} name="" id="pickUpLocation" required>
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
                            <label htmlFor='dropOffLocation'>Drop-Off <b>*</b></label>
                        </div>
                        <select ref={dropOffLocation} name="" id="dropOffLocation" required>
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
                            <label htmlFor='pickUpDate'>Pick-Up <b>*</b></label>
                        </div>
                        <input ref={pickUpDate} type="date" id='pickUpDate' required/>
                    </div>
                    <div className='bookingForm__element'>
                        <div>
                            <i className='fa-regular fa-calendar-days '></i>
                            <label htmlFor='dropOffDate'>Drop-Off <b>*</b></label>
                        </div>
                        <input ref={dropOffDate} type="date" id='dropOffDate' required/>
                    </div>
                    <button onClick={checkField} type='submit'>Search</button>
                </form>
            </div>
        </section>
  )
}
