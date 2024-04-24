import React, { useState } from 'react'

export default function Teams() {
  const [active, setActive] = useState(0)
  const changeTab = (update: number) => setActive(update)
  return (
    <div>
      <div className="flex items-center gap-10">
        <Tab
          callback={() => changeTab(0)}
          active={active === 0}
          text="Our Team"
        />
        <Tab
          callback={() => changeTab(1)}
          active={active === 1}
          text="Our Mission"
        />
        <Tab
          callback={() => changeTab(2)}
          active={active === 2}
          text="Our Vision"
        />
      </div>
    </div>
  )
}

function Tab({
  callback,
  text,
  active,
}: {
  callback: () => void
  text: string
  active: boolean
}) {
  return (
    <button
      type="button"
      onClick={callback}
      className={` ${
        active ? 'tab-active' : ''
      } px-8 text-lg 2xl:text-xl py-2 rounded-full font-medium`}
    >
      {text}
    </button>
  )
}

function Team({
  elem,
}: {
  elem: { member: string; designation: string; cover: string }
}) {
  const { member, designation, cover } = elem
  return <article></article>
}
