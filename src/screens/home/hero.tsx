import React from 'react'
import banner from 'assets/banner.png'

export default function Hero() {
  return (
    <section className="min-h-screen bg-darkGreen blade-top-padding-lg">
      <div className="text-center grid place-content-center place-items-center gap-4 blade-top-padding-lg blade-top-margin-sm ">
        <span className="banner-text-gradient bg-clip-text text-transparent text-4xl font-medium px-2">
          Accelerating EV financing{' '}
        </span>
        <span className="text-3xl font-regular text-white px-2 leading-tight">
          Driving India’s largest financing platform{' '}
          <br className="md:block hidden" /> in electric mobility space
        </span>
        <div className="pt-10">
          <button className="bg-lightGreen font-medium text-2xl flex gap-[10px] py-5 px-10 items-center text-black rounded-full ">
            Contact sales
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <path
                d="M9.13383 7.96631L18.2318 13.6701C18.8441 14.054 18.8441 14.9462 18.2318 15.3301L9.13383 21.0339"
                stroke="white"
                stroke-width="3.62215"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid place-content-center place-items-center">
        <img
          src={banner}
          className="h-full w-full object-contain object-center"
          alt=""
        />
      </div>
    </section>
  )
}
