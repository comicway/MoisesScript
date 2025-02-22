import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderScript from "./Components/Header/Header"
import FooterScript from "./Components/Footer/Footer"
import ProyectoPage from "./Components/Proyectos/Proyectos"
import BlogPage from './Components/Blog/Blog'
import HomePage from "./Components/Home/Home"
import Contacto from "./Components/Contacto/Contacto"
import ProyectoInterno from './Components/ProyectoInterno/ProyectoInterno'
import ArticuloInterno from './Components/ArticuloInterno/ArticuloInterno'
import Menu from './Components/Menu/Menu'

function App() {
  return (
    <>
      <BrowserRouter>
         <HeaderScript/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/proyectos' element={<ProyectoPage/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/proyectointerno' element={<ProyectoInterno/>} />
          <Route path='/articulointerno' element={<ArticuloInterno/>} />
          <Route path='/menu' element={<Menu/>} />
        </Routes>
        <FooterScript/>
      </BrowserRouter>
    </>
  )
}
export default App
