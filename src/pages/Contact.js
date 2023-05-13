import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url} />
    </>
  )
}
