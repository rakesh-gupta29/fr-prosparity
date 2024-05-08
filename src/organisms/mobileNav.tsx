import React, { DispatchWithoutAction, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from 'assets/logo_with_text.svg'

// import logomark from 'assets/globals/logo.svg'

export default function MobileNavModal({
  toggle,
}: {
  toggle: DispatchWithoutAction
}) {
  const navigate = useNavigate()
  const navigateTo = (target: string) => {
    navigate(target)
    toggle()
  }

  return (
    /* eslint-disable */
    <nav className="bg-white z-[99999999] h-[100dvh]">
      <section className="w-container min-h-full text-dark overflow-auto flex flex-col flex-nowrap z-[999]">
        <div className="flex items-center gap-x-3 py-3 justify-between">
          <a
            className="grid  grow place-content-start w-full shrink flex-1"
            href="#hero"
          >
            <img
              src={logo}
              alt="logo for prosparity"
              className="h-8 md:h-10 lg:h-12 xl:h-14 w-full object-contain object-center"
            />
          </a>
          <button
            type="button"
            className=" stroke-black block"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="inherit"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col flex-1 pt-8">
          <ul className="list-none grid gap-3">
            <li onClick={toggle}>
              <TextAnchor href="#products" title="Our products" />
            </li>
            <li onClick={toggle}>
              <TextAnchor href="#why-us" title="Why us" />
            </li>
            <li onClick={toggle}>
              <TextAnchor href="#teams" title="About us" />
            </li>
            <li onClick={toggle}>
              <TextAnchor href="#investors" title="Our Investors" />
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}

function TextAnchor({
  title,
  href,
  disabled = false,
}: {
  disabled?: boolean
  title: string
  href: string
}) {
  return (
    <a
      href={href}
      className={` text-blueGreen text-lg font-medium uppercase tracking-wide hover:underline underline-offset-2 decoration-from-font ${
        disabled ? 'opacity-70  pointer-events-none touch-none' : ''
      }`}
    >
      {title}
    </a>
  )
}
