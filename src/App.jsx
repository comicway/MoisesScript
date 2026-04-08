import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
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
import MegaBook from './Components/ProyectoInterno/MegaBook'
import ArticuloInterno from './Components/ArticuloInterno/ArticuloInterno'
import NichoUx from './Components/ArticuloInterno/NichoUx'
import LandingPaidMedia from './Components/LandingPages/LandingPaidMedia'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import RoverPhotoApp from './Components/ProyectoInterno/RoverPhotoApp'
import NotFound from './Components/NotFound/NotFound'
import ScrollUpButton from './Components/ScrollUpButton/ScrollUpButton'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderScript />
        <Analytics />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/proyectos' element={<ProyectoPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/proyectointerno' element={<ProyectoInterno />} />
          <Route path='/comicapp' element={<ComicApp />} />
          <Route path='/toomics' element={<ToomicsApp />} />
          <Route path='/odisyshoot' element={<OdisyShoot />} />
          <Route path='/roverphotoapp' element={<RoverPhotoApp />} />
          <Route path='/megabook' element={<MegaBook />} />
          <Route path='/articulointerno' element={<ArticuloInterno />} />
          <Route path='/nichoux' element={<NichoUx />} />
          <Route path='/paidmedia' element={<LandingPaidMedia />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to="/404" replace />} />
        </Routes>
        <FooterScript />
        <ScrollUpButton />
      </BrowserRouter>
    </>
  )
}
export default App
