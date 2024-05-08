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
import Investors from './investors'
import SustainableMobility from './sustaibableMobility'
import WhatsetsUsApart from './whatSetsusApart'
import HeroUpdated from './heroUpdated'

export default function PageHome() {
  return (
    <>
      {/* <Hero /> */}
      <HeroUpdated />
      <Products />
      {/* <WhatWeDo /> */}
      <WhatsetsUsApart />
      <SustainableMobility />
      {/* <Features /> */}
      {/* <Problems /> */}
      {/* <Offerings /> */}
      <Teams />
      <Investors />
      <ContactUs />
    </>
  )
}
