import { useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {

    const [filtroCategory, setFiltroCategory] = useState('inactivo');

    const toggleUx = () => setFiltroCategory('ux');
    const toggleFrontend = () => setFiltroCategory('frontend');
    const toggleVideo = () => setFiltroCategory('video');

    const isCategoryVisible = (category) => {
        if (filtroCategory === 'inactivo') return 'block';
        return filtroCategory === category ? 'block' : 'hidden';
    };
    
    const isButtonActive = (category) => {
        if (filtroCategory === 'inactivo') return 'border';
        return filtroCategory === category ? 'border-4 bg-fondobtnmenu' : 'border';
    };

    return (
        <>
            <div className='container mx-auto px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-h1pagina mt-28 leading-none">Lee mis artículos</h1>
                <div className='flex flex-row items-center border-b border-azulbrillante pb-[17px] mt-[10px]'>
                    <button onClick={toggleUx} className={`rounded-full border-colorborder font-Oswald font-normal text-[12px] sm:text-[22px] text-white p-1 w-[188px] mr-2 ${isButtonActive('ux')}`}>DISEÑO UX / UI</button>
                    <button onClick={toggleFrontend} className={`rounded-full border-colorborder font-Oswald font-normal text-[12px] sm:text-[22px] text-white p-1 w-[274px] mr-2 ${isButtonActive('frontend')}`}>DESARROLLO FRONTEND</button>
                    <button onClick={toggleVideo} className={`rounded-full border-colorborder font-Oswald font-normal text-[12px] sm:text-[22px] text-white p-1 w-[274px] mr-2 ${isButtonActive('video')}`}>VIDEOJUEGOS</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 pb-[70px] sm:pb-[0px]">
                    <div className={`mt-[90px] ${isCategoryVisible('ux')}`}>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/portadablognicho.jpg" alt="nicho diseño ux" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">El nicho: Claves para emprender como Diseñador UX/UI</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                            <div className="flex justify-between">
                            <Link to='/nichoux'>
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Leer blog</button>
                            </Link>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`mt-[44px] sm:mt-[90px] ${isCategoryVisible('frontend')}`}>
                        {/*
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Frontend</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                        */}
                    </div>
                    <div className={`mt-[44px] sm:mt-[90px] ${isCategoryVisible('video')}`}>
                        {/*
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Videojuegos</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage