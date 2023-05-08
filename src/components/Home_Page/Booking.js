import React, { useContext, useRef, useState } from 'react'
import { CarPick } from '../../context/SelectedCarContext';
import BookingPopUp from './BookingPopUp';
import { BookingFormPopUp } from '../../context/Popup';
import { FleetArray } from '../../context/FleetContext';

export default function Booking() {

  const { carPicked } = useContext(CarPick);
  const { setActivePopUp } = useContext(BookingFormPopUp);
  const { cars } = useContext(FleetArray);

  const [ invalidActive, setInvalidIsActive ] = useState(false);
  const [ carType, setCarType ] = useState();
  const [ pickUpLocation, setPickUpLocation ] = useState();
  const [ dropOffLocation, setDropOffLocation ] = useState();
  const [ pickUpDate, setPickUpDate ] = useState();
  const [ dropOffDate, setDropOffDate ] = useState();
  const [ carImg, setCarImg ] = useState();
  const [ errorMsg, setErrorMsg ] = useState();


  const invalidContainer = useRef();


  function closeInvalidContainer() {
    setInvalidIsActive(false);
  }

  function checkField(e) {
      if (!carType || !pickUpLocation|| !dropOffLocation|| !pickUpDate || !dropOffDate ) {
        e.preventDefault()
        setErrorMsg('Please Enter All Fields!');
        setInvalidIsActive(true);
        return
    } else if (pickUpDate >= dropOffDate) {
        e.preventDefault()
        setErrorMsg('Drop-off date must be later than pick-up date');
        setInvalidIsActive(true);
        return
    }

    e.preventDefault();
    setInvalidIsActive(false);
    setActivePopUp(true);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
  }
  

  return (
    <section className='booking-section' id='booking-section'>
        <div ref={invalidContainer} className='booking'>
            <h2>Book a car</h2>
            <div className={invalidActive ? 'booking__invalid active': 'booking__invalid'}>
                <p>{errorMsg}</p>
                <i className="fa-solid fa-xmark" onClick={closeInvalidContainer}></i>
            </div>
            <form className='bookingForm' noValidate>
                <div className='bookingForm__element'>
                    <div>
                        <i className='fa-solid fa-car'></i>
                        <label htmlFor='carType'>Select Your Car Type <b>*</b></label>
                    </div>
                    <select name="" id="carType" value={carPicked} 
                    onChange={(e) => {
                        setCarType(e.target.value); 
                        setCarImg(cars.filter(item => item.name === e.target.value)[0].image)}
                    } required >
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
                    <select  name="" id="pickUpLocation" onChange={(e) => setPickUpLocation(e.target.value)} required>
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
                    <select name="" id="dropOffLocation" onChange={(e) => setDropOffLocation(e.target.value)} required>
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
                    <input type="date" id='pickUpDate' onChange={(e) => setPickUpDate(e.target.value)} required/>
                </div>
                <div className='bookingForm__element'>
                    <div>
                        <i className='fa-regular fa-calendar-days '></i>
                        <label htmlFor='dropOffDate'>Drop-Off <b>*</b></label>
                    </div>
                    <input type="date" id='dropOffDate' onChange={(e) => setDropOffDate(e.target.value)} required/>
                </div>
                <button onClick={checkField} type='submit'>Search</button>
            </form>
        </div>

        <BookingPopUp pickUpDate={pickUpDate} dropOffDate={dropOffDate} pickupLocation={pickUpLocation} dropOffLocation={dropOffLocation} carName={carType} carImg={carImg}/>
    </section>
  )
}
