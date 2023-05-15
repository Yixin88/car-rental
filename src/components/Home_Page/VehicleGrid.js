import React from 'react'
import AudiA1 from '../../images/cars-big/audia1-2.png'

export default function VehicleGrid() {
  return (
    <section className='vehicle-grid-section'>
      <div className='vehicle-grid-section__container'>
        
        <div className='vehicle-card'>

          <div className='vehicle-card__image-container'>
            <img src={AudiA1} alt="" />
          </div>

          <div className='vehicle-card__details-container'>
            <div>
              <div>
                <h3>Audi A1</h3>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
              </div>
              <div>
                <h3>£45</h3>
                <span>per day</span>
              </div>
            </div>

            <div>
              <div>
                <i className='fa-solid fa-car-side'></i>
                <span>Audi</span>
              </div>
              <div>
                <i class="fa-solid fa-door-open"></i>
                <span>5</span>
              </div>
              <div>
                <i class="fa-solid fa-gear"></i>
                <span>Manual</span>
              </div>
              <div>
                <i class="fa-solid fa-gas-pump"></i>
                <span>Petrol</span>
              </div>
            </div>

            <a href="#booking-section">Book Now</a>
          </div>


        </div>


      </div>
    </section>
  )
}
