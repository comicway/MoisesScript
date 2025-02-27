import { useState, useEffect } from "react";

const SlidePage = () => {
    const [currentText, setCurrentText] = useState("Diseño UX/UI");
    const texts = ["Diseño UX/UI", "Frontend", "Videojuegos", "Paid Media"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(prevText => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 6000);

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <>
            <div className="container mx-auto px-2">
                <h2 className="font-bold font-Oswald uppercase text-naranjo mt-28 text-[70px] sm:text-h1pagina ">Necesitas ayuda con:</h2>
                <h1 className="font-Oswald text-azulbrillante text-[69px] border-b border-azulbrillante mb-6 w-[360px] sm:w-[580px] sm:text-h1pagina">{currentText}</h1>
                <span className="flex justify-center font-Oswald text-3xl text-letrablanca">ver cv</span>
                <div className="mx-auto w-55 mt-2">
                    <a href="#cv">
                        <img src="./asset/img/flechaabajo.svg" alt="flecha abajo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default SlidePage;