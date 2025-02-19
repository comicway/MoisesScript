import React from 'react'
import SlidePage from '../../Components/SlidePage/SlidePage'
import AboutMe from "../../Components/AboutMe/AboutMe"
import CvMoises from "../../Components/CvMoises/CvMoises"
import ProyectosRecientes from "../../Components/ProyectosRecientes/ProyectosRecientes"
import BlogRecientes from "../../Components/BlogRecientes/BlogRecientes"

const HomePage = () => {
    return (
        <>
            <SlidePage/>
            <AboutMe/>
            <CvMoises/>
            <ProyectosRecientes/>
            <BlogRecientes/>         
        </>
    )
}

export default HomePage


          