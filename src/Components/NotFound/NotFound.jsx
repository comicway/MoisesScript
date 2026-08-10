import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="container mx-auto px-4 mt-20 mb-20 text-center flex flex-col items-center justify-center min-h-[50vh]">
            <h1 className="font-bold font-Oswald uppercase text-naranjo text-[50px] sm:text-[70px] leading-none mb-6">Página no encontrada</h1>
            <p className="font-Inter text-white text-[20px] mb-8">Lo sentimos, la página que buscas no existe o fue movida.</p>
            <Link href="/">
                <button className="border-azulbrillante border text-white font-bold font-Inter text-[18px] px-8 py-3 hover:bg-opacity-80 transition duration-300">
                    Volver al inicio
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
