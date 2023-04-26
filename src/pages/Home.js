import React from 'react'
import HeroBanner from '../components/Home_Page/HeroBanner'
import { NavLink } from 'react-router-dom'
import Booking from '../components/Home_Page/Booking'
import PlanTripBanner from '../components/Home_Page/PlanTripBanner'
import Fleet from '../components/Home_Page/Fleet'

const fleet = [
  {
    name: "Audi A1 S-Line",
    Model: "Audi",
    mark: "A1",
    year: 2012,
    doors: 5,
    ac: true,
    transmission: "Manual",
    fuel: "Petrol",
    price: 45,
    id: 1
  },
  {
    name: "VW Golf 6",
    Model: "Golf 6",
    mark: "Volkswagen",
    year: 2008,
    doors: 5,
    ac: true,
    transmission: "Manual",
    fuel: "Diesel",
    price: 37,
    id: 2
  },
  {
    name: "Toyota Camry",
    Model: "Camry",
    mark: "Toyota",
    year: 2006,
    doors: 5,
    ac: true,
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 35,
    id: 3
  },
  {
    name: "BMW 320 ModernLine",
    Model: "320",
    mark: "BMW",
    year: 2013,
    doors: 5,
    ac: true,
    transmission: "Manual",
    fuel: "Diesel",
    price: 40,
    id: 4
  },
  {
    name: "Mercedes-Benz GLK",
    Model: "Benz GLK",
    mark: "Mercedes",
    year: 2006,
    doors: 5,
    ac: true,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 50,
    id: 5
  },
  {
    name: "VW Passat CC",
    Model: "Passat CC",
    mark: "Volkswagen",
    year: 2008,
    doors: 5,
    ac: true,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 35,
    id: 6
  },
]


export default function Home({fleetArray}) {
  return (
    <>
        <HeroBanner />
        <Booking />
        <PlanTripBanner />
        <Fleet fleetArray={fleet} />
    </>
  )
}
