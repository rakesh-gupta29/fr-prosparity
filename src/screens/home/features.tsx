import React from 'react'
import featuresImage from 'assets/features.png'
import rightDivider from 'assets/right_divider.png'
import leftDivider from 'assets/left_divider.png'

import model from 'assets/features/model.svg'
import team from 'assets/features/team.svg'
import business from 'assets/features/business.svg'

const featuresPointers = [
  {
    title: 'Unique operating model',
    icon: model,
    desc: 'We specialize in providing asset purchase finance specifically tailored for electric two-wheelers and three-wheelers, targeting Tier 2+ cities across India.',
  },
  {
    icon: business,
    title: 'Phygital business approach',
    desc: 'Combining the efficiency of digital sourcing and underwriting with the reliability of physical credit risk assessment and collection support, our unique approach ensures seamless operations and customer satisfaction.',
  },
  {
    icon: team,
    title: 'Experienced founding team',
    desc: ' Our leadership team boasts extensive experience in building and scaling digital lending platforms, establishing successful vehicle finance franchises, and securing debt funding, ensuring a solid foundation for our operations.',
  },
]

export default function Features() {
  return (
    <section className="blade-bottom-padding-sm">
      <section className="blade-top-padding-lg blade-bottom-padding-lg features-wrapper  ">
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
            <span className=" text-3xl lg:text-4xl 2xl:text-5xl block leading-tight title font-medium text-transparent bg-clip-text ">
              How are we different?
            </span>
            <span className="text-sm md:text-base xl:text-lg 2xl:text-xl leading-normal text-black font-normal block px-2 font-regular">
              We specialize in providing asset purchase finance specifically{' '}
              <br className="md:block hidden" />
              tailored for electric two-wheelers and three-wheelers, targeting{' '}
              <br className="md:block hidden" />
              Tier 2+ cities across India.
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

        <div
          data-aos="appear-down"
          data-aos-offset="400"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-delay="250"
          className="grid grid-cols-1 lg:grid-cols-3 w-container-lg  gap-y-10 md:gap-y-10  lg:gap-x-10 xl:gap-x-12 2xl:gap-x-16 pt-16 md:pt-20 lg:pt-24 xl:pt-28  2xl:pt-32"
        >
          {featuresPointers.map((elem, index: number) => {
            const key = `${index}`
            return <Card elem={elem} key={key} />
          })}
        </div>
      </section>
    </section>
  )
}

function Card({
  elem,
}: {
  elem: { title: string; desc: string; icon: string }
}) {
  const { title, desc, icon } = elem
  return (
    <>
      <article className="flex flex-col gap-2 md:gap-3 lg:gap-4 max-w-xl">
        <div className="flex-0 ">
          <div className="  h-[60px] md:h-[74px] xl:h-[90px] w-[60px] md:w-[74px] xl:w-[90px] mb-3 md:mb-4 xl:mb-8 2xl:mb-10 rounded overflow-hidden">
            <img
              src={icon}
              alt={title}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <span className=" text-xl lg:text-2xl 2xl:text-3xl pointers-title text-transparent bg-clip-text font-medium leading-normal block">
            {title}
          </span>
        </div>
        <span className="text-black font-normal  text-sm md:text-base lg:text-lg  2xl:text-xl leading-normal  w-11/12 lg:w-10/12 flex-1 font-regular">
          {desc}{' '}
        </span>
      </article>
    </>
  )
}
