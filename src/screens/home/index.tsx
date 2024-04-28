import React from 'react'
import Products from './products'
import Features from './features'
import Problems from './problems'
import Offerings from './offerings'
import WhatWeDo from './what-we-do'
import Hero from './hero'
import Teams from './teams'
import './home.css'
import { ContactForm } from 'organisms/index'
import ContactUs from './contactUs'

export default function PageHome() {
  return (
    <>
      <Hero />
      <Products />
      <WhatWeDo />
      <Features />
      <Problems />
      <Offerings />
      {/* <Teams /> */}
      {/* 
    
      <ContactUs /> */}
    </>
  )
}
