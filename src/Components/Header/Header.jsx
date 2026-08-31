"use client";

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from '../Menu/Menu';

const HeaderScript = () => {

    const [displayMenu, setDisplayMenu] = useState(false);
    const [isDivHidden,setIsDivHidden] = useState(false);

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu);
        setIsDivHidden(!isDivHidden);
    };

    const pathname = usePathname() || '/';
    const nombreTitulo = pathname === '/' ? 'home y cv' : pathname.split('/').pop();

    return (
      <>
      <div className={`container mx-auto px-4 ${isDivHidden ? 'hidden' : ''}`}>
        <div className='grid gap-0 grid-cols-2 h-[60px] sm:grid-cols-3 sm:h-106'>
            <div className='flex items-center'>
                <Link href='/'>
                    <img src="/asset/img/logomoisesscript.svg" alt="logo moises.script" width="200" height="40" />
                </Link>
            </div>
            <div className='sm:flex items-center justify-center hidden'>
                <p className='font-Oswald text-letrablanca text-titulopagina uppercase'>{nombreTitulo}</p>
            </div>
            <div className='flex items-center justify-end'>
                <button className='h-7 w-55 bg-fondobtnmenu rounded-full border-4 border-colorborder hidden'>
                    <div className='h-18 w-18 bg-naranjo rounded-full'></div>
                </button>
                <button onClick={toggleMenu}>
                        <img src="/asset/img/lineasmenu.svg" alt="lineas menu" className='m-auto'width="30" height="30" />
                </button>
            </div>
        </div>
      </div>
      {displayMenu && <Menu toggle={toggleMenu} />}
      </>
    )
};

export default HeaderScript
