import { MasterBtn } from 'atoms/buttons'
import React from 'react'

export default function Products() {
  const handleClick = () => console.log('contact us btn clicked')
  return (
    <section
      id="products"
      className=" bg-[#FBF9F9] blade-top-padding-lg blade-bottom-padding-lg md:blade-bottom-padding "
    >
      <div
        className="pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16 2xl:pb-[72px] text-wrapper"
        data-aos="appear-down"
        data-aos-offset="400"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        <h2 className="text-center  products-text-gradient text-transparent bg-clip-text font-medium px-2  ">
          Our Products
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-none max-w-3xl  mx-auto gap-x-6  lg:gap-x-8 2xl:gap-x-10 gap-y-5 w-container ">
        <article className="lg:rounded-2xl  md:rounded-xl rounded-xl relative  xl:rounded-3xl 2xl:rounded-[28px]  hover:border-opacity-100 transition-all duration-300 ease-in-out hover:scale-[0.99] scale-100  outline outline-2 outline-solid hover:outline-gray  outline-transparent   p-5 md:p-5 lg:p-7 xl:p-9 2xl:p-12  h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[590px] overflow-hidden product-card-wrapper three_wheeler-card">
          <div className="absolute  md:hidden block inset-0 bg-gradient-to-b from-white to-transparent"></div>

          <div className="flex flex-col gap-3 relative ">
            <span className="text-2xl lg:text-3xl font-medium text-black leading-tight">
              Electric 3 Wheeler
            </span>
            <span className=" text-sm md:text-base lg:text-lg 2xl:text-xl max-w-[450px] font-regular block w-11/12  font-normal leading-snug">
              Get loans for efficient and eco-friendly{' '}
              <br className="md:block hidden" /> options for last-mile
              transportation <br className="md:block hidden" />
              needs.
            </span>
            <div className="grid place-content-start  pt-3  md:pt-6 lg:pt-7 ">
              <button
                type="button"
                onClick={handleClick}
                className="rounded-full py-1 md:py-2 lg:py-3  px-4 md:px-6 lg:px-7  bg-white border-1 border-solid border-[#0B373C] text-[#0B373C] hover:bg-[#0B373C] hover:text-[#E3FFCC] transition-all duration-300 ease-in-out
                text-sm md:text-base lg:text-lg 2xl:text-xl font-regular font-semibold  tracking-wide "
              >
                Contact us
              </button>
            </div>
          </div>
        </article>

        <article className=" lg:rounded-2xl md:rounded-xl rounded-xl xl:rounded-3xl 2xl:rounded-[28px]  p-5 md:p-5 lg:p-7 xl:p-9 2xl:p-12  h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[590px] overflow-hidden product-card-wrapper two_wheeler-card   outline outline-2 outline-solid hover:outline-gray  outline-transparent   transition-all duration-300 ease-in-out hover:scale-[0.99] scale-100  ">
          <div className="absolute  md:hidden block inset-0 bg-gradient-to-b from-white to-transparent"></div>

          <div className="flex flex-col gap-3 relative ">
            <span className="text-2xl lg:text-3xl font-medium text-black leading-tight">
              Electric 2 Wheeler
            </span>
            <span className=" text-sm md:text-base lg:text-lg 2xl:text-xl font-regular font-normal leading-snug">
              Avail loans for reliable and convenient{' '}
              <br className="md:block hidden" /> electric scooters for urban and{' '}
              <br className="md:block hidden" /> rural commuting.
            </span>
            <div className="grid place-content-start  pt-3 md:pt-6 lg:pt-7 ">
              <button
                type="button"
                onClick={handleClick}
                className="rounded-full py-1 md:py-2 lg:py-3  px-4 md:px-6 lg:px-7  bg-white border-1 border-solid border-[#0B373C] text-[#0B373C] hover:bg-[#0B373C] hover:text-[#E3FFCC] transition-all duration-300 ease-in-out
                text-sm md:text-base lg:text-lg 2xl:text-xl font-regular font-semibold  tracking-wide "
              >
                Contact us
              </button>
            </div>
          </div>
        </article>
      </div>

      <div className="lg:max-w-none max-w-3xl mx-auto gap-x-10 gap-y-5 w-container pt-4 md:pt-6 lg:pt-8 xl:pt-10  ">
        <article
          className="h-[300px] md:h-[330px] lg:h-[360px] xl:h-[420px] 2xl:h-[540px]  flex flex-col gap-y-5 product-card-wrapper   
        hover:border-opacity-100 transition-all duration-300 ease-in-out hover:scale-[0.99] scale-100  outline outline-2 outline-solid hover:outline-gray  outline-transparent      
          lg:rounded-2xl md:rounded-xl rounded-xl xl:rounded-3xl 2xl:rounded-[28px] dealership-wrapper overflow-hidden p-5 md:p-5 lg:p-7 xl:p-9 2xl:p-12 "
        >
          <div className="absolute md:hidden block  inset-0 bg-gradient-to-b from-white to-transparent"></div>

          <div className="flex flex-col gap-3 flex-1 relative  ">
            <span className="text-2xl lg:text-3xl font-medium text-black leading-tight">
              Dealer Financing:
            </span>
            <span className=" text-sm md:text-base lg:text-lg 2xl:text-xl max-w-sm 2xl:max-w-[550px] font-regular font-normal leading-snug">
              With competitive rates and selective assessment criteria, we
              empower dealers to grow their businesses while fostering strong,
              mutually beneficial relationships.
            </span>
            <div className="grid place-content-start  pt-3 md:pt-6 lg:pt-7 ">
              <button
                type="button"
                onClick={handleClick}
                className="rounded-full py-1 md:py-2 lg:py-3  px-4 md:px-6 lg:px-7   bg-white border-1 border-solid border-[#0B373C] text-[#0B373C] hover:bg-[#0B373C] hover:text-[#E3FFCC] transition-all duration-300 ease-in-out
                text-sm md:text-base lg:text-lg 2xl:text-xl font-regular font-semibold  tracking-wide "
              >
                Contact us
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
