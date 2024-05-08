import React, { useEffect } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

const RenderRoutes = () => {
  const routeTree = useRoutes(routes())
  return routeTree
}

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  // useEffect(() => {
  //   function openHtmlInNewTab() {
  //     fetch('http://127.0.0.1:8000/api/v1/testing')
  //       .then((response) => response.text())
  //       .then((htmlContent) => {
  //         var newWindow = window.open() as any
  //         newWindow.document.write(htmlContent)
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error)
  //       })
  //   }
  //   openHtmlInNewTab()
  // }, [])
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  )
}

export default App
