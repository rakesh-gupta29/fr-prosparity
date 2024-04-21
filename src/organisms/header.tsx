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

  return (
    <header
      ref={headerWrapperRef}
      className={`   ${
        isNavFixed ? 'bg-white' : 'bg-transparent'
      }  fixed left-0 top-0 right-0 h-20`}
    >
      <nav className="w-container flex justify-between gap-x-10 items-center">
        <Link className="grid " to="/">
          <img
            src={logo}
            alt="logo for prosparity"
            className="h-full w-full object-contain object-center"
          />
        </Link>
        <MasterAnchor href="#contact" text="Contact us">
          <div className="h-7 w-7 group-hover:bg-darkGreen group-hover:stroke-white transition-colors stroke-darkGreen duration-500 ease-in-out bg-white grid place-content-center place-items-center p-px rounded-full">
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
        </MasterAnchor>
      </nav>
    </header>
  )
}
