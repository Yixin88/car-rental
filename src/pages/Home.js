import React from 'react'
import HeroBanner from '../components/Home_Page/HeroBanner'
import Booking from '../components/Home_Page/Booking'
import PlanTripBanner from '../components/Home_Page/PlanTripBanner'
import Fleet from '../components/Home_Page/Fleet'
import BasicBanner from '../components/Home_Page/BasicBanner'
import ChooseUs from '../components/Home_Page/ChooseUs'

export default function Home({fleetArray}) {

  return (
    <>
        <HeroBanner />
        <Booking />
        <PlanTripBanner />
        <Fleet />
        <BasicBanner />
        <ChooseUs />
    </>
  )
}
