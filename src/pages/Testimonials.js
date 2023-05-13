import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import Review from '../components/Home_Page/Review'
import { useLocation } from 'react-router-dom'
import CallBanner from '../components/Home_Page/CallBanner'

export default function Testimonials() {
  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url}/>
      <Review />
      <CallBanner />
    </>
  )
}
