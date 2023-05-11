import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom'
import AboutCompany from '../components/Home_Page/AboutCompany';

export default function About() {
  const url = useLocation().pathname;
  return (
    <>
      <SubPageBanner pageTitle={url}/>
      <AboutCompany />
    </>
  )
}
