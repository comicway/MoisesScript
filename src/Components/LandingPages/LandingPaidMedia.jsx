import { useState, useEffect } from "react";

const LandingPaidMedia = () => {
    const [currentText, setCurrentText] = useState("Google Ads");
    const texts = ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(prevText => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 3000);

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <>
            <div className="container mx-auto px-2">
                <h2 className="font-bold font-Oswald uppercase text-naranjo mt-28 text-[70px] sm:text-h1pagina ">Necesitas ayuda con:</h2>
                <h1 className="font-Oswald text-azulbrillante text-[69px] border-b border-azulbrillante mb-6 w-[360px] sm:w-[580px] sm:text-h1pagina">{currentText}</h1>
            </div>
        </>
    )
}
export default LandingPaidMedia;