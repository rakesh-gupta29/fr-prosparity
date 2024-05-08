import React from 'react'
import one from 'assets/investors/one.png'

export default function Investors() {
  return (
    <div className="investors-wrapper">
      <div className="blade-top-padding blade-bottom-padding px-5 text-center">
        <h3 className="title font-medium">Our Investors</h3>
      </div>
      <div className="max-w-screen-xl mx-auto blade-bottom-padding-lg">
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 lg:gap-7  xl:gap-9">
          <Tile icon={one} title="check this" />
          <Tile icon={one} title="check this" />
          <Tile icon={one} title="check this" />
          <Tile icon={one} title="check this" />
        </div>
      </div>
    </div>
  )
}

function Tile({ title, icon }: { title: string; icon: string }) {
  return (
    <article className="tile  max-w-[250px] md:max-w-[300px] mx-auto w-full h-[120px] md:h-[130px] lg:h-[150px] grid place-content-center">
      <img
        src={icon}
        alt={title}
        className="w-full max-w-[300px]  h-[120px] md:h-[130px] lg:h-[150px]  object-contain object-center"
      />
    </article>
  )
}
