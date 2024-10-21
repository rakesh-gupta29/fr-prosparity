import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen  soon-wrapper  bg-gradient-to-b from-darkGreen to-lightGreen to-dark blade-top-padding-lg">
      <div className="blade-top-padding-sm ">
        <div className="blade-top-padding-lg  blade-bottom-padding">
          <div className="w-container place-items-center grid place-content-center text-center gap-6 blade-top-padding-sm ">
            <span className="text-6xl font-bitter font-medium leading-normal bg-gradient-to-b from-black to-darkGreen bg-clip-text text-transparent">
              We seem lost!
            </span>
            <span className="text-dark font-normal text-2xl font-regular">
              The page you are looking for does not exist or have moved
              permanently.
            </span>

            <div className="grid place-content-start  pt-3 md:pt-5">
              <a
                href="/"
                className="rounded-full  hover:bg-darkGreen py-2 2xl:py-3  px-5 2xl:px-7  bg-[#0B373C] border-1 border-solid border-[#0B373C]   hover:text-[#E3FFCC]  text-[#E3FFCC] transition-all duration-300 ease-in-out
               text-base md:text-lg 2xl:text-xl font-regular font-semibold  tracking-wide "
              >
                Return to homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
