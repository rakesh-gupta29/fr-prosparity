import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  PageHome,
  PageError404,
  PageAbout,
  PageContact,
  PageTermsAndConditions,
  PagePrivacyPolicy,
} from 'screens/index'
import { Header, Footer } from 'organisms'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ViewWithHeaderAndFooter() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default function routes() {
  return [
    {
      path: '/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '/',
          element: <PageHome />,
        },

        {
          path: '/terms-and-conditions',
          element: <PageTermsAndConditions />,
        },
        {
          path: '/privacy-policy',
          element: <PagePrivacyPolicy />,
        },
        {
          path: '*',
          element: <PageError404 />,
        },
      ],
    },
  ]
}
