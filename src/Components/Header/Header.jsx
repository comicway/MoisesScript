import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

const HeaderScript = () => {

    const [displayMenu, setDisplayMenu] = useState(false);
    const [isDivHidden,setIsDivHidden] = useState(false);

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu);
        setIsDivHidden(!isDivHidden);
    };
    
    return (
      <>
      <div className={`container mx-auto px-2 ${isDivHidden ? 'hidden' : ''}`}>
        <div className='grid gap-0 grid-cols-2 h-[60px] sm:grid-cols-3 sm:h-106'>
            <div className='flex items-center'>
                <Link to='/'>
                    <img src="./asset/img/logomoisesscript.svg" alt="logo moises.script" />
                </Link>  
            </div>
            <div className='sm:flex items-center justify-center hidden'>
                <p className='font-Oswald text-letrablanca text-titulopagina uppercase'>home y cv</p>
            </div>
            <div className='flex items-center justify-end'>
                <button className='h-7 w-55 bg-fondobtnmenu rounded-full border-4 border-colorborder hidden'>
                    <div className='h-18 w-18 bg-naranjo rounded-full'></div>
                </button>
                <button onClick={toggleMenu} className='h-7 w-41 bg-fondobtnmenu rounded-full border-4 border-colorborder ml-7px'>
                        <img src="./asset/img/lineasmenu.svg" alt="lineas menu" className='m-auto'/>
                </button>
            </div>
        </div>
      </div>
      {displayMenu && <Menu toggle={toggleMenu} />}
      </>
    )
};

export default HeaderScript