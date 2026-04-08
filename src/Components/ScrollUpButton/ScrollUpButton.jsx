import React, { useState, useEffect } from 'react';

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Muestra el botón cuando el usuario hace scroll hacia abajo más de 400px
    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Hace que el scroll suba de forma suave
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        // Limpiamos el event listener
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="cursor-pointer hover:opacity-80 transition-opacity duration-300 focus:outline-none"
                    aria-label="Volver arriba"
                >
                    <img 
                        src="/asset/img/subir.svg" 
                        alt="Subir al inicio" 
                        className="w-[50px] h-[50px] drop-shadow-lg"
                    />
                </button>
            )}
        </div>
    );
};

export default ScrollUpButton;
