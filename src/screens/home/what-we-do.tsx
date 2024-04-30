import React from 'react'
import check from 'assets/what-we-do.png'
import { MasterAnchor } from 'atoms/links'

export default function WhatWeDo() {
  const handleClick = () => {}
  return (
    <section className=" bg-[#FBF9F9] px-1   blade-top-padding-lg blade-top-padding-lg">
      <section className="blade-top-padding-lg blade-bottom-padding-lg">
        <section
          // data-aos="appear-down"
          // data-aos-offset="400"
          // data-aos-duration="400"
          // data-aos-easing="ease-in-out"
          className="what-we-do-wrapper 2xl:rounded-[40px]  rounded-[20px] lg:rounded-[30px] max-w-screen-2xl mx-auto md:w-11/12 xl:w-10/12 px-1.5 lg:px-3 py-1.5 lg:py-3 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-y-2 xl:gap-16  w-full 2xl:gap-x-24 ">
            <div className="   basis-[300px] sm:basis-[550px] md:basis-[680px] lg:basis-[450px] xl:basis-[600px] 2xl:basis-[700px] grow-0 shrink  rounded-[14px] lg:rounded-[22px] 2xl:rounded-[32px] overflow-hidden ">
              <img
                src={check}
                alt="illustration showing the problems we solve"
                className="h-full w-full object-cover xl:object-contain object-center"
              />
            </div>
            <div className="flex flex-1 pl-3 sm:pl-5 lg:pl-0  flex-col justify-center pt-4 md:pt-6 xl:pt-8  pb-6 xl:pb-8 2xl:pt-10  lg:pr-10  items-start">
              <span className="text-2xl lg:text-3xl 2xl:text-4xl title leading-tight block font-medium text-transparent bg-clip-text   pb-4 md:pb-6 xl:pb-8 2xl:pt-10 ">
                Ride the electric wave
              </span>
              <div className="grid gap-3 md:gap-4 lg:gap-5 pr-4">
                <span className="text-sm md:text-base  lg:text-lg  2xl:text-xl text-black leading-tight font-light  tracking-[0.24px]  max-w-md ">
                  At ProsParity, we focus on{' '}
                  <strong className="font-regular">
                    financing solutions for purchasing, managing, distributing,
                    and manufacturing two-wheeler and three-wheeler EVs.
                  </strong>
                </span>
                <span className="text-sm md:text-base  lg:text-lg  2xl:text-xl text-black leading-tight font-light tracking-[0.24px]  max-w-lg ">
                  Drivers financed by us use their vehicles for passenger
                  transportation, e-commerce, and cargo deliveries.
                </span>

                <span className="text-sm md:text-base  lg:text-lg  2xl:text-xl text-black leading-tight font-light tracking-[0.24px]  max-w-lg ">
                  We partner with manufacturers and dealers to acquire
                  customers, providing point-of-sale
                </span>
              </div>

              <div className="pt-6 md:pt-8 lg:pt-10 xl:pt-12 2xl:pt-16">
                <button
                  type="button"
                  onClick={handleClick}
                  className="rounded-full py-1 md:py-2 lg:py-3  px-4 md:px-6 lg:px-7 bg-[#0B373C] text-[#E3FFCC] text-base md:text-lg xl:text-xl font-regular font-semibold  tracking-wide "
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
