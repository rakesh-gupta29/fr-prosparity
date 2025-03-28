import React, { Fragment, useEffect, useState } from 'react'

import saurabh from 'assets/saurabh.png'
import kanishk from 'assets/kanishk.png'
import jitedra from 'assets/Jitendra Sharma.png'
import hakam from 'assets/Hakam Dhakar.png'
import sunil from 'assets/Sunil Dubey.png'
import russel from 'assets/Russell Fernandez.png'
import rahulPandey from "assets/rahulPandey.jpg"

import anni from 'assets/anni.png'
import { Dialog, Transition } from '@headlessui/react'

const leadership = [
  {
    name: 'Saurabh Khodke',
    designation: 'Co-Founder and CEO',
    coverImage: saurabh,
    desc: 'Saurabh boasts over 12 years of expertise in origination, credit, and debt capital markets. During his tenure at Northern Arc Capital, he was instrumental in establishing the consumer lending asset class and leading the vehicle finance asset class. At ProsParity, Saurabh leads fundraising, finance, strategy, risk management, and overall organizational development, skillfully blending technology, consumer credit, and asset financing. He holds an MBA from IIFM-Bhopal.',
    profileURL:
      'https://www.linkedin.com/in/saurabh-khodke-80694240/?originalSubdomain=in',
  },
  {
    name: 'Anirudh Dhakar',
    designation: 'Co-Founder and COO',
    coverImage: anni,
    desc: 'Anirudh brings over a decade of experience to the table, having worked with SBI, Northern Arc Capital, and more. His expertise lies in crafting and scaling lending platforms harmonizing multiple stakeholders seamlessly, and maintaining high standards in processes, credit quality, and compliance. Known for his successful collaborations with various fintech lending firms, he excels in driving sales, credit, technology, and product strategies with finesse. Anirudh is focused on leading ProsParity towards becoming a top-tier lending platform in asset financing. Anirudh holds an MBA from IIFM-Bhopal.',
    profileURL: 'https://www.linkedin.com/in/anirudh-dhakar-78979a4b/',
  },
  {
    name: 'Hakam Singh Dhakar',
    designation: 'Co-Founder and Business Head',
    coverImage: hakam,
    desc: 'Hakam brings over 23 years of experience in sales, credit, and managerial roles across various financial institutions such as Mahindra, Sonalika, L&T Finance and Sundaram Finance. He was instrumental in setting up the Tractor & Agri-equipment financing vertical for Sundaram Finance in Chhattisgarh. At ProsParity, Hakam heads the 3-wheeler segment, managing the field team end-to-end from sourcing and underwriting to collections.',
    profileURL: 'https://www.linkedin.com/in/hakam-singh-dhakar-935bb9317/',
  },
  {
    name: 'Jitendra Sharma ',
    designation: 'Co-Founder and Business Head',
    coverImage: jitedra,
    desc: 'Jitendra brings over 18 years of experience from the credit & lending space where he oversaw sales and collections of various assets such as tractors, cars, SUVs, and LCVs during his time at firms such as Sundaram Finance, HDFC and Kotak Mahindra. He was instrumental in growing Sundaram Finance’s footprint in the commercial vehicle financing space in Madhya Pradesh from its early days. At ProsParity, Jitendra heads the 2-wheeler segment, managing the field team end-to-end from sourcing and underwriting to collections.',
    profileURL: 'https://www.linkedin.com/in/jitendra-sharma-256008318/',
  },
  {
    name: 'Kanishk Agarwal',
    designation: 'Founding Member',
    coverImage: kanishk,
    desc: 'Kanishk brings over 5 years of extensive experience in the financial services and consulting industry, having contributed significantly at TresVista Analytics, Stashfin, and Alstonia Impact. Throughout his career, he has worked closely with founders on key topics such as Investor Relations, Fund Raising, and M&A opportunities. As the first employee and a founding member of ProsParity, Kanishk plays a pivotal role in driving the company’s 0 to 1 journey, focusing on product development, strategic planning, fundraising, and operational execution.',
    profileURL:
      'https://www.linkedin.com/in/kanishk-agarwal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
]

const teams = [
  {
    name: 'Sunil Dubey',
    designation: 'State Head',
    coverImage: sunil,
    desc: 'Sunil brings over 20 years of experience in sales, business development, and managerial roles across various financial institutions such as Mahindra, Sundaram Finance, Chola and Hinduja Leyland Finance. Over the course of his career, he worked on various initiatives such as team building & management, business development, collections & recovery, etc. At ProsParity, Sunil is an area head and looks at business development.',
    profileURL: 'https://www.linkedin.com/in/sunil-dubey-aa121931a/',
  },
  {
    "name": "Rahul Pandey",
    "designation": "Lead, Credit Ops",
    "coverImage":rahulPandey,
    "desc": "Rahul brings deep expertise in credit and business operations, with a strong background in fintech and lending. Prior to joining ProsParity, he played a key role in co-lending operations at Stashfin, ensuring efficient execution and seamless partnerships. Before that, at BharatPe, he contributed to building and scaling lending finance, optimizing processes, and driving operational excellence.  As part of the Credit Ops team at ProsParity, Rahul is instrumental in driving the company's zero-to-one journey. He focuses on building and streamlining credit and business operations, ensuring compliance, efficiency, and innovation to create a scalable and robust financial\u00a0ecosystem.",
    "profileURL": null
  },
  {
    name: 'Russell Fernandez',
    designation: "Founder's Office",
    coverImage: russel,
    desc: 'Russell brings over 3 years of experience from the financial services industry. As part of the offshore extension to the London office of a European Investment Bank, he worked across various M&A transactions within the financial technology and services space, with an EV range of €100mn to €5bn. At ProsParity, Russell plays a key role in various areas such as product development, strategy, investor relations, IT, and HR amongst others.',
    profileURL: 'https://www.linkedin.com/in/russellfer/',
  },
]

export default function TeamAndVision() {
  const [active, setActive] = useState(0)

  return (
    <div className="pt-8">
      <div className="flex justify-center px-5 pt-3 md:pt-6 xl:pt-10 blade-bottom-padding-sm gap-4 md:gap-6 lg:gap-10">
        <Tab
          active={active === 0}
          callback={() => setActive(0)}
          text="Founding Team"
        />
        <Tab active={active === 1} callback={() => setActive(1)} text="Team" />
      </div>

      <div className="blade-bottom-padding-sm">
        {active === 1 ? <Teams /> : <Leadership />}
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
      } px-6 md:px-8   text-base md:text-lg 2xl:text-xl  py-1.5 md:py-2 rounded-full font-medium`}
    >
      {text}
    </button>
  )
}

function Leadership() {
  const [current, setCurrent] = useState(-1)

  const invokeModal = (index: number) => {
    setCurrent(index)
  }
  useEffect(() => {
    if (current !== -1) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'auto'
  }, [current])

  return (
    <>
      {current !== -1 && (
        <Transition
          show={current !== -1}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          as={Fragment}
        >
          <Dialog onClose={() => {}} className="relative z-50">
            <div className="fixed inset-0 bg-blueGreen" aria-hidden="true" />

            <div className="fixed inset-0 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center ">
                <Dialog.Panel className="  max-w-[500px] lg:max-w-[1380px] mx-auto modal-wrapper  rounded-xl md:rounded-[24px] lg:rounded-[30px] xl:rounded-[40px] w-11/12">
                  <div className="md:hidden flex justify-end pr-3 md:pr-4 pb-4 pt-2 md:py-4 ">
                    <button
                      onClick={() => setCurrent(-1)}
                      type="button"
                      className="bg-black mt-1 stroke-white transition-all duration-300 ease-in-out grid place-content-center hover:bg-greenChip hover:stroke-black
                             aspect-square  h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 rounded-full "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="inherit"
                        className="lg:w-6 h-4 md:h-5 w-4 md:w-5 lg:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex lg:flex-row flex-col   gap-y-2 md:gap-x-12  lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 overflow-auto  md:max-h-none p-3 md:p-4 lg:p-6 w-full ">
                    <div className="rounded-xl md:rounded-xl max-w-[550px] h-[300px] md:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[550px] xl:rounded-3xl overflow-hidden">
                      <img
                        src={leadership[current].coverImage}
                        alt={leadership[current].name}
                        className="h-full w-full object-cover object-right-top"
                      />
                    </div>
                    <div className="flex  flex-1  pr-10   flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-center  gap-x-6">
                          <div className="flex-1  pt-3 md:pt-4 lg:pt-6 flex flex-col justify-center">
                            <span className="member-name bg-clip-text text-transparent text-2xl md:text-3xl xl:text-4xl font-medium ">
                              {leadership[current].name}
                            </span>
                            <span className="text-sm md:text-base xl:text-lg 2xl:text-xl font-normal text-black font-medium">
                              {leadership[current].designation}
                            </span>
                          </div>
                          <button
                            onClick={() => setCurrent(-1)}
                            type="button"
                            className="bg-black mt-1 lg:grid  stroke-white transition-all duration-300 ease-in-out hidden place-content-center hover:bg-greenChip hover:stroke-black
                             aspect-square h-10 w-10 xl:h-12 xl:w-12 rounded-full "
                          >
                            <span className="sr-only">
                              click to move to next slide
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="inherit"
                              className="lg:w-6 h-5 md:h-5 w-5 md:w-5 lg:h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="max-w-lg pt-3  md:pt-6 ">
                          <span className="text-sm md:text-base lg:text-lg xl:text-base font-regular leading-normal block">
                            {leadership[current].desc}
                          </span>
                        </div>
                      </div>

                      <div className="pt-5 md:pt-7 xl:pt-7 2xl:pt-8">
                        <a
                          target="_blank"
                          href={leadership[current].profileURL}
                          className="bg-[#0B373C]  grid place-content-center rounded-md  lg:h-12 md:h-10 h-8 w-8 md:w-10 lg:w-12 xl:h-[54px] xl:w-[54px]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            className="h-5 md:h-6 lg:h-8 w-5 md:w-6 lg:w-8"
                            viewBox="0 0 31 31"
                            fill="none"
                          >
                            <path
                              d="M26.8954 5.83004V25.2234C26.8954 25.6668 26.7194 26.0919 26.4057 26.4055C26.0922 26.7191 25.667 26.8952 25.2236 26.8952H5.83029C5.38689 26.8952 4.96164 26.7191 4.64811 26.4055C4.33458 26.0919 4.15845 25.6668 4.15845 25.2234V5.83004C4.15845 5.38664 4.33458 4.9614 4.64811 4.64787C4.96164 4.33434 5.38689 4.1582 5.83029 4.1582H25.2236C25.667 4.1582 26.0922 4.33434 26.4057 4.64787C26.7194 4.9614 26.8954 5.38664 26.8954 5.83004ZM10.8458 12.8518H7.50212V23.5515H10.8458V12.8518ZM11.1467 9.17372C11.1485 8.92079 11.1004 8.67001 11.0052 8.43566C10.9101 8.20132 10.7697 7.98801 10.5921 7.80793C10.4145 7.62784 10.2032 7.4845 9.97016 7.3861C9.73717 7.28768 9.48706 7.23613 9.23415 7.23438H9.17396C8.65961 7.23438 8.16635 7.43871 7.80264 7.8024C7.43895 8.1661 7.23462 8.65937 7.23462 9.17372C7.23462 9.68805 7.43895 10.1813 7.80264 10.545C8.16635 10.9087 8.65961 11.113 9.17396 11.113C9.4269 11.1193 9.67858 11.0756 9.91464 10.9845C10.1507 10.8934 10.3665 10.7567 10.5497 10.5822C10.7329 10.4077 10.8799 10.1988 10.9824 9.96747C11.0848 9.73612 11.1407 9.48684 11.1467 9.23391V9.17372ZM23.5517 17.0515C23.5517 13.8348 21.5054 12.5843 19.4724 12.5843C18.8069 12.5509 18.1441 12.6927 17.5504 12.9954C16.9566 13.2982 16.4526 13.7513 16.0887 14.3096H15.9951V12.8518H12.852V23.5515H16.1957V17.8605C16.1473 17.2777 16.3309 16.6993 16.7066 16.2511C17.0823 15.8028 17.6196 15.5209 18.2018 15.4666H18.3289C19.3922 15.4666 20.1813 16.1353 20.1813 17.8205V23.5515H23.5251L23.5517 17.0515Z"
                              fill="#E3FFCC"
                            />
                          </svg>
                        </a>
                      </div>

                      <div className=" flex-1 ml-auto  md:max-w-[220px] flex items-end justify-end pb-4 pr-1">
                        <div className="flex-0 pb-0 flex items-end gap-3 md:gap-4 lg:gap-5">
                          <button
                            onClick={() => {
                              setCurrent((prev) => Math.max(0, prev - 1))
                            }}
                            type="button"
                            className="outline-none  focus-visible:outline-none rounded-full bg-[#004345] border-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid  hover:stroke-white stroke-white transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center   h-10 w-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16  disabled:hover:bg-[#004345] 2xl:w-[72px] 2xl:h-[72px] aspect-square disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">
                              click to move to prev slide
                            </span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="inherit"
                              className="w-4 md:w-5 lg:w-6 h-4 md:h-4  lg:h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => {
                              setCurrent((prev) =>
                                Math.min(prev + 1, leadership.length - 1),
                              )
                            }}
                            type="button"
                            className="outline-none   focus-visible:outline-none rounded-full bg-[#004345] border-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid  hover:stroke-white stroke-white transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center   h-10 w-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16  disabled:hover:bg-[#004345] 2xl:w-[72px] 2xl:h-[72px] aspect-square disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">
                              click to move to next slide
                            </span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="inherit"
                              className="w-4 md:w-5 lg:w-6 h-4 md:h-4  lg:h-6 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}

      <div className="grid grid-cols-1  md:grid-cols-2 max-w-7xl w-11/12  gap-y-16 gap-x-8 md:gap-x-12 xl:gap-x-10 blade-top-padding  mx-auto px-3 ">
        {leadership.map((elem, index: number) => {
          return (
            <Card
              index={index}
              callback={() => invokeModal(index)}
              elem={elem}
              key={`${index}`}
            />
          )
        })}
      </div>
    </>
  )
}

function Teams() {
  const [current, setCurrent] = useState(-1)

  const invokeModal = (index: number) => {
    setCurrent(index)
  }
  useEffect(() => {
    if (current !== -1) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'auto'
  }, [current])

  return (
    <>
      {current !== -1 && (
        <Transition
          show={current !== -1}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          as={Fragment}
        >
          <Dialog onClose={() => {}} className="relative z-50">
            <div className="fixed inset-0 bg-blueGreen" aria-hidden="true" />

            <div className="fixed inset-0 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center ">
                <Dialog.Panel className="  max-w-[500px] lg:max-w-[1380px] mx-auto modal-wrapper  rounded-xl md:rounded-[24px] lg:rounded-[30px] xl:rounded-[40px] w-11/12">
                  <div className="md:hidden flex justify-end pr-3 md:pr-4 pb-4 pt-2 md:py-4 ">
                    <button
                      onClick={() => setCurrent(-1)}
                      type="button"
                      className="bg-black mt-1 stroke-white transition-all duration-300 ease-in-out grid place-content-center hover:bg-greenChip hover:stroke-black
                             aspect-square  h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 rounded-full "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="inherit"
                        className="lg:w-6 h-4 md:h-5 w-4 md:w-5 lg:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex lg:flex-row flex-col   gap-y-2 md:gap-x-12  lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 overflow-auto  md:max-h-none p-3 md:p-4 lg:p-6 w-full ">
                    <div className="rounded-xl md:rounded-xl max-w-[550px] h-[300px] md:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[550px] xl:rounded-3xl overflow-hidden">
                      <img
                        src={teams[current].coverImage}
                        alt={teams[current].name}
                        className="h-full w-full object-cover object-right-top"
                      />
                    </div>
                    <div className="flex  flex-1  pr-10   flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-center  gap-x-6">
                          <div className="flex-1  pt-3 md:pt-4 lg:pt-6 flex flex-col justify-center">
                            <span className="member-name bg-clip-text text-transparent text-2xl md:text-3xl xl:text-4xl font-medium ">
                              {teams[current].name}
                            </span>
                            <span className="text-sm md:text-base xl:text-lg 2xl:text-xl font-normal text-black font-medium">
                              {teams[current].designation}
                            </span>
                          </div>
                          <button
                            onClick={() => setCurrent(-1)}
                            type="button"
                            className="bg-black mt-1 lg:grid  stroke-white transition-all duration-300 ease-in-out hidden place-content-center hover:bg-greenChip hover:stroke-black
                             aspect-square h-10 w-10 xl:h-12 xl:w-12 rounded-full "
                          >
                            <span className="sr-only">
                              click to move to next slide
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="inherit"
                              className="lg:w-6 h-5 md:h-5 w-5 md:w-5 lg:h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="max-w-lg pt-3  md:pt-6 ">
                          <span className="text-sm md:text-base lg:text-lg xl:text-base font-regular leading-normal block">
                            {teams[current].desc}
                          </span>
                        </div>
                      </div>

                      <div className="pt-5 md:pt-7 xl:pt-7 2xl:pt-8">
                        <a
                          target="_blank"
                          href={teams[current].profileURL}
                          className="bg-[#0B373C]  grid place-content-center rounded-md  lg:h-12 md:h-10 h-8 w-8 md:w-10 lg:w-12 xl:h-[54px] xl:w-[54px]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            className="h-5 md:h-6 lg:h-8 w-5 md:w-6 lg:w-8"
                            viewBox="0 0 31 31"
                            fill="none"
                          >
                            <path
                              d="M26.8954 5.83004V25.2234C26.8954 25.6668 26.7194 26.0919 26.4057 26.4055C26.0922 26.7191 25.667 26.8952 25.2236 26.8952H5.83029C5.38689 26.8952 4.96164 26.7191 4.64811 26.4055C4.33458 26.0919 4.15845 25.6668 4.15845 25.2234V5.83004C4.15845 5.38664 4.33458 4.9614 4.64811 4.64787C4.96164 4.33434 5.38689 4.1582 5.83029 4.1582H25.2236C25.667 4.1582 26.0922 4.33434 26.4057 4.64787C26.7194 4.9614 26.8954 5.38664 26.8954 5.83004ZM10.8458 12.8518H7.50212V23.5515H10.8458V12.8518ZM11.1467 9.17372C11.1485 8.92079 11.1004 8.67001 11.0052 8.43566C10.9101 8.20132 10.7697 7.98801 10.5921 7.80793C10.4145 7.62784 10.2032 7.4845 9.97016 7.3861C9.73717 7.28768 9.48706 7.23613 9.23415 7.23438H9.17396C8.65961 7.23438 8.16635 7.43871 7.80264 7.8024C7.43895 8.1661 7.23462 8.65937 7.23462 9.17372C7.23462 9.68805 7.43895 10.1813 7.80264 10.545C8.16635 10.9087 8.65961 11.113 9.17396 11.113C9.4269 11.1193 9.67858 11.0756 9.91464 10.9845C10.1507 10.8934 10.3665 10.7567 10.5497 10.5822C10.7329 10.4077 10.8799 10.1988 10.9824 9.96747C11.0848 9.73612 11.1407 9.48684 11.1467 9.23391V9.17372ZM23.5517 17.0515C23.5517 13.8348 21.5054 12.5843 19.4724 12.5843C18.8069 12.5509 18.1441 12.6927 17.5504 12.9954C16.9566 13.2982 16.4526 13.7513 16.0887 14.3096H15.9951V12.8518H12.852V23.5515H16.1957V17.8605C16.1473 17.2777 16.3309 16.6993 16.7066 16.2511C17.0823 15.8028 17.6196 15.5209 18.2018 15.4666H18.3289C19.3922 15.4666 20.1813 16.1353 20.1813 17.8205V23.5515H23.5251L23.5517 17.0515Z"
                              fill="#E3FFCC"
                            />
                          </svg>
                        </a>
                      </div>

                      <div className=" flex-1 ml-auto  md:max-w-[220px] flex items-end justify-end pb-4 pr-1">
                        <div className="flex-0 pb-0 flex items-end gap-3 md:gap-4 lg:gap-5">
                          <button
                            onClick={() => {
                              setCurrent((prev) => Math.max(0, prev - 1))
                            }}
                            type="button"
                            className="outline-none  focus-visible:outline-none rounded-full bg-[#004345] border-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid  hover:stroke-white stroke-white transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center   h-10 w-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16  disabled:hover:bg-[#004345] 2xl:w-[72px] 2xl:h-[72px] aspect-square disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">
                              click to move to prev slide
                            </span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="inherit"
                              className="w-4 md:w-5 lg:w-6 h-4 md:h-4  lg:h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => {
                              setCurrent((prev) =>
                                Math.min(prev + 1, teams.length - 1),
                              )
                            }}
                            type="button"
                            className="outline-none   focus-visible:outline-none rounded-full bg-[#004345] border-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid  hover:stroke-white stroke-white transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center   h-10 w-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16  disabled:hover:bg-[#004345] 2xl:w-[72px] 2xl:h-[72px] aspect-square disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            <span className="sr-only">
                              click to move to next slide
                            </span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="inherit"
                              className="w-4 md:w-5 lg:w-6 h-4 md:h-4  lg:h-6 rotate-180"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}

      <div className="grid grid-cols-1  md:grid-cols-2 max-w-7xl gap-y-16 gap-x-8 md:gap-x-12 xl:gap-x-10 blade-top-padding  mx-auto px-3 ">
        {teams.map((elem, index: number) => {
          return (
            <Card
              index={index}
              callback={() => invokeModal(index)}
              elem={elem}
              key={`${index}`}
            />
          )
        })}
      </div>
    </>
  )
}

function Card({
  elem,
  callback,
  index,
}: {
  elem: (typeof leadership)[0]
  callback: (index: number) => void
  index: number
}) {
  const { name, designation, coverImage } = elem
  return (
    <article className="member-card   max-w-[538px]  hover:border-opacity-100 transition-all duration-300 ease-in-out   mx-auto ">
      <div
        onClick={() => callback(index)}
        className=" cursor-pointer h-[360px]  md:h-[400px] xl:h-[450px] 2xl:h-[540px] w-full hover:border-opacity-100 transition-all 
      duration-300 ease-in-out hover:scale-[0.99] scale-100 border-2 border-solid border-gray border-opacity-0  
      rounded-xl  md:rounded-[24px] lg:rounded-[30px] xl:rounded-[40px] overflow-hidden"
      >
        <img
          src={coverImage}
          className="w-full h-full object-top object-cover "
          alt={`${name} - team member of Prosparity`}
        />
      </div>
      <div className="flex items-center gap-x-3 pr-2 pt-3  md:pt-4  lg:pt-5 ">
        <div className="grid  gap-px flex-1 ">
          <span className="name bg-clip-text text-transparent text-xl md:text-2xl xl:text-3xl font-medium ">
            {name}
          </span>
          <span className="text-sm md:text-base xl:text-lg 2xl:text-xl font-normal text-black font-medium">
            {designation}
          </span>
        </div>
        <button
          onClick={() => callback(index)}
          type="button"
          className="bg-black stroke-white transition-all duration-300 ease-in-out grid place-content-center hover:bg-greenChip hover:stroke-black aspect-square md:h-10 md:w-10 h-8 w-8  lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9971 1.9082L12.9971 22.7482"
              stroke="inherit"
              strokeWidth="2.95673"
              strokeLinecap="round"
            />
            <path
              d="M2.03613 11.7864L22.8762 11.7864"
              stroke="inherit"
              strokeWidth="2.95673"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </article>
  )
}
