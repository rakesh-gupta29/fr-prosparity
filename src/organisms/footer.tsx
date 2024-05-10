import React from 'react'
import logo from 'assets/logo_with_text.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="lg:min-h-[200px] blade-top-padding blade-bottom-padding">
      <div className="w-container">
        <div className="flex flex-col md:flex-row  md:items-center gap-x-6 justify-between ">
          <div className=" flex items-center md:grid  justify-between  place-content-start md:pb-0 pb-7">
            <div className="grid place-content-start flex-1 ">
              <img
                src={logo}
                alt="logo for prosparity"
                className="h-10 md:h-12 lg:h-14 w-full object-contain object-center"
              />
            </div>

            <div className="md:hidden block flex-0 mt-px mr-1 ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/thrive-trail-private-limited/"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.22461"
                    y="1.35352"
                    width="41"
                    height="41"
                    rx="3.5"
                    fill="#0B373C"
                  />
                  <rect
                    x="1.22461"
                    y="1.35352"
                    width="41"
                    height="41"
                    rx="3.5"
                    stroke="#0B373C"
                  />
                  <path
                    d="M30.7246 14.177V29.53C30.7246 29.881 30.5852 30.2176 30.3369 30.4658C30.0887 30.7141 29.7521 30.8535 29.4011 30.8535H14.0481C13.6971 30.8535 13.3605 30.7141 13.1123 30.4658C12.864 30.2176 12.7246 29.881 12.7246 29.53V14.177C12.7246 13.826 12.864 13.4894 13.1123 13.2412C13.3605 12.993 13.6971 12.8535 14.0481 12.8535H29.4011C29.7521 12.8535 30.0887 12.993 30.3369 13.2412C30.5852 13.4894 30.7246 13.826 30.7246 14.177ZM18.0187 19.7359H15.3717V28.2064H18.0187V19.7359ZM18.257 16.8241C18.2584 16.6239 18.2203 16.4253 18.145 16.2398C18.0696 16.0543 17.9585 15.8854 17.8179 15.7429C17.6773 15.6003 17.51 15.4868 17.3255 15.4089C17.1411 15.331 16.9431 15.2902 16.7428 15.2888H16.6952C16.288 15.2888 15.8975 15.4506 15.6096 15.7385C15.3217 16.0264 15.1599 16.4169 15.1599 16.8241C15.1599 17.2313 15.3217 17.6218 15.6096 17.9097C15.8975 18.1976 16.288 18.3594 16.6952 18.3594C16.8954 18.3643 17.0947 18.3297 17.2816 18.2576C17.4684 18.1855 17.6393 18.0773 17.7843 17.9392C17.9293 17.801 18.0457 17.6356 18.1268 17.4525C18.2079 17.2693 18.2522 17.072 18.257 16.8718V16.8241ZM28.0775 23.0606C28.0775 20.5141 26.4575 19.5241 24.8481 19.5241C24.3212 19.4977 23.7965 19.61 23.3265 19.8496C22.8564 20.0893 22.4574 20.448 22.1693 20.89H22.0952V19.7359H19.607V28.2064H22.254V23.7011C22.2157 23.2397 22.3611 22.7818 22.6585 22.427C22.9559 22.0721 23.3813 21.8489 23.8422 21.8059H23.9428C24.7846 21.8059 25.4093 22.3353 25.4093 23.6694V28.2064H28.0564L28.0775 23.0606Z"
                    fill="#3BFE7B"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center  gap-x-6 xl:gap-x-10 gap-y-3 md:gap-y-6 max-w-xl">
            <TextAnchor href="#products" title="Our products" />
            <TextAnchor href="#why-us" title="Why us" />
            <TextAnchor href="#teams" title="About us" />
            <TextAnchor href="#investors" title="Our Investors" />
          </div>
        </div>

        <div className="flex items-center gap-x-6 pt-5 md:pt-8 lg:pt-10 justify-between ">
          <div className="md:block hidden">
            <span className="text-sm font-medium text-white block text-opacity-30">
              Copyright © 2024 Thrive Trail Private Limited
            </span>
          </div>

          <div className=" flex md:flex-row flex-col-reverse md:items-center justify-end  gap-6 md:gap-8 xl:gap-10 pt-2 ">
            <div className="flex  md:flex-row flex-col-reverse  gap-3  md:gap-5 xl:gap-8 md:items-center h-full 2xl:gap-10 ">
              <TextAnchor href="/privacy" title="Privacy Policy" disabled />
              <TextAnchor
                href="/terms-and-conditions"
                title="Terms & Conditions"
                disabled
              />
            </div>
            <div className="md:block hidden">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/thrive-trail-private-limited/"
              >
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.22461"
                    y="1.35352"
                    width="41"
                    height="41"
                    rx="3.5"
                    fill="#0B373C"
                  />
                  <rect
                    x="1.22461"
                    y="1.35352"
                    width="41"
                    height="41"
                    rx="3.5"
                    stroke="#0B373C"
                  />
                  <path
                    d="M30.7246 14.177V29.53C30.7246 29.881 30.5852 30.2176 30.3369 30.4658C30.0887 30.7141 29.7521 30.8535 29.4011 30.8535H14.0481C13.6971 30.8535 13.3605 30.7141 13.1123 30.4658C12.864 30.2176 12.7246 29.881 12.7246 29.53V14.177C12.7246 13.826 12.864 13.4894 13.1123 13.2412C13.3605 12.993 13.6971 12.8535 14.0481 12.8535H29.4011C29.7521 12.8535 30.0887 12.993 30.3369 13.2412C30.5852 13.4894 30.7246 13.826 30.7246 14.177ZM18.0187 19.7359H15.3717V28.2064H18.0187V19.7359ZM18.257 16.8241C18.2584 16.6239 18.2203 16.4253 18.145 16.2398C18.0696 16.0543 17.9585 15.8854 17.8179 15.7429C17.6773 15.6003 17.51 15.4868 17.3255 15.4089C17.1411 15.331 16.9431 15.2902 16.7428 15.2888H16.6952C16.288 15.2888 15.8975 15.4506 15.6096 15.7385C15.3217 16.0264 15.1599 16.4169 15.1599 16.8241C15.1599 17.2313 15.3217 17.6218 15.6096 17.9097C15.8975 18.1976 16.288 18.3594 16.6952 18.3594C16.8954 18.3643 17.0947 18.3297 17.2816 18.2576C17.4684 18.1855 17.6393 18.0773 17.7843 17.9392C17.9293 17.801 18.0457 17.6356 18.1268 17.4525C18.2079 17.2693 18.2522 17.072 18.257 16.8718V16.8241ZM28.0775 23.0606C28.0775 20.5141 26.4575 19.5241 24.8481 19.5241C24.3212 19.4977 23.7965 19.61 23.3265 19.8496C22.8564 20.0893 22.4574 20.448 22.1693 20.89H22.0952V19.7359H19.607V28.2064H22.254V23.7011C22.2157 23.2397 22.3611 22.7818 22.6585 22.427C22.9559 22.0721 23.3813 21.8489 23.8422 21.8059H23.9428C24.7846 21.8059 25.4093 22.3353 25.4093 23.6694V28.2064H28.0564L28.0775 23.0606Z"
                    fill="#3BFE7B"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="md:hidden block pt-5 ">
          <span className="text-[12px] font-regular text-white block text-opacity-30">
            Copyright © 2024 Thrive Trail Private Limited
          </span>
        </div>
      </div>
    </footer>
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
      className={` text-[#E3FFCC] text-sm font-medium uppercase tracking-wide hover:underline underline-offset-2 decoration-from-font ${
        disabled ? 'opacity-70  pointer-events-none touch-none' : ''
      }`}
    >
      {title}
    </a>
  )
}

