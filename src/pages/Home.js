import React from 'react'
import BannerBackgroundImg from '../images/hero/hero-bg.png'
import BannerCar from '../images/hero/main-car.png'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <section className='home-banner'>
            <img className='background' src={BannerBackgroundImg} alt="Hero Banner Backgound" />
            <div className='container'>
                <div className='container__detail'>
                    <h2>Plan your trip now</h2>
                    <h1>Save <span>big</span> with our car rental</h1>
                    <p>Rent the car of your dreams. Unbeatable prices, unlimted miles, flexible pick-up options and much more.</p>
                    <div>
                        <NavLink>
                            Book Ride 
                            <i className='fa-solid fa-circle-check'></i>
                        </NavLink>
                        <NavLink>
                            Learn More 
                            <i className='fa-solid fa-angle-right'></i>
                        </NavLink>
                    </div>
                </div>
                <img className='container__img' src={BannerCar} alt="Banner Car" />
            </div>
        </section>
    </>
  )
}
