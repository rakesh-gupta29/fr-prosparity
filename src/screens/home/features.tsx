import React from 'react'
import featuresImage from 'assets/features.png'
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
    <section className="blade-top-padding-lg blade-bottom-padding-lg features-wrapper  ">
      <div className="w-container grid place-content-center place-items-center text-center ">
        <div className="grid place-content-start pb-6">
          <div className="p-[10px] rounded-full bg-creamChip">
            <span className="text-3xl text-darkGreen font-medium px-4">
              What sets us apart
            </span>
          </div>
        </div>

        <div className="grid gap-3 ">
          <span className="text-5xl title font-medium text-transparent bg-clip-text ">
            How are we different?
          </span>
          <span className="text-base md:text-lg 2xl:text-xl leading-normal text-black font-normal font-regular">
            We specialize in providing asset purchase finance specifically{' '}
            <br className="md:block hidden" />
            tailored for electric two-wheelers and three-wheelers, targeting{' '}
            <br className="md:block hidden" />
            Tier 2+ cities across India.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 w-container-lg  gap-x-16 pt-16 md:pt-20 lg:pt-24 xl:pt-28  2xl:pt-32">
        {featuresPointers.map((elem, index: number) => {
          const key = `${index}`
          return <Card elem={elem} key={key} />
        })}
      </div>
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
      <article className="grid gap-4 max-w-xl">
        <div>
          <div className="h-[90px] w-[90px] mb-10 rounded overflow-hidden">
            <img
              src={icon}
              alt={title}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <span className="text-3xl pointers-title text-transparent bg-clip-text font-medium ">
            {title}
          </span>
        </div>
        <span className="text-black font-normal text-base md:text-lg 2xl:text-xl leading-normal w-10/12 font-regular">
          {desc}{' '}
        </span>
      </article>
    </>
  )
}