/*


    <footer className=" min-h-[300px] lg:min-h-[200px] blade-top-padding blade-bottom-padding">
      <div className="w-container">
        <div className="gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
          <div className="gap-y-4 flex items-start gap-x-4 justify-between">
            <div className="grid place-content-start  ">
              <div className="grid place-content-start">
                <img
                  src={logo}
                  alt="logo for prosparity"
                  className="h-10 md:h-12 lg:h-14 w-full object-contain object-center"
                />
              </div>
              <div className="pt-8">
                <span className="text-sm font-medium text-white block text-opacity-30">
                  Copyright © 2024 Thrive Trail Private Limited
                </span>
              </div>
            </div>
            <div className="flex gap-x-10 gap-y-3 pt-6 md:gap-y-6 max-w-xl">
              <TextAnchor href="#products" title="Our products" />
              <TextAnchor href="#why-us" title="Why us" />
              <TextAnchor href="#teams" title="About us" />
              <TextAnchor href="#investors" title="Our Investors" />
            </div>
          </div>
          <div className=" flex items-center justify-end  gap-10 pt-2 ">
            <div className="flex gap-4 md:gap-6 xl:gap-8 items-center h-full 2xl:gap-10 ">
              <TextAnchor href="/privacy" title="Privacy" disabled />
              <TextAnchor href="/terms-and-conditions" title="Terms" disabled />
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/thrive-trail-private-limited/"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.22461"
                  y="1.35352"
                  width="41"
                  height="41"
                  rx="3.5"
                  fill="#0B373C"
                />
                <rect
                  x="1.22461"
                  y="1.35352"
                  width="41"
                  height="41"
                  rx="3.5"
                  stroke="#0B373C"
                />
                <path
                  d="M30.7246 14.177V29.53C30.7246 29.881 30.5852 30.2176 30.3369 30.4658C30.0887 30.7141 29.7521 30.8535 29.4011 30.8535H14.0481C13.6971 30.8535 13.3605 30.7141 13.1123 30.4658C12.864 30.2176 12.7246 29.881 12.7246 29.53V14.177C12.7246 13.826 12.864 13.4894 13.1123 13.2412C13.3605 12.993 13.6971 12.8535 14.0481 12.8535H29.4011C29.7521 12.8535 30.0887 12.993 30.3369 13.2412C30.5852 13.4894 30.7246 13.826 30.7246 14.177ZM18.0187 19.7359H15.3717V28.2064H18.0187V19.7359ZM18.257 16.8241C18.2584 16.6239 18.2203 16.4253 18.145 16.2398C18.0696 16.0543 17.9585 15.8854 17.8179 15.7429C17.6773 15.6003 17.51 15.4868 17.3255 15.4089C17.1411 15.331 16.9431 15.2902 16.7428 15.2888H16.6952C16.288 15.2888 15.8975 15.4506 15.6096 15.7385C15.3217 16.0264 15.1599 16.4169 15.1599 16.8241C15.1599 17.2313 15.3217 17.6218 15.6096 17.9097C15.8975 18.1976 16.288 18.3594 16.6952 18.3594C16.8954 18.3643 17.0947 18.3297 17.2816 18.2576C17.4684 18.1855 17.6393 18.0773 17.7843 17.9392C17.9293 17.801 18.0457 17.6356 18.1268 17.4525C18.2079 17.2693 18.2522 17.072 18.257 16.8718V16.8241ZM28.0775 23.0606C28.0775 20.5141 26.4575 19.5241 24.8481 19.5241C24.3212 19.4977 23.7965 19.61 23.3265 19.8496C22.8564 20.0893 22.4574 20.448 22.1693 20.89H22.0952V19.7359H19.607V28.2064H22.254V23.7011C22.2157 23.2397 22.3611 22.7818 22.6585 22.427C22.9559 22.0721 23.3813 21.8489 23.8422 21.8059H23.9428C24.7846 21.8059 25.4093 22.3353 25.4093 23.6694V28.2064H28.0564L28.0775 23.0606Z"
                  fill="#3BFE7B"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>



*/
