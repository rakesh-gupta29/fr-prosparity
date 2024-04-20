import React from 'react'
import check from 'assets/what-we-do.png'

export default function WhatWeDo() {
  return (
    <section className="bg-darkGreen what-we-do-wrapper blade-top-padding-lg blade-bottom-padding-lg ">
      <div className="grid grid-cols-1 w-container lg:grid-cols-2 gap-x-40  blade-top-padding blade-bottom-padding">
        <div>
          <img src={check} alt="" />
        </div>
        <div className="flex flex-col  justify-center py-5 items-start gap-3">
          <div className="p-[10px] rounded-full bg-greenChip">
            <span className="text-3xl text-white font-medium px-4">
              What do we do
            </span>
          </div>
          <span className="text-6xl title  font-medium text-transparent bg-clip-text ">
            Ride the electric wave
          </span>
          <span className="text-lg md:text-xl 2xl:text-2xl text-white leading-tight font-light  tracking-[0.24px]  max-w-md ">
            At ProsParity, we focus on{' '}
            <strong className="font-regular">
              financing solutions for purchasing, managing, distributing, and
              manufacturing two-wheeler and three-wheeler EVs.
            </strong>
          </span>
          <span className="text-lg md:text-xl 2xl:text-2xl text-white leading-tight font-light tracking-[0.24px]  max-w-lg ">
            Drivers financed by us use their vehicles for passenger
            transportation, e-commerce, and cargo deliveries.
          </span>
        </div>
      </div>
    </section>
  )
}
