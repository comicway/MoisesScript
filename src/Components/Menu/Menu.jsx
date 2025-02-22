import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ toggle }) => { 

    return (
        <>
            <div className="bg-[#D96E11] h-[800px] sm:h-screen px-2">
                <div className="container mx-auto">
                    <div className='grid gap-0 gird-cols-1 h-[112px]'>
                        <div className="flex items-center">
                            <Link to='/'>
                                <img src="./asset/img/logomoisesscript_blanco.svg" alt="logo moises.script" />
                            </Link>
                            <button onClick={toggle} className='ml-auto'>
                                <img src="./asset/img/cerrarmenu.svg" alt="lineas menu" className='m-auto'/>
                            </button>
                        </div>
                    </div>
                    <div className='grid gap-0 grid-cols-1 sm:grid-cols-2 h-[calc(100vh-112px)]'>
                          <div className='flex items-start'>
                            <nav className='w-full'>
                                <ul className='text-white text-[58px] sm:text-[94px] font-Oswald uppercase'>
                                    <li className='mb-[3px] font-bold'><Link onClick={toggle} to="/">home y cv</Link></li>
                                    <li className='mb-[3px] font-light'><Link onClick={toggle} to="/proyectos">proyectos</Link></li>
                                    <li className='mb-[3px] font-light'><Link onClick={toggle} to="/blog">blog</Link></li>
                                    <li className='font-light'><Link onClick={toggle} to="/contacto">contacto</Link></li>
                                </ul>
                            </nav>
                          </div>
                          <div className='flex flex-col items-end justify-end pb-16'>
                            <h4 className="text-white font-Oswald font-bold text-[20px] mb-6">Contacto</h4>
                            <ul className="text-right text-white font-Inter font-normal text-[16px] leading-loose">
                                <li><a href="tel:+56977658072">+56 9 7765 8072</a></li>
                                <li><a href="mailto:moiselias7@gmail.com">moiselias7@gmail.com</a></li>
                                <li>Quinta Normal</li>
                                <li><a href="http://github.com/comicway">github.com/comicway</a></li>
                            </ul>
                            <div className="flex mt-[36px] gap-3">
                                <a href="http://"><img src="./asset/img/ico-github.svg" alt="GitHub" /></a>
                                <a href="http://"><img src="./asset/img/ico-instagram.svg" alt="Instagram" /></a>
                                <a href="http://"><img src="./asset/img/ico-threads.svg" alt="Threads" /></a>
                            </div>
                          </div>
                    </div>
                </div>
            </div>   
        </>
    )
};

export default Menu