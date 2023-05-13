import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom'
import People from '../components/Home_Page/People';
import CallBanner from '../components/Home_Page/CallBanner';

export default function Team() {
  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url} additionalStartText='our'/>
      <People />
      <CallBanner />
    </>
  )
}
