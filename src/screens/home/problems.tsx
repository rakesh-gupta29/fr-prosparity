import React from 'react'

export default function Problems() {
  return (
    <section className="bg-blueGreen sus-wrapper ">
      <div className="grid w-container  problems-wrapper  blade-top-padding-sm blade-bottom-padding-sm ">
        <div className="blade-top-padding blade-bottom-padding-lg">
          <div className="grid place-content-start">
            <div className=" px-[2px] xl:px-[4px]  py-[4px] xl:py-[6px] rounded-full border-1 border-solid border-white border-opacity-30 bg-greenChip">
              <span className="xl:text-base text-sm  text-white font-medium px-4">
                Sustainability
              </span>
            </div>
          </div>

          <h3 className="title text-transparent bg-clip-text font-medium leading-tight w-11/12 md:w-full  pt-6 md:pt-8 xl:pt-10">
            Empowering sustainable <br className="md:block hidden" />
            mobility by doing our bit
          </h3>
          <ul className="flex flex-col gap-3 lg:gap-5 xl:gap-6  pt-5 md:pt-7 xl:pt-9">
            <li className="text-white font-normal leading-normal font-regular text-base md:text-lg 2xl:text-xl max-w-lg  w-11/12">
              At ProsParity, sustainability is our guiding principle. We
              champion inclusive economic growth through initiatives such as
              supporting EVs for livelihood generation, recognizing the immense
              potential for impact in India's growing EV market.
            </li>

            <li className="text-white font-normal leading-normal font-regular text-base md:text-lg 2xl:text-xl max-w-lg  w-11/12">
              By bridging transportation gaps, reducing pollution, and improving
              the lives of drivers, we're driving meaningful change.
            </li>
            <li className="text-white font-normal leading-normal font-regular text-base md:text-lg 2xl:text-xl max-w-lg  w-11/12">
              Join us on our sustainable journey, where every mile counts
              towards building a greener, more equitable future.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
