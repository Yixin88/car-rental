import React, { createContext, useState } from 'react'
import AudiImg from '../images/cars-big/audia1.jpg'
import VwGolfImg from '../images/cars-big/golf6.jpg'
import ToyotaImg from '../images/cars-big/toyotacamry.jpg'
import BmwImg from '../images/cars-big/bmw320.jpg'
import MercImg from '../images/cars-big/benz.jpg'
import VwPassatImg from '../images/cars-big/passatcc.jpg'


export const FleetArray = createContext();

export default function FleetContext({children}) {

  const [cars, setCars] = useState([
    {
      name: "Audi A1 S-Line",
      model: "Audi",
      mark: "A1",
      year: 2012,
      doors: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Petrol",
      price: 45,
      id: 1,
      image: AudiImg
    },
    {
      name: "VW Golf 6",
      model: "Golf 6",
      mark: "Volkswagen",
      year: 2008,
      doors: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      price: 37,
      id: 2,
      image: VwGolfImg
    },
    {
      name: "Toyota Camry",
      model: "Camry",
      mark: "Toyota",
      year: 2006,
      doors: 5,
      ac: true,
      transmission: "Automatic",
      fuel: "Hybrid",
      price: 35,
      id: 3,
      image: ToyotaImg
    },
    {
      name: "BMW 320 ModernLine",
      model: "320",
      mark: "BMW",
      year: 2013,
      doors: 5,
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
      price: 40,
      id: 4,
      image: BmwImg
    },
    {
      name: "Mercedes-Benz GLK",
      model: "Benz GLK",
      mark: "Mercedes",
      year: 2006,
      doors: 5,
      ac: true,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 50,
      id: 5,
      image: MercImg
    },
    {
      name: "VW Passat CC",
      model: "Passat CC",
      mark: "Volkswagen",
      year: 2008,
      doors: 5,
      ac: true,
      transmission: "Automatic",
      fuel: "Petrol",
      price: 35,
      id: 6,
      image: VwPassatImg
    },
  ])

  // const [car, setCar] = useState(20)

  return (
    <FleetArray.Provider value={{cars, setCars}}>
      {children}
    </FleetArray.Provider>
  )
}
