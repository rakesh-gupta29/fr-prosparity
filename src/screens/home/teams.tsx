import React, { Fragment, useEffect, useState } from 'react'

import saurabh from 'assets/saurabh.png'
import anni from 'assets/anni.png'
import { Dialog, Transition } from '@headlessui/react'

const members = [
  {
    name: 'Saurabh Khodke',
    designation: 'Co-Founder and CEO',
    coverImage: saurabh,
    desc: 'Saurabh is an MBA graduate from IIFM and boasts over 12 years of experience and currently holds positions as Co-Founder and CEO at both Northern Arc and Stashfin. His expertise lies in capital raising, strategic planning, and a deep understanding of vehicle and consumer lending domains.',
    profileURL:
      'https://www.linkedin.com/in/saurabh-khodke-80694240/?originalSubdomain=in',
  },
  {
    name: 'Anirudh Dhakar',
    designation: 'Co-Founder and COO',
    coverImage: anni,
    desc: 'Anirudh is an MBA alumnus from IIFM and brings over 12 years of experience to his roles as Co-Founder and COO at Northern Arc, SBI, and Stashfin. His core strengths include adeptly managing platforms and overseeing business tech operations.',
    profileURL: 'https://www.linkedin.com/in/anirudh-dhakar-78979a4b/',
  },
]

export default function TeamAndVision() {
  const [active, setActive] = useState(0)
  const changeTab = (update: number) => setActive(update)
  return (
    <>
      <div>
        <div className="grid px-3 text-center teams-wrapper  place-content-center blade-bottom-padding blade-top-padding-lg">
          <span className="text-3xl md:text-4xl 2xl:text-5xl title  font-medium text-transparent bg-clip-text ">
            Who we are
          </span>
        </div>
      </div>

      <div className="grid place-content-center">
        <div className="flex items-center gap-10">
          <Tab
            callback={() => changeTab(0)}
            active={active === 0}
            text="Our Team"
          />
          <Tab
            callback={() => changeTab(1)}
            active={active === 1}
            text="Our Mission & Vision"
          />
        </div>
      </div>
      {active === 0 ? <Teams /> : <Mission />}
    </>
  )
}

function Mission() {
  return (
    <div className="min-h-[300px] grid place-content-center text-center">
      <span className="text-2xl px-4  lg:text-3xl font-medium">
        Mission and Vision
      </span>
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
      } px-6 md:px-8  text-base md:text-lg 2xl:text-xl  py-1.5 md:py-2 rounded-full font-medium`}
    >
      {text}
    </button>
  )
}
function Teams() {
  const [modal, setModal] = useState(-1)
  const invokeModal = (index: number) => {
    console.log(index)
    setModal(index)
  }
  const closeModal = () => setModal(-1)

  useEffect(() => {
    console.log(modal)
  }, [modal])

  return (
    <>
      {modal !== -1 && (
        <Transition
          show={modal !== -1}
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
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel className=" max-w-[1380px] mx-auto modal-wrapper  md:rounded-[24px] lg:rounded-[30px] xl:rounded-[40px] w-full">
                  <div className="flex justify-end  pr-4 py-4 ">
                    <button
                      onClick={() => setModal(-1)}
                      type="button"
                      className="bg-black mt-1 stroke-white transition-all duration-300 ease-in-out grid place-content-center hover:bg-greenChip hover:stroke-black
                             aspect-square h-10 w-10 xl:h-12 xl:w-12 rounded-full "
                    >
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
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 min-h-[618px] max-h-[500px] overflow-auto  md:max-h-none p-6 w-full ">
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src={members[modal].coverImage}
                        alt={members[modal].name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-center  gap-x-6">
                          <div className="flex-1  pt-3 md:pt-4 lg:pt-6 flex flex-col justify-center">
                            <span className="member-name bg-clip-text text-transparent text-2xl md:text-3xl xl:text-4xl font-medium ">
                              {members[modal].name}
                            </span>
                            <span className="text-sm md:text-base xl:text-lg 2xl:text-xl font-normal text-black font-medium">
                              {members[modal].designation}
                            </span>
                          </div>
                          <button
                            onClick={() => setModal(-1)}
                            type="button"
                            className="bg-black mt-1 lg:block hidden stroke-white transition-all duration-300 ease-in-out grid place-content-center hover:bg-greenChip hover:stroke-black
                             aspect-square h-10 w-10 xl:h-12 xl:w-12 rounded-full "
                          >
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
                        <div className="max-w-md pt-4  md:pt-6">
                          <span className="text-sm md:text-base lg:text-lg xl:text-xl font-regular leading-normal block">
                            {members[modal].desc}
                          </span>
                        </div>
                      </div>

                      <div className="pt-8">
                        <a
                          target="_blank"
                          href={members[modal].profileURL}
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

                      <div className=" flex items-end justify-end pb-4 pr-4 flex-1">
                        <div className="flex-0 pb-0   flex items-end gap-5">
                          <button
                            onClick={() => {
                              setModal(0)
                            }}
                            type="button"
                            className="outline-none  focus-visible:outline-none rounded-full bg-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid border-darkGreen hover:stroke-white stroke-darkGreen transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center  h-12 w-12 md:w-16 md:h-16 aspect-square lg:h-20 lg:w-20"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="inherit"
                              className="w-6 h-6"
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
                              setModal(1)
                            }}
                            type="button"
                            className="outline-none  focus-visible:outline-none rounded-full bg-white focus-visible:stroke-white focus-visible:bg-darkGreen hover:bg-darkGreen border-1 border-solid border-darkGreen hover:stroke-white stroke-darkGreen transition-all duration-300 ease-in-out cursor-pointer grid place-content-center place-items-center  h-12 w-12 md:w-16 md:h-16 aspect-square lg:h-20 lg:w-20"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="inherit"
                              className="w-6 h-6 rotate-180"
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

      <div className="grid grid-cols-1  md:grid-cols-2 max-w-7xl gap-y-16 gap-x-8 md:gap-x-12 xl:gap-x-16 blade-top-padding-lg  blade-bottom-padding-lg  mx-auto px-3 ">
        {members.map((elem, index: number) => {
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
  elem: (typeof members)[0]
  callback: (index: number) => void
  index: number
}) {
  const { name, designation, coverImage } = elem
  return (
    <article className="member-card  max-w-[538px]  hover:border-opacity-100 transition-all duration-300 ease-in-out   mx-auto ">
      <div className="h-[360px] md:h-[400px] xl:h-[450px] 2xl:h-[540px] w-full hover:border-opacity-100 transition-all duration-300 ease-in-out hover:scale-[0.99] scale-100 border-2 border-solid border-gray border-opacity-0  rounded-xl  md:rounded-[24px] lg:rounded-[30px] xl:rounded-[40px] overflow-hidden">
        <img
          src={coverImage}
          className="w-full h-full object-top object-contain "
          alt={`${name} - team member of Prosparity`}
        />
      </div>
      <div className="flex items-center gap-x-3 pr-2 pt-4 md:pt-6  lg:pt-7 ">
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
              stroke-width="2.95673"
              stroke-linecap="round"
            />
            <path
              d="M2.03613 11.7864L22.8762 11.7864"
              stroke="inherit"
              stroke-width="2.95673"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </article>
  )
}
