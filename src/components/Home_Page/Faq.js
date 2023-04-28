import React from 'react'

export default function Faq() {
  return (
    <section className='faq-section'>
      <div className='faq-section__container'>
        <div className='faq-section__container__heading'>
          <h3>FAQ</h3>
          <h2>Frequently Asked Questions</h2>
          <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

        <div className='faq-section__container__questions__container'>
          <div className='question-container'>
            <div className='question-container__heading'>
              <h4>1. What is special about comparing rental car deals?</h4>
              <i className='fa-solid fa-angle-down'></i>
            </div>
            <p>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
