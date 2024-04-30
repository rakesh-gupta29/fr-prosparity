import React from 'react'
import banner from 'assets/banner_bg.png'
import twoWheeler from 'assets/banner/2wheeler.svg'
import threeWheeler from 'assets/banner/3wheeler.svg'
import divider from 'assets/banner/divider.svg'
import car from 'assets/banner/car.svg'

export default function Hero() {
  return (
    <section className=" flex flex-col min-h-[550px] lg:min-h-screen bg-[#08272B] blade-top-padding-lg">
      <div className="text-center grid place-content-center place-items-center gap-4 blade-top-padding-sm mt-20 md:mt-12 lg:mt-10  ">
        <span className="banner-text-gradient bg-clip-text text-transparent  block leading-tight text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl animate-appear opacity-0 -translate-y-2 font-medium px-3">
          Accelerating EV financing{' '}
        </span>
        <span className="  text-lg xl:text-xl 2xl:text-2xl font-regular text-white px-8 leading-tight animate-appear-100 opacity-0 -translate-y-2  ">
          Driving India’s largest financing platform in electric mobility space
        </span>
        <div className="pt-5 md:pt-7 xl:pt-8 2xl:pt-10 px-5 flex items-center animate-appear-300 opacity-0 -translate-y-2 ">
          <div>
            <img
              src={twoWheeler}
              alt="2 wheeler vehicle"
              className=" h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-[78px]  w-12 md:w-14 lg:w-16 xl:w-18 2xl:w-[78px] object-contain object-center"
            />
          </div>

          <div>
            <img
              src={divider}
              alt="2 wheeler vehicle"
              className=" h-full w-full  object-contain object-center"
            />
          </div>

          <div>
            <img
              src={threeWheeler}
              alt="2 wheeler vehicle"
              className=" h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-[78px]  w-12 md:w-14 lg:w-16 xl:w-18 2xl:w-[78px] object-contain object-center"
            />
          </div>

          <div>
            <img
              src={divider}
              alt="2 wheeler vehicle"
              className=" h-full w-full object-contain object-center"
            />
          </div>

          <div>
            <img
              src={car}
              alt="2 wheeler vehicle"
              className="  h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-[78px]  w-12 md:w-14 lg:w-16 xl:w-18 2xl:w-[78px]  object-contain object-center"
            />
          </div>
        </div>
      </div>

      <div className="grid mt-auto place-content-center place-items-center">
        <img
          src={banner}
          className="h-full w-full  object-cover md:object-contain object-center"
          alt=""
        />
      </div>
    </section>
  )
}
