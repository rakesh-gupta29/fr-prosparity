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

  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  )
}

export default App
