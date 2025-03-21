import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderScript from "./Components/Header/Header"
import FooterScript from "./Components/Footer/Footer"
import ProyectoPage from "./Components/Proyectos/Proyectos"
import BlogPage from './Components/Blog/Blog'
import HomePage from "./Components/Home/Home"
import Contacto from "./Components/Contacto/Contacto"
import ProyectoInterno from './Components/ProyectoInterno/ProyectoInterno'
import ComicApp from './Components/ProyectoInterno/ComicApp'
import ToomicsApp from './Components/ProyectoInterno/ToomicsApp'
import OdisyShoot from './Components/ProyectoInterno/OdisyShoot'
import ArticuloInterno from './Components/ArticuloInterno/ArticuloInterno'
import NichoUx from './Components/ArticuloInterno/NichoUx'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
          <HeaderScript/>
          <Analytics/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/proyectos' element={<ProyectoPage/>} />
            <Route path='/blog' element={<BlogPage/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/proyectointerno' element={<ProyectoInterno/>} />
            <Route path='/comicapp' element={<ComicApp/>} />
            <Route path='/toomics' element={<ToomicsApp/>} />
            <Route path='/odisyshoot' element={<OdisyShoot/>} />
            <Route path='/articulointerno' element={<ArticuloInterno/>} />
            <Route path='/nichoux' element={<NichoUx/>} />
          </Routes>
          <FooterScript/>
      </BrowserRouter>
    </>
  )
}
export default App
