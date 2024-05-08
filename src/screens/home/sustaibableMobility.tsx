import React from 'react'
import check from 'assets/globe_logo.png'
import { MasterAnchor } from 'atoms/links'

export default function SustainableMobility() {
  const handleClick = () => {}
  return (
    <section className=" bg-blueGreen px-2 bg-[url('assets/mesh_bg.png')] bg-contain bg-center bg-no-repeat blade-top-padding-sm blade-bottom-padding-lg">
      <section className="blade-top-padding-sm blade-bottom-padding">
        <section
          // data-aos="appear-down"
          // data-aos-offset="400"
          // data-aos-duration="400"
          // data-aos-easing="ease-in-out"
          className="what-we-do-wrapper 2xl:rounded-[40px]  rounded-[20px] lg:rounded-[30px] max-w-[1400px] mx-auto md:w-11/12 xl:w-10/12 px-1.5 lg:px-3 py-1.5 lg:py-3 overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-y-2 xl:gap-16  w-full 2xl:gap-x-20 ">
            <div className="   h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[580px] flex-1 overflow-hidden   rounded-[14px] lg:rounded-[22px] 2xl:rounded-[32px]">
              <div className="overflow-hidden h-full rounded-[14px] lg:rounded-[22px] 2xl:rounded-[32px]  ">
                <img
                  src={check}
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-1 pl-3 sm:pl-5 lg:pl-0  flex-col justify-center pt-4 md:pt-6 xl:pt-8  pb-6 xl:pb-8 2xl:pt-10  lg:pr-10  items-start">
              <span className="text-2xl lg:text-3xl 2xl:text-4xl title leading-tight block font-medium text-transparent bg-clip-text   pb-4 md:pb-6 xl:pb-8 ">
                Empowering sustainable mobility by doing our bit
              </span>
              <div className="grid gap-3 md:gap-4 lg:gap-5 pr-4">
                <span className="text-sm md:text-base  lg:text-lg  2xl:text-xl text-black leading-tight font-regular text-opacity-80  tracking-[0.24px]  max-w-md ">
                  At ProsParity, sustainability is our guiding principle. We
                  champion inclusive economic growth through initiatives such as
                  supporting EVs for livelihood generation, recognizing the
                  immense potential for impact in India's growing EV market.
                </span>
                <span className="text-sm md:text-base  lg:text-lg  2xl:text-xl text-black leading-tight font-regular text-opacity-80 tracking-[0.24px]  max-w-lg ">
                  By bridging transportation gaps, reducing pollution, and
                  improving the lives of drivers, we're driving meaningful
                  change.
                </span>

                <span className="text-sm md:text-base  lg:text-lg  2xl:text-xl text-black leading-tight font-regular text-opacity-80 tracking-[0.24px]  max-w-lg ">
                  Join us on our sustainable journey, where every mile counts
                  towards building a greener, more equitable future.
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
