import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom'
import People from '../components/Home_Page/People';

export default function Team() {
  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url} additionalStartText='our'/>
      <People />
    </>
  )
}
