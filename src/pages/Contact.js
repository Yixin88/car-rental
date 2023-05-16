import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/Home_Page/ContactForm';

export default function Contact() {
  const url = useLocation().pathname;

  return (
    <>
      <SubPageBanner pageTitle={url} />
      <ContactForm />
    </>
  )
}
