import React, { useContext } from 'react'
import { FleetArray } from '../../context/FleetContext'

export default function Fleet() {

  const { cars } = useContext(FleetArray);

  return (
    <section className='fleet-section'>
      <div className='fleet-section__container'>
        <div className='fleet-heading-container'>
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <div className='fleet-car-container'>
          <div>{cars.map(car => <button key={car.id}>{car.name}</button>)}</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
