import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderScript = () => {

    useEffect(() => {
        return () => {
            console.log('Componente desmontado');
        };
    }, []);
    
    return (
      <>
      <div className='container mx-auto'>
        <div className='grid gap-0 grid-cols-2 sm:grid-cols-3 h-106'>
            <div className='flex items-center'>
                <Link to='/'>
                    <img src="./asset/img/logomoisesscript.svg" alt="logo moises.script" />
                </Link>  
            </div>
            <div className='flex items-center justify-center'>
                <p className='font-Oswald text-letrablanca text-titulopagina uppercase'>home y cv</p>
            </div>
            <div className='flex items-center justify-end'>
                <button className='h-7 w-55 bg-fondobtnmenu rounded-full border-4 border-colorborder'>
                    <div className='h-18 w-18 bg-naranjo rounded-full'></div>
                </button>
                <button className='h-7 w-41 bg-fondobtnmenu rounded-full border-4 border-colorborder ml-7px'>
                        <img src="./asset/img/lineasmenu.svg" alt="lineas menu" className='m-auto'/>
                </button>
            </div>
        </div>
      </div>
       {/*MENU USANDO FLEX*/}
       {/* <div className="flex flex-row">
            <div className="basis-1/4">
            <Link to="/">
                <button className="bg-sky-700 w-72 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">HOME</button>
            </Link>
            </div>
            <div className="basis-1/4">
            <Link to="/proyectos">
                <button className="bg-sky-700 w-72 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">PROYECTOS</button>
            </Link>   
            </div>
            <div className="basis-1/4">
            <Link to="/blog">
                <button className="bg-sky-700 w-72 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">BLOG</button>
            </Link> 
            </div>
            <div className="basis-1/4">
            <Link to="/contacto">
                <button className="bg-sky-700 w-72 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">CONTACTO</button>
            </Link> 
            </div>
        </div>*/}
      </>
    )
};

export default HeaderScript