import React from 'react'
import HeroBanner from '../components/Home_Page/HeroBanner'
import { NavLink } from 'react-router-dom'
import Booking from '../components/Home_Page/Booking'
import PlanTripBanner from '../components/Home_Page/PlanTripBanner'



export default function Home() {
  return (
    <>
        <HeroBanner />
        <Booking />
        <PlanTripBanner />
    </>
  )
}
