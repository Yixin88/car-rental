import React from 'react'
import HeroBanner from '../components/Home_Page/HeroBanner'
import { NavLink } from 'react-router-dom'
import Booking from '../components/Home_Page/Booking'
import PlanTripBanner from '../components/Home_Page/PlanTripBanner'

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
    price: 45
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
    price: 37
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
    price: 35
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
    price: 40
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
    price: 50
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
    price: 35
  },
]


export default function Home() {
  return (
    <>
        <HeroBanner />
        <Booking />
        <PlanTripBanner />
    </>
  )
}
