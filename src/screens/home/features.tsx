import React from 'react'
import featuresImage from 'assets/features.png'

const featuresPointers = [
  {
    title: 'Unique operating model',
    desc: 'We specialize in providing asset purchase finance specifically tailored for electric two-wheelers and three-wheelers, targeting Tier 2+ cities across India.',
  },
  {
    title: 'Phygital business approach',
    desc: 'Combining the efficiency of digital sourcing and underwriting with the reliability of physical credit risk assessment and collection support, our unique approach ensures seamless operations and customer satisfaction.',
  },
  {
    title: 'Unique operating model',
    desc: 'We specialize in providing asset purchase finance specifically tailored for electric two-wheelers and three-wheelers, targeting Tier 2+ cities across India.',
  },
]

export default function Features() {
  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg features-wrapper  ">
      <div className="w-container ">
        <div className="grid place-content-start pb-8">
          <div className="p-[10px] rounded-full bg-creamChip">
            <span className="text-3xl text-darkGreen font-medium px-4">
              What sets us apart
            </span>
          </div>
        </div>

        <div className="grid gap-3 ">
          <span className="text-5xl title font-medium text-transparent bg-clip-text ">
            What sets us apart
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

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            src={featuresImage}
            alt="features"
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div className="pr-16 pl-5 md:pl-10 xl:pl-16  2xl:pl-20">
          {featuresPointers.map((elem, index: number) => {
            const key = `${index}`
            return <Card elem={elem} key={key} />
          })}
        </div>
      </div>
    </section>
  )
}

function Card({ elem }: { elem: { title: string; desc: string } }) {
  const { title, desc } = elem
  return (
    <>
      <article className="grid gap-4 max-w-xl">
        <span className="text-3xl pointers-title text-transparent bg-clip-text font-medium ">
          {title}
        </span>
        <span className="text-black font-normal text-base md:text-lg 2xl:text-xl leading-normal w-11/12 font-regular">
          {desc}{' '}
        </span>
      </article>
      <div className="py-[52px] max-w-[900px] last-of-type:hidden">
        <div className="h-[1px] bg-gray "></div>
      </div>
    </>
  )
}
