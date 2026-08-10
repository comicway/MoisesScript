"use client";
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
                                <a href="tel:+56977658072">+56 9 77 65 80 72</a>
                            </p>
                            <p className="font-Inter font-extralight text-letrablanca text-xl mb-1">
                                <a href="mailto:moiselias7@gmail.com">moiselias7@gmail.com</a>
                            </p>
                            <p className="font-Inter font-extralight text-letrablanca text-xl mb-1">
                                <a href="http://github.com/comicway">github.com/comicway</a>
                            </p>
                            <p className="font-Inter font-extralight text-letrablanca text-xl">Quinta Normal</p>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white border-azulbrillante border-2 border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                                <h3 className="font-bold font-Oswald text-[27px]">Programación</h3>
                                <p className="mt-6 font-bold font-Oswald text-[22px]">React Js</p>
                                <p className="font-light font-Oswald text-[17px]">(2024 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">JavaScript</p>
                                <p className="font-light font-Oswald text-[17px]">(2023 - ACTUAL)</p>
                                <p className="mt-6 font-bold font-Oswald text-[22px]">Python</p>
                                <p className="font-light font-Oswald text-[17px]">(2026 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">Tailwind CSS</p>
                                <p className="font-light font-Oswald text-[17px]">(2024 - ACTUAL)</p>
                                <p className="mt-4 font-bold font-Oswald text-[22px]">Wordpress</p>
                                <p className="font-light font-Oswald text-[17px]">(2012 - ACTUAL)</p>
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
                                        <img src="/asset/img/iconocine.svg" alt="Icono de cine" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Cine</p>
                                        <p className="font-light font-Oswald text-[17px]">Ciencia ficción e intriga</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="/asset/img/iconofotografia.svg" alt="Icono de fotografia" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Fotografía</p>
                                        <p className="font-light font-Oswald text-[17px]">Producto, paisaje y retrato </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="/asset/img/iconojuegos.svg" alt="Icono de videojuego" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Video Juegos</p>
                                        <p className="font-light font-Oswald text-[17px]">Nintendo y PC</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="/asset/img/iconoliteratura.svg" alt="Icono de literatura" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mt-6 font-bold font-Oswald text-[22px]">Literatura</p>
                                        <p className="font-light font-Oswald text-[17px]">Ciencia ficción y fantasía</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mt-7">
                                        <img src="/asset/img/iconocomic.svg" alt="Icono de comic" />
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
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2025</p>
                                    <p className="text-center font-bold font-Oswald text-18">2026</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Desarrollador Frontend - Especialista SEO - Ki Technologies</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Responsable del posicionamiento y optimización SEO a través de <span className="font-bold">Contentful</span>, junto con la coordinación de requerimientos creativos para campañas digitales (landing pages y email marketing). Especialista en la ejecución de campañas omnicanal en <span className="font-bold">Salesforce Marketing Cloud</span>, manejando Journey Builder, Automation Studio, Cloud Pages y desarrollo en AMPscript para una de las mayores empresas de retail del mercado nacional.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> Salesforce Marketing Cloud, Contentfull, SEMrush, Figma, CSS, HTML, AMPscript, JavaScript.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2023</p>
                                    <p className="text-center font-bold font-Oswald text-18">2025</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Gestor de Marketing Digital - Global Ultrasonido</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Creación, administración y optimización de campañas en <span className="font-bold">Google Ads, Meta Ads y Linkedin Ads.</span> Estudio de <span className="font-bold">arquitectura de información</span> para modelo de negocio y <span className="font-bold">buyer persona.</span> Diseño y gestión de páginas web en <span className="font-bold">Shopify</span>. Plan y ejecución de estrategias <span className="font-bold">SEO</span> Generación de reportes en <span className="font-bold">Google Looker Studio</span>. Automatización de correos en Gmail mediante el uso de <span className="font-bold">Google Script.</span> Integración de la API de Cliengo para la captación de leads en el formulario de contacto web.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> CSS, HTML, JavaScript, Shopify, Google Tag Manager, Looker Studio, Meta Ads, Google Ads, LinkedIn Ads, Google Analytics, Google Script, Google Search Console.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2020</p>
                                    <p className="text-center font-bold font-Oswald text-18">Actual</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Analista Marketing Digital - Comic Way Spa</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Creación, administración y optimización de campañas en <span className="font-bold">Google Ads y Meta Ads</span>. Analista <span className="font-bold">SEO</span>, e implementación técnica en sitio web. Gestión cuenta de <span className="font-bold">Mercado Libre y Falabella Seller Center</span>, administración de ventas, subida de productos, elaboración de campañas en <span className="font-bold">Mercado Ads</span>, entre otros. Elaboración de <span className="font-bold">encuestas y entrevistas</span> para estruturar el <span className="font-bold">buyer perfona</span> requerido en marketing digital.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> CSS, HTML, Wordpress, Marcado Libre, Falabelle Seller Center, Google Ads, Meta Ads, Google Search Console, Google Analytics.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2020</p>
                                    <p className="text-center font-bold font-Oswald text-18">2021</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Diseñador UI - Europa Press</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Diseño de variadas piezas gráficas digitales para el rubro del marketing farmacéutico, como sitios   web, landing page, mail, entre otros. Diseño de interfaces para aplicaciones web. <span className="font-bold">Implementación de arquitectura de información, card sorting, tree testing, userflow, wireframe en baja y alta, prototipados, motion, user persona, usos de design systems, pruebas de usabildiad.</span></p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Clientes:</strong>Novartis, Sanofis, Takeda, Gilead, Asofarma, Abbott, Lundbek, Roche,
                                        Synthon, TecnoFarma, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> CSS, HTML, Figma, Illustrator, Photoshop, Optimal Workshop</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2017</p>
                                    <p className="text-center font-bold font-Oswald text-18">2019</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]"> Webmaster E-commers - Mi Chile Spa Xiaomi Chile</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Creación de tienda online en Wordpress para la venta de productos Xiaomi en Chile (distribuidor oficial). Mejoras continuas en el e-commers según las analíticas arrojadas en <span className="font-bold">Google Analytics</span>. Encargado de realizar marketing digital tomando con mayor fuerza el <span className="font-bold">SEO (posicionamiento web en Google) Facebook Ads y Google Shopping</span></p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong>Wordpress, Google Analytics, Google Ads, Google Search Console, Photoshop, Illustrator, HTML CSS.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2014</p>
                                    <p className="text-center font-bold font-Oswald text-18">2016</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Diseñador UI - Comware Digital</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Ejecución propuestas gráficas para aplicaciones y páginas web de múltiples clientes. Maquetado en <span className="font-bold">HTML y CSS</span> para luego ser entregado al equipo de programación. Muchas páginas fueron realizadas en <span className="font-bold">Wordpress</span>, modificando temas y creando propias desde cero.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Clientes:</strong> Purina Dog Chow, Golden, Aruba Fashio Week, Avior, Eposak, Gordons,
                                        Oceania Aruba Rentals, Play Head, Tu Cita de Belleza, Tu Descueston, entre otros.</p>
                                    <p className="font-Inter font-light text-white text-[20px] mt-10"><strong>Herramientas:</strong> HTML, CSS, Jquery, Boostrap, Meterial Desing, SASS, Worpress,
                                        Prestashop.</p>
                                </div>
                            </div>
                        </section>
                        <section className={`container mx-auto mt-10 ${visibleSection === 'estudios' ? 'block' : 'hidden'}`}>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2008</p>
                                    <p className="text-center font-bold font-Oswald text-18">2013</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Lic. en Diseño Gráfico - Universidad José María Vargas</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Carrera larga de 5 años, donde obtuve conocimiento dentro de la comunicación visual. Pudiendo elaborar proyectos prácticos en diferentes áreas, como el impreso, multimedia, publicidad, empresarial y web. Mi especialización en la carrera se centró en el diseño de interfaces gráficas.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2024</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: Pruebas de usabilidad con usuarios reales - Somos Edison</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Gracias a este curso, adquirí todas las herramientas necesarias para realizar pruebas de usabilidad, tanto remotas como presenciales, ya sean moderadas o no moderadas.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2024</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: Reac Js - CoderHouse</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">En este curso de React JS aprendí a programar utilizando componentes, trabajando con JavaScript, ES6 y comprendiendo las ventajas de la utilización del flujo de datos. Además, apliqué el manejo de rutas, implementé Firebase en proyectos y comprendí el funcionamiento del Virtual DOM a través del desarrollo con React JS. También adquirí experiencia en el manejo de Hooks.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2023</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: JavaScript - CoderHouse</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">En este curso aprendí los fundamentos del lenguaje de programación más utilizado en la actualidad, con el cual es posible desarrollar aplicaciones de diversos tipos. Apliqué técnicas de desarrollo para crear aplicaciones modernas utilizando AJAX. Ahora estoy en condiciones de diseñar soluciones web interactivas y trasladar los conocimientos adquiridos a cualquier framework de JavaScript.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2023</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: Programación de Videojuegos Unity - CoderHouse</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">En este curso se abarcó el uso de la interfaz gráfica de Unity y su motor gráfico implementado con C# . Se exploraron temas como la creación y configuración de ambientes y escenas,desarrollo de mecánicas, integración de audio, física, iluminación, texturizado, aplicación de animaciones, sistemas de partículas, manejo de colisiones, diseño e integración de interfaces de usuario (UI), eventos, herencia y polimorfismo.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2023</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: Diseño UX / UI Avanzado - CoderHouse</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">En este curso, pude relacionar los conceptos iniciales de diseño UX/UI y dar un paso más en la generación de prototipos al rediseñar una marca existente. Profundice en los conceptos teóricos y definí una metodología para abordar cada etapa del proyecto, centrándome en el aspecto empresarial. Después, puse en práctica los contenidos a través de actividades y reflexiones específicas del proyecto.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2022</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: Diseño UX / UI - CoderHouse</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">En este curso, aprendí a hacer un research e investigar acerca de un problema que convertí en una idea de app. Diseñé y creé un prototipo de app. Empecé plasmando mi idea y definiendo las funcionalidades principales (MVP). También trabajé en la definición de mi público objetivo para el desarrollo del prototipo. Utilice herramientas de prototipado actuales y valoradas en el ámbito laboral. Validé mi proyecto utilizando diferentes metodologías y actividades. Adquirí habilidades en metodologías ágiles y justificar mis decisiones de diseño de manera clara. Aprendí metodologías de diseño para mi proyecto y me familiaricé con disciplinas proyectales.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2022</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: Publicidad en redes Avanzado (Meta, Google, GA4) - CoderHouse</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">36 horas de clases dictadas a lo largo de 9 semanas. El objetivo de este curso es poder implementar estrategias de marketing digital dentro de la plataforma de Google Ads y Facebook Ads. También poder interpretar y manipular métricas dentro de Google Analytics 4.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2022</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: SEO Optimización de motores de búsqueda - CoderHouse</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">14 horas no académicas de clases con profesores y tutores expertos del área. Se dieron conocimientos de SEO técnico, on page, in page. Estrategias de posicionamiento web. Elaboración de proyecto final, auditoría SEO a página web real.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="text-white mx-auto mt-[10px]">
                                    <p className="text-center font-bold font-Oswald text-18">2020</p>
                                    <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Curso: Arquitectura de la información UX - Crehana</h2>
                                    <p className="font-Inter font-light text-white text-[20px]">Más de 4 horas no académicas. Arquitectura de la información de principio a fin. Se aprendieron herramientas para conocer a los usuarios, definición de propuesta de valor para plasmar en un prototipo donde se explicará cómo se materializa en un modelo de navegación concreto.</p>
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
