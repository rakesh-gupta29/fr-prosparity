import React from 'react'
import one from 'assets/investors/investor1.png'
import two from 'assets/investors/investor2.png'
import three from 'assets/investors/investor3.png'
import four from 'assets/investors/investor4.png'
import five from 'assets/investors/investor5.png'

export default function Investors() {
  return (
    <div className="investors-wrapper  blade-top-padding-lg " id="investors">
      <div className="blade-top-padding blade-bottom-padding-sm px-5 text-center">
        <h3 className="title font-medium">Our Investors</h3>
      </div>
      <div className="max-w-screen-xl mx-auto blade-bottom-padding-lg">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-7  xl:gap-9">
          <Tile icon={one} title="check this" />
          <Tile icon={two} title="check this" />
          <Tile icon={three} title="check this" />
          <Tile icon={four} title="check this" />
          <Tile icon={five} title="check this" />
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
        className="w-full max-w-[300px]  h-[120px] md:h-[130px] lg:h-[150px]  object-contain object-center"
      />
    </article>
  )
}
