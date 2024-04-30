import React, { useEffect, useRef, useState } from 'react'
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

  const handleClick = () => {}

  return (
    <header
      ref={headerWrapperRef}
      className={`   ${
        isNavFixed ? 'bg-blueGreen' : 'bg-transparent'
      }  fixed left-0 top-0 right-0 py-5 z-[999999]`}
    >
      <nav className="w-container flex justify-between gap-x-10 items-center">
        <Link className="grid   lg:basis-80 grow-0 shrink  " to="/">
          <img
            src={logo}
            alt="logo for prosparity"
            className="h-8 md:h-10 lg:h-12 xl:h-14 w-full object-contain object-center"
          />
        </Link>

        <div className=" flex-1 items-center justify-center gap-x-7  md:flex hidden">
          <TextAnchor href="#product" title="Products" />
          <TextAnchor href="#offerings" title="Offerings" />
          <TextAnchor href="#team" title="Team" />
        </div>

        <div className="lg:basis-80 lg:block hidden grow-0 shrink  flex justify-end">
          <button
            type="button"
            onClick={handleClick}
            className="rounded-full py-3 px-7  bg-[#0B373C] border-1 border-solid border-[#0B373C]  hover:bg-[#0B373C] hover:text-[#E3FFCC]  text-[#E3FFCC] transition-all duration-300 ease-in-out
               text-base md:text-lg xl:text-xl font-regular font-semibold  tracking-wide "
          >
            Contact us
          </button>
        </div>
      </nav>
    </header>
  )
}

function TextAnchor({ title, href }: { title: string; href: string }) {
  return (
    <Link
      to={href}
      className="text-[#E3FFCC] text-sm font-medium uppercase tracking-wide hover:underline underline-offset-2 decoration-from-font"
    >
      {title}
    </Link>
  )
}
