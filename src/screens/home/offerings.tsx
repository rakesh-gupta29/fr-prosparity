import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import approach from 'assets/offerings/approach.svg'
import credit from 'assets/offerings/credit.svg'

import robust from 'assets/offerings/robust.svg'
import tailored from 'assets/offerings/tailored.svg'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'

const elems = [
  {
    title: ' Innovative Origination Approach',
    coverImage: approach,
    subtitle:
      "We implement dealer-driven, technology-led origination directly from dealerships and embed financing seamlessly through OEM's online platforms.",
  },
  {
    title: 'Credit Underwriting',
    coverImage: credit,
    subtitle:
      'We forge B2B partnerships with ecosystem players to establish scalable distribution channels and efficiently underwrite asset risk using advanced technology and analytics.',
  },
  {
    title: 'Tailored Financing Products ',
    coverImage: tailored,
    subtitle:
      'We tailor products to align with customer profiles, focusing on utility, quality, and end-use of assets.',
  },
  {
    coverImage: robust,
    title: 'Robust Risk Management Strategies',
    subtitle:
      'We utilize data-driven and field-based risk management strategies to mitigate portfolio risks and minimize reliance on OEMs and dealers for financial assurance.',
  },
]

export default function Offerings() {
  const [active, setActive] = useState(0)
  const changeTab = (update: number) => {
    setActive(update)
    instanceImage.slideTo(update)
  }
  const [instanceImage, setInstanceImage] = useState<any>(null)

  const swiperImageRef = useRef<any>(null)
  const wrapper = useRef<any>(null)

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
    <section className="offering-wrapper blade-bottom-padding-sm blade-top-padding ">
      <div className="grid place-content-center place-items-center text-center">
        <div className=" px-[2px] xl:px-[4px]  py-[4px] xl:py-[6px] rounded-full border-1 border-solid border-blueGreen border-opacity-30 bg-darkGreen bg-opacity-20 ">
          <span className="xl:text-base text-sm  text-blueGreen font-medium px-4">
            What problem are we solving?
          </span>
        </div>

        <div className="pt-10 grid gap-[10px]">
          <h2 className="text-4xl font-medium title bg-clip-text text-transparent">
            Offering next-gen financial solutions
          </h2>
          <span className="font-regular font-normal text-center leading-normal text-base md:text-xl lg:text-xl 2xl:text-xl">
            We implement dealer-driven, technology-led origination directly{' '}
            <br className="lg:block hidden" /> from dealerships and embed
            financing seamlessly through OEM's{' '}
            <br className="lg:block hidden" /> online platforms.
          </span>
        </div>
      </div>

      <div className="grid place-content-center pt-12  pb-14">
        <div
          data-aos="appear-down"
          data-aos-offset="400"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          className="flex items-center bg-white py-4 px-5 tab-wrapper rounded-full gap-10"
        >
          <Tab
            callback={() => changeTab(0)}
            active={active === 0}
            text="Innovative Origination Approach"
          />
          <Tab
            callback={() => changeTab(1)}
            active={active === 1}
            text="Credit Underwriting"
          />

          <Tab
            callback={() => changeTab(2)}
            active={active === 2}
            text="Tailored Financing Products"
          />

          <Tab
            callback={() => changeTab(3)}
            active={active === 3}
            text="Robust Risk Management Strategies"
          />
        </div>
      </div>

      <div
        data-aos="appear-down"
        data-aos-offset="400"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-delay="150"
        className="grid grid-cols-2   w-container offering-card-wrapper p-6 rounded-[40px]"
      >
        <div className="max-w-[632px] rounded-[28px] overflow-hidden ">
          <Swiper
            loop={false}
            modules={[Navigation]}
            onSlideChange={(swiper) => {
              setActive(swiper.activeIndex)
            }}
            ref={swiperImageRef}
            slidesPerView={1}
            initialSlide={0}
          >
            {elems.map((elem, index) => {
              const key = `${index}`
              return (
                <SwiperSlide key={key}>
                  <div className="h-[620px]">
                    <img src={elem.coverImage} alt={elem.title} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="flex flex-col ">
          <div className="flex-1">
            <SwitchTransition>
              <CSSTransition
                key={active}
                nodeRef={wrapper.current}
                timeout={150}
                classNames="desc-wrapper"
                unmountOnExit
              >
                <div ref={wrapper.current}>
                  <div className=" h-full ">
                    <div className="h-full flex flex-col gap-2">
                      <span className="carousel-title txt-title max-w-xl leading-tight pb-4 pt-6  bg-clip-text  text-transparent  text-4xl font-medium">
                        {elems[active].title}
                      </span>
                      <div className="opacity-0 txt-wrapper">
                        <p className="text-lg lg:text-xl font-normal text-black font-regular max-w-md ">
                          {elems[active].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="flex-0 py-10   flex items- gap-5">
            <button
              onClick={() => {
                instanceImage.slidePrev()
              }}
              type="button"
              className="outline-none  focus-visible:outline-none rounded-full bg-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid border-darkGreen hover:stroke-white stroke-darkGreen transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center  h-12 w-12 md:w-16 md:h-16 aspect-square lg:h-20 lg:w-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="inherit"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                instanceImage.slideNext()
              }}
              type="button"
              className="outline-none  focus-visible:outline-none rounded-full bg-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid border-darkGreen hover:stroke-white stroke-darkGreen transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center  h-12 w-12 md:w-16 md:h-16 aspect-square lg:h-20 lg:w-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="inherit"
                className="w-6 h-6 rotate-180"
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
    </section>
  )
}

function Tab({
  callback,
  text,
  active,
}: {
  callback: () => void
  text: string
  active: boolean
}) {
  return (
    <button
      type="button"
      onClick={callback}
      className={` ${
        active ? 'tab-active' : ''
      } px-8 text-lg 2xl:text-xl py-2 rounded-full font-medium`}
    >
      {text}
    </button>
  )
}
