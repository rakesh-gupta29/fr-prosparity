import React from 'react'
import banner from 'assets/banner.png'

export default function HeroUpdated() {
  return (
    <section
      id="hero"
      className="blade-top-padding-lg blade-bottom-padding-lg bg-blueGreen"
    >
      <div className="flex lg:flex-row  mt-6 md:mt-8 lg:mt-0 flex-col">
        <div className="blade-top-padding blade-top-margin-sm pl-3 sm:pl-10 md:pl-20  lg:pl-32 xl:pl-32 2xl:pl-48 basis-0 grow shrink flex-1">
          <div className="font-medium text-2xl  w-10/12  text-white lg:text-3xl 2xl:text-4xl leading-tight">
            <span className="text-[#3BFE7B] ">Reimagining Distribution</span> Of
            Credit In The Electric Mobility Sector
          </div>
          <span className="text-sm block w-11/12  max-w-xl md:text-base   pt-4 lg:pt-6 lg:text-lg 2xl:text-xl text-white font-light ">
            We are building a full-stack digital financing platform to enable
            seamless flow of credit from lenders to individuals, fleet
            operators, dealers, and OEMs, driving widespread adoption of
            electric vehicles across Bharat for a sustainable future
          </span>

          <div className="grid place-content-start pt-7 md:pt-8 lg:pt-9">
            <a
              href="#contact"
              className="rounded-full  py-2 2xl:py-3  px-5 md:px-6 2xl:px-7  bg-transparent  border-1 border-solid border-[#3BFE7B] text-[#3BFE7B] hover:bg-[#0B373C] hover:text-[#E3FFCC] transition-all duration-300 ease-in-out
                text-sm md:text-base lg:text-lg 2xl:text-xl font-regular font-semibold  tracking-wide "
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="basis-56 grow shrink ">
          <img
            loading="eager"
            src={banner}
            className="h-full w-full object-contain object-center"
            alt="diagram showing the prosparity logo"
          />
        </div>
      </div>
    </section>
  )
}
