import { useState } from "react";

const CvMoises = () => {
    const [visibleSection, setVisibleSection] = useState('laboral');

    const toggleEstudios = () => {
        setVisibleSection('estudios');
    };

    const toggleLaboral = () => {
        setVisibleSection('laboral');
    };

    return (
        <>
            <section className="container mx-auto mt-94" id="cv">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <div className="px-5">
                        <div className="bg-gradient-to-tr from-[#456173] to-[#45617379] py-7 pl-11 border-b-4 border-azulbrillante">
                            <p className="font-Inter font-bold text-letrablanca text-xl mb-1">Moises Contreras</p>
                            <p className="font-Inter font-extralight text-letrablanca text-xl mb-1">
                                <a href="tel:+56977658072">+56 9 7765 8072</a>
                            </p>
                            <p className="font-Inter font-extralight text-letrablanca text-xl mb-1">
                                <a href="mailto:moiselias7@gmail.com">moiselias7@gmail.com</a>
                            </p>
                            <p className="font-Inter font-extralight text-letrablanca text-xl mb-1">
                                <a href="http://github.com/comicway">github.com/comicway</a>
                            </p>
                            <p className="font-Inter font-extralight text-letrablanca text-xl">Santiago Centro</p>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white border-azulbrillante border-2 border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                                <h3 className="font-bold font-Oswald text-[27px]">Programación</h3>
                                <p className="mt-6 font-bold font-Oswald text-[22px]">React Js</p>
                                <p className="font-light font-Oswald text-[17px]">(2024 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">JavaScript</p>
                                <p className="font-light font-Oswald text-[17px]">(2023 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">Tailwind CSS</p>
                                <p className="font-light font-Oswald text-[17px]">(2024 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">Wordpress</p>
                                <p className="font-light font-Oswald text-[17px]">(2023 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">CSS</p>
                                <p className="font-light font-Oswald text-[17px]">(2012 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">HTML</p>
                                <p className="font-light font-Oswald text-[17px]">(2012 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">C#</p>
                                <p className="font-light font-Oswald text-[17px]">(2023 - 2024)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">UNITY</p>
                                <p className="font-light font-Oswald text-[17px]">(2023 - 2024)</p>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white border-azulbrillante border-2 border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                                <h3 className="font-bold font-Oswald text-[27px]">Diseño UX / UI</h3>
                                <p className="mt-6 font-bold font-Oswald text-[22px]">Figma</p>
                                <p className="font-light font-Oswald text-[17px]">(2020 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">Maze</p>
                                <p className="font-light font-Oswald text-[17px]">(2022 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">Hotjar</p>
                                <p className="font-light font-Oswald text-[17px]">(2022 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">Optimal Workshop</p>
                                <p className="font-light font-Oswald text-[17px]">(2022 - ACTUAL)</p>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white border-azulbrillante border-2 border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                                <h3 className="font-bold font-Oswald text-[27px]">Intereses</h3>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="./asset/img/iconocine.svg" alt="Icono de cine" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Cine</p>
                                        <p className="font-light font-Oswald text-[17px]">Ciencia ficción e intriga</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="./asset/img/iconofotografia.svg" alt="Icono de fotografia" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Fotografía</p>
                                        <p className="font-light font-Oswald text-[17px]">Producto, paisaje y retrato </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="./asset/img/iconojuegos.svg" alt="Icono de videojuego" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Video Juegos</p>
                                        <p className="font-light font-Oswald text-[17px]">Nintendo y PC</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="./asset/img/iconoliteratura.svg" alt="Icono de literatura" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Literatura</p>
                                        <p className="font-light font-Oswald text-[17px]">Ciencia ficción y novela negra</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="./asset/img/iconocomic.svg" alt="Icono de comic" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Comic</p>
                                        <p className="font-light font-Oswald text-[17px]">DC, manga y anime</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 md:col-span-3">
                        <h2 className="font-medium font-Oswald uppercase text-naranjo text-7xl">MIRA MI CV</h2>
                        <div className="flex justify-between border-b-4 border-azulbrillante pb-4">
                            <button onClick={toggleLaboral}>
                                <span className={`font-bold font-Oswald text-[27px] ${visibleSection === 'laboral' ? 'text-white' : 'text-white/30'}`}>Experiencia Laboral</span>
                            </button>
                            <button onClick={toggleEstudios}>
                                <span className={`font-bold font-Oswald text-[27px] ${visibleSection === 'estudios' ? 'text-white' : 'text-white/30'}`}>Estudios</span>
                            </button>
                        </div>
                        <section className={`container mx-auto mt-10 ${visibleSection === 'laboral' ? 'block' : 'hidden'}`}>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2024</p>
                                    <p className="text-center font-bold font-Oswald text-18">2020</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Webmaster E-commers Comic Way Spa</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Diseño de interfaces para aplicaciones web. Implementación de arquitectura de información, card sorting, tree testing, userow, wireframe en baja y alta, prototipados, motion, user persona, usos de design systems, pruebas de usabildiad. Diseño de variadas piezas gráficas digitales para el rubro del marketing farmacéutico, como sitios web, landing page, mail, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Clientes:</strong> Novartis, Sanos, Takeda, Gilead, Asofarma, Abbott, Lundbek, Roche, Synthon, TecnoFarma, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> CSS, HTML, Figma, Illustrator, Photoshop.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2024</p>
                                    <p className="text-center font-bold font-Oswald text-18">2020</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Webmaster E-commers Comic Way Spa</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Diseño de interfaces para aplicaciones web. Implementación de arquitectura de información, card sorting, tree testing, userow, wireframe en baja y alta, prototipados, motion, user persona, usos de design systems, pruebas de usabildiad. Diseño de variadas piezas gráficas digitales para el rubro del marketing farmacéutico, como sitios web, landing page, mail, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Clientes:</strong> Novartis, Sanos, Takeda, Gilead, Asofarma, Abbott, Lundbek, Roche, Synthon, TecnoFarma, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> CSS, HTML, Figma, Illustrator, Photoshop.</p>
                                </div>
                            </div>
                        </section>
                        <section className={`container mx-auto mt-10 ${visibleSection === 'estudios' ? 'block' : 'hidden'}`}>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2008</p>
                                    <p className="text-center font-bold font-Oswald text-18">2013</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Lic. en Diseño Gráfico</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Diseño de interfaces para aplicaciones web. Implementación de arquitectura de información, card sorting, tree testing, userow, wireframe en baja y alta, prototipados, motion, user persona, usos de design systems, pruebas de usabildiad. Diseño de variadas piezas gráficas digitales para el rubro del marketing farmacéutico, como sitios web, landing page, mail, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Clientes:</strong> Novartis, Sanos, Takeda, Gilead, Asofarma, Abbott, Lundbek, Roche, Synthon, TecnoFarma, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> CSS, HTML, Figma, Illustrator, Photoshop.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CvMoises