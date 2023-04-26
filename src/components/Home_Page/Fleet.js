import React, { useContext, useState } from 'react'
import { FleetArray } from '../../context/FleetContext'

export default function Fleet() {

  const { cars } = useContext(FleetArray);

  const [ currentCar, setCurrentCar ] = useState(cars[0]);

  function setCar(e) {
    setCurrentCar(cars.filter(car => car.name === e.target.value)[0])
  }

  return (
    <section className='fleet-section'>
      <div className='fleet-section__container'>
        <div className='fleet-heading-container'>
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <div className='fleet-car-container'>
          <div className='fleet-car-container__buttons'>
            {cars.map(car => <button className={currentCar.name === car.name ? "active":null} key={car.id} onClick={setCar} value={car.name}>{car.name}</button>)}
          </div>
          <div className='fleet-car-container__image-container'>
            <img src={currentCar.image} alt={currentCar.name} />
          </div>
          <div className='fleet-car-container__details-container'></div>
        </div>
      </div>
    </section>
  )
}
