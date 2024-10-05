import React from 'react'
import TeamAndVision from 'screens/home/teams'

export default function PageAbout() {
  return (
    <div>
      <section className=" flex flex-col min-h-[350px]  bg-[#08272B] blade-top-padding-lg blade-bottom-padding-sm">
        <div className="text-center grid place-content-center place-items-center gap-4 blade-top-padding-sm mt-20 md:mt-12 lg:mt-10  ">
          <span className="banner-text-gradient bg-clip-text text-transparent  block leading-tight text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl animate-appear opacity-0 -translate-y-2 font-medium px-3">
            Our team
          </span>
        </div>
      </section>
      <div className="blade-bottom-padding-lg">
        <TeamAndVision />
      </div>
    </div>
  )
}
