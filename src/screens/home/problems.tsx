import React from 'react'

export default function Problems() {
  return (
    <section className="bg-darkGreen">
      <div className="grid w-container  problems-wrapper  blade-top-padding blade-bottom-padding-sm ">
        <div className="blade-top-padding-lg blade-bottom-padding-lg">
          <div className="grid place-content-start">
            <div className="p-[10px] rounded-full bg-greenChip">
              <span className="text-3xl text-white font-medium px-4">
                What problem are we solving?
              </span>
            </div>
          </div>

          <h3 className="title text-transparent bg-clip-text font-medium leading-tight  pt-6 md:pt-8 xl:pt-10">
            Empowering sustainable <br className="md:block hidden" />
            mobility by doing our bit
          </h3>
          <ul className="flex flex-col gap-6 pt-9">
            <li className="text-white font-normal leading-normal font-regular text-base md:text-lg xl:text-xl max-w-lg  w-11/12">
              At ProsParity, sustainability is our guiding principle. We
              champion inclusive economic growth through initiatives such as
              supporting EVs for livelihood generation, recognizing the immense
              potential for impact in India's growing EV market.
            </li>

            <li className="text-white font-normal leading-normal font-regular text-base md:text-lg xl:text-xl max-w-lg  w-11/12">
              By bridging transportation gaps, reducing pollution, and improving
              the lives of drivers, we're driving meaningful change.
            </li>
            <li className="text-white font-normal leading-normal font-regular text-base md:text-lg xl:text-xl max-w-lg  w-11/12">
              Join us on our sustainable journey, where every mile counts
              towards building a greener, more equitable future.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
