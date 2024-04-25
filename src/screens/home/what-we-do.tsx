import React from 'react'
import check from 'assets/what-we-do.png'
import { MasterAnchor } from 'atoms/links'

export default function WhatWeDo() {
  const handleClick = () => {}
  return (
    <section className=" bg-[#FBF9F9]  blade-top-padding-lg blade-top-padding-lg">
      <section className="blade-top-padding-lg blade-bottom-padding-lg">
        <section
          data-aos="appear-down"
          data-aos-offset="400"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          className="what-we-do-wrapper rounded-[40px] w-container  overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 blade-top-padding p-2  blade-bottom-padding">
            <div className="h-[300px]  md:h-[400px] xl:h-[550px] 2xl:h-[680px]">
              <img
                src={check}
                alt="illustration showing the problems we solve"
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="flex flex-col justify-center py-5 items-start">
              <div className="p-[10px] rounded-full bg-greenChip">
                <span className="text-3xl text-black font-medium px-4">
                  What do we do
                </span>
              </div>
              <span className="text-3xl title  font-medium text-transparent bg-clip-text pb-8 pt-10 ">
                Ride the electric wave
              </span>
              <span className="text-lg md:text-xl 2xl:text-2xl text-black leading-tight font-light  tracking-[0.24px]  pb-5 max-w-md ">
                At ProsParity, we focus on{' '}
                <strong className="font-regular">
                  financing solutions for purchasing, managing, distributing,
                  and manufacturing two-wheeler and three-wheeler EVs.
                </strong>
              </span>
              <span className="text-lg md:text-xl 2xl:text-2xl text-black leading-tight font-light tracking-[0.24px]  max-w-lg ">
                Drivers financed by us use their vehicles for passenger
                transportation, e-commerce, and cargo deliveries.
              </span>
              <div className="pt-16">
                <button
                  type="button"
                  onClick={handleClick}
                  className="rounded-full py-3 px-7 bg-[#0B373C] text-[#E3FFCC] text-base md:text-lg xl:text-xl font-regular font-semibold  tracking-wide "
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
