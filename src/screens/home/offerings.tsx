import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import carosuel_dummy from 'assets/carosuel_dummy.png'
import { Navigation, EffectCreative } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'

const elems = [
  {
    title: ' Innovative Origination Approach',
    coverImage: carosuel_dummy,
    subtitle:
      "We implement dealer-driven, technology-led origination directly from dealerships and embed financing seamlessly through OEM's online platforms.",
  },
  {
    title: 'Credit Underwriting',
    coverImage: carosuel_dummy,
    subtitle:
      'We forge B2B partnerships with ecosystem players to establish scalable distribution channels and efficiently underwrite asset risk using advanced technology and analytics.',
  },
  {
    title: 'Tailored Financing Products ',
    coverImage: carosuel_dummy,
    subtitle:
      'We tailor products to align with customer profiles, focusing on utility, quality, and end-use of assets.',
  },
  {
    coverImage: carosuel_dummy,
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
    instanceText.slideTo(update)
  }
  const [instanceImage, setInstanceImage] = useState<any>(null)
  const [instanceText, setInstanceText] = useState<any>(null)

  const swiperImageRef = useRef<any>(null)
  const swiperTextRef = useRef<any>(null)

  const getTextSwiperInstance = () => {
    if (swiperTextRef.current && swiperTextRef.current.swiper) {
      return swiperTextRef.current.swiper
    }
    return null
  }

  const getImageSwiperInstance = () => {
    if (swiperImageRef.current && swiperImageRef.current.swiper) {
      return swiperImageRef.current.swiper
    }
    return null
  }

  useEffect(() => {
    const ins_image = getTextSwiperInstance()
    setInstanceImage(ins_image)

    const ins_text = getImageSwiperInstance()
    setInstanceText(ins_text)
  }, [])

  return (
    <section className="offering-wrapper">
      <div className="grid place-content-center place-items-center text-center">
        <div className="p-[10px] rounded-full bg-greenChip">
          <span className="text-3xl text-black font-medium px-4">
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

      <div className="grid place-content-center ">
        <div className="flex items-center bg-white py-4 px-5 tab-wrapper rounded-full gap-10">
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

      <div className="grid grid-cols-2 w-container">
        <div>
          <Swiper
            loop={false}
            modules={[Navigation]}
            onSlideChange={(swiper) => {
              setActive(swiper.realIndex % elems.length)
            }}
            ref={swiperImageRef}
            slidesPerView={1}
            initialSlide={2}
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
            <Swiper
              loop={false}
              modules={[Navigation, EffectCreative]}
              onSlideChange={(swiper) => {
                setActive(swiper.realIndex % elems.length)
              }}
              creativeEffect={{
                limitProgress: 1,
                prev: {
                  scale: 0.9,
                  opacity: 0,
                },
                next: {
                  scale: 0.9,
                  opacity: 0,
                },
              }}
              effect="creative"
              ref={swiperTextRef}
              slidesPerView={1}
              initialSlide={2}
              speed={600}
            >
              {elems.map((elem, index) => {
                const key = `${index}`
                return (
                  <SwiperSlide key={key} className="bg-white d ">
                    <div className="h-full flex flex-col gap-2">
                      <span className="carousel-title bg-clip-text  text-transparent  text-4xl font-medium">
                        {elem.title}
                      </span>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className="flex-0">something</div>
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
