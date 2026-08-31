"use client";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

const ProyectoPage = () => {
    const [filtroCategory, setFiltroCategory] = useState('inactivo');

    const toggleUx = () => setFiltroCategory('ux');
    const toggleFrontend = () => setFiltroCategory('frontend');
    const toggleVideo = () => setFiltroCategory('video');

    console.log(filtroCategory);

    const isCategoryVisible = (...categories) => {
        if (filtroCategory === 'inactivo') return 'block';
        return categories.includes(filtroCategory) ? 'block' : 'hidden';
    };

    const isButtonActive = (category) => {
        if (filtroCategory === 'inactivo') return 'border';
        return filtroCategory === category ? 'border-4 bg-fondobtnmenu' : 'border';
    };

    return (
        <>
            <div className='container mx-auto px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-h1pagina mt-28 leading-none">Mira Mis Proyectos</h1>
                <div className='flex flex-row items-center border-b border-azulbrillante pb-[17px] mt-[12px]'>
                    <button onClick={toggleUx} className={`rounded-full border-colorborder font-Oswald font-normal text-[12px] sm:text-[22px] text-white p-1 w-[188px] mr-2 ${isButtonActive('ux')}`}>DISEÑO UX / UI</button>
                    <button onClick={toggleFrontend} className={`rounded-full border-colorborder font-Oswald font-normal text-[12px] sm:text-[22px] text-white p-1 w-[274px] mr-2 ${isButtonActive('frontend')}`}>DESARROLLO FRONTEND</button>
                    <button onClick={toggleVideo} className={`rounded-full border-colorborder font-Oswald font-normal text-[12px] sm:text-[22px] text-white p-1 w-[274px] mr-2 ${isButtonActive('video')}`}>VIDEOJUEGOS</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 pb-[70px] sm:pb-[0px]">
                    <div className={`mt-[44px] sm:mt-[90px] ${isCategoryVisible('frontend', 'ux')}`}>
                        <Image src="/asset/img/portadaMegaBook.png" alt="Aplicación móvil para fomentar los hábitos de lectura" width={1200} height={630} className="rounded-[20px] h-[330px] w-full object-cover" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">App MegaBook</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Diseño UX / UI, Frontend</span>
                            <div className="flex justify-between">
                                <Link href='/proyectos/megabook'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                            </div>
                        </div>
                    </div>
                    <div className={`mt-[44px] sm:mt-[90px] ${isCategoryVisible('frontend')}`}>
                        <Image src="/asset/img/portadaroverapp.png" alt="" width={1200} height={630} className="rounded-[20px] h-[330px] w-full object-cover" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Rover Photo App</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Frontend</span>
                            <div className="flex justify-between">
                                <Link href='/proyectos/roverphotoapp'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                            </div>
                        </div>
                    </div>
                    <div className={`mt-[90px] ${isCategoryVisible('ux')}`}>
                        <Image src="/asset/img/portadacomicapp.png" alt="portada comic app" width={1200} height={630} className="rounded-[20px] h-[330px] w-full object-cover" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Comic App</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Diseño UX / UI</span>
                            <div className="flex justify-between">
                                <Link href='/proyectos/comicapp'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                            </div>
                        </div>
                    </div>
                    <div className={`mt-[44px] sm:mt-[90px] ${isCategoryVisible('ux')}`}>
                        <Image src="/asset/img/portadatoomics.png" alt="" width={1200} height={630} className="rounded-[20px] h-[330px] w-full object-cover" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Rediseño App Toomics</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Diseño UX / UI</span>
                            <div className="flex justify-between">
                                <Link href='/proyectos/toomics'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                            </div>
                        </div>
                    </div>
                    <div className={`mt-[44px] sm:mt-[90px] ${isCategoryVisible('video')}`}>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="/asset/img/portadaodisyshoot.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Odisy Shoot</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Videojuegos</span>
                            <div className="flex justify-between">
                                <Link href='/proyectos/odisyshoot'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoPage;