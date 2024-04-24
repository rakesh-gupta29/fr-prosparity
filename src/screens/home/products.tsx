import { MasterBtn } from 'atoms/buttons'
import React from 'react'

export default function Products() {
  const handleClick = () => console.log('contact us btn clicked')
  return (
    <section className="products-wrapper blade-top-padding-lg blade-bottom-padding-lg ">
      <div className="pb-[72px]">
        <h3 className="text-center  products-text-gradient text-transparent bg-clip-text font-medium px-2  ">
          Our Products
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-none max-w-3xl mx-auto gap-x-10 gap-y-5 w-container ">
        <article className=" rounded-[28px]  p-3 md:p-5 lg:p-7 xl:p-9 2xl:p-12   h-[590px] overflow-hidden product-card-wrapper two_wheeler-card">
          <div className="flex flex-col gap-3">
            <span className="text-3xl font-medium text-black leading-tight">
              Electric 3 Wheeler
            </span>
            <span className="text-base md:text-lg xl:text-xl max-w-[450px] font-regular font-normal leading-snug">
              Get loans for efficient and eco-friendly options for last-mile
              transportation needs.
            </span>
          </div>
        </article>

        <article className=" rounded-[28px]  p-3 md:p-5 lg:p-7 xl:p-9 2xl:p-12   h-[590px] overflow-hidden product-card-wrapper three_wheeler-card">
          <div className="flex flex-col gap-3">
            <span className="text-3xl font-medium text-black leading-tight">
              Electric 2 Wheeler
            </span>
            <span className="text-base md:text-lg xl:text-xl max-w-[450px] font-regular font-normal leading-snug">
              Avail loans for reliable and convenient electric scooters for
              urban and rural commuting.
            </span>
          </div>
        </article>
      </div>

      <div className="lg:max-w-none max-w-3xl mx-auto gap-x-10 gap-y-5 w-container ">
        <article className="h-[550px]  flex flex-col gap-y-5 product-card-wrapper  rounded-[28px]  p-3 md:p-5 lg:p-7 xl:p-9 2xl:p-12 ">
          <div className="flex flex-col gap-3 flex-1 ">
            <span className="text-3xl font-medium text-black leading-tight">
              Dealer Financing:
            </span>
            <span className="text-base md:text-lg xl:text-xl max-w-[550px] font-regular font-normal leading-snug">
              With competitive rates and selective assessment criteria, we
              empower dealers to grow their businesses while fostering strong,
              mutually beneficial relationships.
            </span>
          </div>
          <div className="flex-0">
            <MasterBtn
              text="Contact us"
              size="large"
              type="button"
              onClick={handleClick}
            >
              <div className="h-7 w-7 group-hover:bg-lightGreen group-hover:stroke-black transition-colors stroke-lightGreen duration-500 ease-in-out bg-black grid place-content-center place-items-center p-px rounded-full">
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.35449 2.08887L9.88974 6.81298C10.3969 7.13094 10.3969 7.86985 9.88974 8.18782L2.35449 12.9119"
                    stroke="inherit"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </MasterBtn>
          </div>
        </article>
      </div>
    </section>
  )
}
