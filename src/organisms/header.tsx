import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/logo_with_text.svg'
import { MasterAnchor } from 'atoms/links'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MobileNavModal from './mobileNav'

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const [isNavFixed, setisNavFixed] = useState(false)

  const handleScroll = () => {
    const scrollPos = window.scrollY
    if (scrollPos > 80) {
      setisNavFixed(true)
    } else {
      setisNavFixed(false)
    }
  }

  const headerWrapperRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    const showAnim = gsap
      .from(headerWrapperRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1)
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play()
        } else {
          showAnim.reverse()
        }
      },
    })
  }, [])

  const [isOpen, toggleState] = useReducer((s) => !s, false)

  return (
    <>
      <header
        ref={headerWrapperRef}
        className={`   ${
          isNavFixed ? 'bg-blueGreen' : 'bg-transparent'
        }  fixed left-0 top-0 right-0 py-2  md:py-3 lg:py-5 z-[999]`}
      >
        <nav className=" w-container-lg 2xl:w-container flex justify-between gap-x-10 items-center">
          <a
            className="grid  lg:basis-60 xl:basis-72 place-content-start grow-0 shrink  "
            href="/#hero"
          >
            <img
              src={logo}
              alt="logo for prosparity"
              className="h-8 md:h-10 lg:h-12 2xl:h-14 w-full object-contain object-center"
            />
          </a>

          <div className=" flex-1 items-center justify-center gap-x-7  md:flex hidden">
            <TextAnchor href="#products" title="Our products" />
            <TextAnchor href="#why-us" title="Why us" />
            <TextAnchor href="#teams" title="About us" />

            <TextAnchor href="#investors" title="Our Investors" />
          </div>

          <div className=" lg:basis-48 xl:basis-72 lg:flex hidden grow-0 shrink justify-end">
            <a
              href="#contact"
              className="rounded-full  hover:bg-darkGreen py-2 2xl:py-3  px-5 2xl:px-7  bg-[#0B373C] border-1 border-solid border-[#0B373C]   hover:text-[#E3FFCC]  text-[#E3FFCC] transition-all duration-300 ease-in-out
               text-base md:text-lg 2xl:text-xl font-regular font-semibold  tracking-wide "
            >
              Contact us
            </a>
          </div>

          <button
            type="button"
            className={`  ${
              isNavFixed ? 'fill-white' : 'fill-white'
            }  lg:hidden block`}
            onClick={toggleState}
          >
            <span className="sr-only">
              click to toggle the mobile navigation modal
            </span>
            <svg
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-6 my-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
                fill="inherit"
              />
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition z-[9999] duration-500 fixed inset-0 h-screen w-screen bg-black text-white`}
      >
        <MobileNavModal toggle={toggleState} />
      </div>
    </>
  )
}

function TextAnchor({ title, href }: { title: string; href: string }) {
  return (
    <a
      href={href}
      className="text-[#E3FFCC] text-sm font-medium uppercase tracking-wide hover:underline underline-offset-2 decoration-from-font"
    >
      {title}
    </a>
  )
}
