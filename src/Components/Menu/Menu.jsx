"use client";
import React from 'react';
import Link from 'next/link';

const Menu = ({ toggle }) => {

    return (
        <>
            <div className="bg-[#D96E11] h-[800px] sm:h-screen px-2">
                <div className="container mx-auto">
                    <div className='grid gap-0 gird-cols-1 h-[112px]'>
                        <div className="flex items-center">
                            <Link href='/'>
                                <img src="/asset/img/logomoisesscript_blanco.svg" alt="logo moises.script" width="200" height="40" />
                            </Link>
                            <button onClick={toggle} className='ml-auto'>
                                <img src="/asset/img/cerrarmenu.svg" alt="lineas menu" className='m-auto' width="30" height="30" />
                            </button>
                        </div>
                    </div>
                    <div className='grid gap-0 grid-cols-1 sm:grid-cols-2 h-[calc(100vh-112px)]'>
                        <div className='flex items-start'>
                            <nav className='w-full'>
                                <ul className='text-white text-[58px] sm:text-[94px] font-Oswald uppercase'>
                                    <li className='mb-[3px] font-bold'><Link onClick={toggle} href="/">home y cv</Link></li>
                                    <li className='mb-[3px] font-light'><Link onClick={toggle} href="/proyectos">proyectos</Link></li>
                                    <li className='mb-[3px] font-light'><Link onClick={toggle} href="/blog">blog</Link></li>
                                    <li className='font-light'><Link onClick={toggle} href="/contacto">contacto</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='flex flex-col items-end justify-end pb-16'>
                            <h4 className="text-white font-Oswald font-bold text-[20px] mb-6">Contacto</h4>
                            <ul className="text-right text-white font-Inter font-normal text-[16px] leading-loose">
                                <li><a href="tel:+56977658072">+56 9 77 65 80 72</a></li>
                                <li><a href="mailto:moiselias7@gmail.com">moiselias7@gmail.com</a></li>
                                <li>Santiago Centro</li>
                                <li><a href="http://github.com/comicway">github.com/comicway</a></li>
                            </ul>
                            <div className="flex mt-[36px] gap-3">
                                <a href="https://github.com/comicway" target="blank"><img src="/asset/img/ico-github.svg" alt="GitHub" width="24" height="24" /></a>
                                <a href="https://www.instagram.com/moises_script/" target="blank"><img src="/asset/img/ico-instagram.svg" alt="Instagram" width="24" height="24" /></a>
                                <a href="https://www.threads.net/@moises_script" target="blank"><img src="/asset/img/ico-threads.svg" alt="Threads" width="24" height="24" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Menu