import { ContactForm } from 'organisms/index'
import React, { ReactNode } from 'react'

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="contact-us-wrapper  md:blade-top-padding-sm blade-bottom-padding-lg "
    >
      <div className="w-container-lg  w-full  grid grid-cols-1 lg:grid-cols-2 md:blade-top-padding-lg">
        <div className="flex flex-col md:pl-4  lg:pl-8 xl:pl-10 2xl:pl-12 justify-start blade-top-padding-lg ">
          <span className="title bg-clip-text text-transparent leading-tight font-medium text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Join us in the <br className="md:block hidden" /> EV Revolution!
          </span>

          <div className="pt-6 md:pt-8 lg:pt-12 xl:pt-14 grid x gap-4 l:gap-6 ">
            <span className=" text-white  font-medium text-lg md:text-xl  xl:text-2xl 2xl:text-3xl">
              Contact Info
            </span>
            <Card
              icon={<EmailIcon />}
              title="hello@prosparity.in"
              target="mailto:hello@prosparity.in"
            />
          </div>
        </div>

        <div className="flex justify-end md:pr-4 xl:pr-6">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
function EmailIcon() {
  return (
    <svg
      className=" h-auto object-contain w-4 md:w-5 lg:w-6"
      width="28"
      height="23"
      viewBox="0 0 28 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.88997 0.908203H24.5566C25.9775 0.908203 27.14 2.0707 27.14 3.49154V18.9915C27.14 20.4124 25.9775 21.5749 24.5566 21.5749H3.88997C2.46914 21.5749 1.30664 20.4124 1.30664 18.9915V3.49154C1.30664 2.0707 2.46914 0.908203 3.88997 0.908203Z"
        stroke="#3AF779"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.14 3.49414L14.2233 12.5358L1.30664 3.49414"
        stroke="#3AF779"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Card({
  title,
  target,
  icon,
}: {
  icon?: ReactNode
  title: string
  target: string
}) {
  return (
    <li className="flex items-center gap-2 md:gap-3">
      <div>
        {icon ?? (
          <svg
            className=" h-auto   object-contain  w-5 md:w-6 lg:w-7"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3064 0.908203C5.42509 0.908203 0.639757 5.69354 0.639757 11.5682C0.60109 20.1615 10.9011 27.2869 11.3064 27.5749C11.3064 27.5749 22.0118 20.1615 21.9731 11.5749C21.9731 5.69354 17.1878 0.908203 11.3064 0.908203ZM11.3064 16.9082C8.35976 16.9082 5.97309 14.5215 5.97309 11.5749C5.97309 8.6282 8.35976 6.24154 11.3064 6.24154C14.2531 6.24154 16.6398 8.6282 16.6398 11.5749C16.6398 14.5215 14.2531 16.9082 11.3064 16.9082Z"
              fill="#3AF779"
            />
          </svg>
        )}
      </div>
      <span className="text-[#E3FFCC] text-base md:text-lg xl:text-xl 2xl:text-2xl font-regular">
        {title}{' '}
      </span>
    </li>
  )
}
