const AboutMe = () => {
    return (
        <>
            <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-5 mt-24">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                        <div className="p-5">
                            <img src="./asset/img/moisescontreras.png" alt="" />
                        </div>
                        <div className="p-5 sm:col-span-3">
                            <p className="font-Inter text-letrablanca text-lg mb-4">Desde el 2011, he diseñado páginas web para diversos mercados, como tecnología, salud y entretenimiento. Mi especialidad es el diseño UI y la maquetación frontend, utilizando diversas tecnologías; React JS, Tailwindcss, Bootstrap y Material Design.</p>
                            <p className="font-Inter text-letrablanca text-lg mb-4">En los últimos años, me he centrado en el comercio electrónico, gestionando grandes sitios web en Wordpress y Shopify. Además, he aplicado metodologías como Lean UX, Sprint, Design Thinking y Growth Marketing, transformando mis proyectos digitales de manera positiva y rentable.</p>
                            <p className="font-Inter text-letrablanca text-lg mb-4">Me considero un apasionado del diseño de interfaces gráficas centradas en el usuario, sin descuidar los objetivos de la organización. Soy una persona tranquila y paciente, dispuesto a ayudar en lo que necesites.</p>
                            <p className="font-Inter text-letrablanca text-lg">Te invito a revisar mi currículum y, posteriormente, explorar mi portafolio con mis proyectos más impactantes y recientes.</p>
                            <button className="w-full mt-5">
                                <div className="flex flex-row justify-end w-full">
                                    <img src="./asset/img/descargar.svg" alt="" />
                                    <a href="./asset/img/CvMar2025MoisesContreras-UX-UI.pdf" target="_blank">
                                        <span className="font-Inter font-bold text-letrablanca text-18 ml-2.5">Descargar CV</span>
                                    </a>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default AboutMe