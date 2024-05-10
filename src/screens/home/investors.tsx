import React from 'react'
import one from 'assets/investors/investor1.png'
import two from 'assets/investors/investor2.png'
import three from 'assets/investors/investor3.png'
import four from 'assets/investors/investor4.png'
import five from 'assets/investors/investor5.png'

export default function Investors() {
  return (
    <div
      className="investors-wrapper  blade-top-padding-lg  blade-bottom-padding-sm"
      id="investors"
    >
      <div className="blade-top-padding blade-bottom-padding px-5 text-center">
        <span className="text-3xl md:text-4xl 2xl:text-5xl title font-medium">
          Our Investors
        </span>
      </div>
      <div className="max-w-screen-xl mx-auto blade-bottom-padding-lg">
        <div className="grid grid-cols-2  md:grid-cols-3 px-2 lg:grid-cols-5 gap-y-2 gap-x-4 md:gap-5 lg:gap-7  xl:gap-9">
          <Tile icon={one} title="logo of invesor in the Prosparity" />
          <Tile icon={three} title="logo of invesor in the Prosparity" />
          <Tile icon={four} title="logo of invesor in the Prosparity" />
          <Tile icon={five} title="logo of invesor in the Prosparity" />
          <Tile icon={two} title="logo of invesor in the Prosparity" />
        </div>
      </div>
    </div>
  )
}

function Tile({ title, icon }: { title: string; icon: string }) {
  return (
    <article className="grid place-content-center">
      <img
        src={icon}
        alt={title}
        className="w-full max-w-[300px] md:h-[130px] lg:h-[150px]  object-contain object-center"
      />
    </article>
  )
}
