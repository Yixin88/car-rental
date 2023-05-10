import React from 'react'

export default function SubPageBanner({ pageTitle }) {

  return (
    <section className='subPage-banner'>
      <div className='bg-overlay'></div>
      <div className='subPage-banner__container'>
        <div className='subPage-banner__container__heading'>
          <h3>{pageTitle.slice(1).charAt(0).toUpperCase() + pageTitle.slice(2)}</h3>
          <h4>Home {pageTitle.charAt(0) + pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2)}</h4>
        </div>
      </div>
    </section>
  )
}
