import React from 'react'
import googlePlay from '../../images/download/googleapp.svg'
import appStore from '../../images/download/appstore.svg'


export default function Download() {
  return (
    <section className='download-section'>
      <div className='download-section__container'>
        <div className='text-container'>
          <h2>Download our app to get most out of it</h2>
          <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
          <img src={googlePlay} alt="google play icon" />
          <img src={appStore} alt="app store icon" />
        </div>
      </div>
    </section>
  )
}
