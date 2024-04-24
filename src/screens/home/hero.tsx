import React from 'react'
import banner from 'assets/banner_bg.png'
import twoWheeler from 'assets/banner/2wheeler.svg'
import threeWheeler from 'assets/banner/3wheeler.svg'
import divider from 'assets/banner/divider.svg'
import car from 'assets/banner/car.svg'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#08272B] blade-top-padding-lg">
      <div className="text-center grid place-content-center place-items-center gap-4 blade-top-padding-sm blade-top-margin-sm ">
        <span className="banner-text-gradient bg-clip-text text-transparent text-6xl font-medium px-2">
          Accelerating EV financing{' '}
        </span>
        <span className="text-2xl font-regular text-white px-2 leading-tight">
          Driving India’s largest financing platform in electric mobility space
        </span>
        <div className="pt-10 flex items-center">
          <div>
            <img
              src={twoWheeler}
              alt="2 wheeler vehicle"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div>
            <img
              src={divider}
              alt="2 wheeler vehicle"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div>
            <img
              src={threeWheeler}
              alt="2 wheeler vehicle"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div>
            <img
              src={divider}
              alt="2 wheeler vehicle"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div>
            <img
              src={car}
              alt="2 wheeler vehicle"
              className="h-full w-full object-contain object-center"
            />
          </div>
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
