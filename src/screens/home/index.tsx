import React from 'react'
import Products from './products'
import Features from './features'
import Problems from './problems'
import Offerings from './offerings'
import WhatWeDo from './what-we-do'
import Hero from './hero'
import './home.css'

export default function PageHome() {
  return (
    <>
      <Hero />
      <Products />
      <WhatWeDo />
      <Offerings />
      <Problems />
      <Features />
    </>
  )
}
