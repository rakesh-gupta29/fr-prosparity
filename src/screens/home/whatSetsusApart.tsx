import React, { useEffect, useRef, useState } from 'react'
import customers from 'assets/apart/Customers.png'
import dealers from 'assets/apart/Dealers.png'
import lenders from 'assets/apart/Lenders.png'
import oem from 'assets/apart/OEMs.png'

import rightDivider from 'assets/right_divider.png'
import leftDivider from 'assets/left_divider.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const values = [
  {
    title: 'OEMs',
    desc: 'Omni-channel financing partner for electric products across wide geographies',
    cover: oem,
  },
  {
    title: 'Dealers',
    desc: 'One-stop, quick and convenient financing solution for your business requirements',
    cover: dealers,
  },
  {
    title: 'Lenders',
    desc: 'Build a high-quality secured portfolio in an impact oriented new asset class (electric mobility) through our full-service platform',
    cover: lenders,
  },
  {
    title: 'Customers',
    desc: 'Quick, convenient and affordable loans for purchasing next-generation electric vehicles',
    cover: customers,
  },
]
type IValue = (typeof values)[0]

export default function SubstainableTransformation() {
  const [instanceImage, setInstanceImage] = useState<any>(null)

  const swiperImageRef = useRef<any>(null)

  const getImageSwiperInstance = () => {
    if (swiperImageRef.current && swiperImageRef.current.swiper) {
      return swiperImageRef.current.swiper
    }
    return null
  }

  useEffect(() => {
    const ins_text = getImageSwiperInstance()
    setInstanceImage(ins_text)
  }, [])

  return (
    <section
      id="why-us"
      className="bg-blueGreen z-50 blade-top-padding blade-bottom-padding"
    >
      <div>
        <div className="  pb-3 md:pb-5 lg:pb-7 2xl:pb-10 flex items-center place-items-center text-center ">
          <div className="flex-1 lg:block hidden ">
            <img
              src={leftDivider}
              alt="left divider"
              aria-hidden
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div
            // data-aos="appear-down"
            // data-aos-offset="400"
            // data-aos-duration="400"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="100"
            className="grid mx-auto flex-0   px-3 lg:px-10 xl:px-20 gap-3 "
          >
            <span className=" text-3xl lg:text-4xl 2xl:text-5xl block apart-title  font-medium text-transparent bg-clip-text ">
              Why Prosparity
            </span>
          </div>

          <div className="flex-1 lg:block hidden ">
            <img
              src={rightDivider}
              alt="right divider"
              aria-hidden
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
      <div className="blade-top-padding-xl mt-2 md:pt-4 blade-bottom-padding-xl">
        <div className="w-11/12 xl:w-11/12 2xl:w-10/12 pl-3 blade-top-margin-sm 2xl:mb-8 mb-6 block ml-auto sm:mr-0 mr-auto"></div>
        <div className="md:w-11/12 xl:w-11/12 2xl:w-10/12 values-carousel ml-auto pl-3 ">
          <Swiper
            ref={swiperImageRef}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: '.value-prev-btn',
              nextEl: '.value-next-btn',
            }}
            slidesPerView={1}
            spaceBetween={20}
            pagination={false}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              1020: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 2.6,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 2.6,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3000,
            }}
            slideToClickedSlide
            autoHeight
            speed={1000}
            className=" pb-8 lg:pb-12 pr-7 sm:pr-10 h-full"
          >
            <div className="min-h-full self-stretch ">
              {values.map((elem: IValue, index) => {
                const key = `${index}`
                return (
                  <SwiperSlide
                    key={key}
                    className="min-h-full  h-full self-stretch"
                  >
                    <ValueCard value={elem} />
                  </SwiperSlide>
                )
              })}
            </div>
            <span className="swiper-pagination gap-1 !bottom-0" />
          </Swiper>
        </div>
        <div className=" px-2 md:w-11/12 xl:w-11/12 2xl:w-10/12  flex items-center  gap-0   pt-3 md:pt-4 xl:pt-6 md:gap-10 pr-6 sm:pr-10 md:pr-16  lg:pr-20 xl:pr-24 2xl:pr-28 lg:gap-14 xl:gap-16 pl-3 ml-auto">
          <div className="flex-1 h-[2px] bg-white bg-opacity-50 md:block hidden"></div>
          <div className=" flex-1 md:max-w-[220px] flex items-end justify-end pb-4 pr-1">
            <div className="flex-0 pb-0 flex items-end gap-3 md:gap-4 lg:gap-5">
              <button
                type="button"
                className="outline-none value-prev-btn   focus-visible:outline-none rounded-full bg-[#004345] border-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid  hover:stroke-white stroke-white transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center   h-10 w-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16  disabled:hover:bg-[#004345] 2xl:w-[72px] 2xl:h-[72px] aspect-square disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="inherit"
                  className="w-4 md:w-5 lg:w-6 h-4 md:h-4  lg:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="outline-none value-next-btn   focus-visible:outline-none rounded-full bg-[#004345] border-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid  hover:stroke-white stroke-white transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center   h-10 w-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16  disabled:hover:bg-[#004345] 2xl:w-[72px] 2xl:h-[72px] aspect-square disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="inherit"
                  className="w-4 md:w-5 lg:w-6 h-4 md:h-4  lg:h-6 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValueCard({ value }: { value: IValue }) {
  const { title, desc, cover } = value
  return (
    <article className=" value-card ">
      <div className="mr-auto grid place-content-start">
        <img
          src={cover}
          alt={title}
          className="lg:h-[350px] xl:h-[400px] h-[250px] md:h-[280px] w-full object-contain object-center"
        />
      </div>
      <div className="pt-4 md:pt-5 lg:pt-6 xl:pt-7 grid gap-1 md:gap-2">
        <span className="text-2xl lg:text-3xl font-medium  title ">
          {title}{' '}
        </span>
        <span className="text-sm md:text-base text-white lg:text-lg xl:text-xl text-opacity-80 font-regular font-normal leading-tight block w-11/12">
          {desc}{' '}
        </span>
      </div>
    </article>
  )
}
