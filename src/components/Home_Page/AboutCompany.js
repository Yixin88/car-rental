import React from 'react'
import aboutMain from '../../images/about/about-main.jpg'
import icon1 from '../../images/about/icon1.png'
import icon2 from '../../images/about/icon2.png'
import icon3 from '../../images/about/icon3.png'

export default function AboutCompany() {
  return (
    <section className='about-company-section'>
      <div className='about-company-section__container'>
        <div className='about-company-section__container__image-container'>
          <img src={aboutMain} alt="about" />
        </div>

        <div className='about-company-section__container__details'>
          <h3>About Company</h3>
          <h2>You start the engine and your adventure begins</h2>
          <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>

          <div className='icons-section'>
            <div>
              <img src={icon1} alt="icon1" />
              <span>
                <h4>20</h4>
                <p>Car Types</p>
              </span>
            </div>
            <div>
              <img src={icon2} alt="icon2" />
              <span>
                <h4>85</h4>
                <p>Rental Outlets</p>
              </span>
            </div>
            <div>
              <img src={icon3} alt="icon3" />
              <span>
                <h4>75</h4>
                <p>Repair Shops</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
