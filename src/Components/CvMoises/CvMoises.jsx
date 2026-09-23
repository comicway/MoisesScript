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
                                <h3 className="font-bold font-Oswald text-[27px]">Diseño UX / UI</h3>
                                <p className="mt-6 font-Oswald text-[22px]">Optimal Workshop</p>
                                <p className="mt-2 font-Oswald text-[22px]">Figma</p>
                                <p className="mt-2 font-Oswald text-[22px]">Maze</p>
                                <p className="mt-2 font-Oswald text-[22px]">Design Systems</p>
                                <p className="mt-2 font-Oswald text-[22px]">Lean UX</p>
                                <p className="mt-2 font-Oswald text-[22px]">User Journey Map</p>
                                <p className="mt-2 font-Oswald text-[22px]">Card Sorting</p>
                                <p className="mt-2 font-Oswald text-[22px]">Agile</p>
                                <p className="mt-2 font-Oswald text-[22px]">Design Thinking</p>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-white border-azulbrillante border-2 border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                                <h3 className="font-bold font-Oswald text-[27px]">Frontend</h3>
                                <p className="mt-6 font-Oswald text-[22px]">React</p>
                                <p className="mt-2 font-Oswald text-[22px]">React Native</p>
                                <p className="mt-2 font-Oswald text-[22px]">JavaScript</p>
                                <p className="mt-2 font-Oswald text-[22px]">Tailwind CSS</p>
                                <p className="mt-2 font-Oswald text-[22px]">HTML5/CSS3</p>
                                <p className="mt-2 font-Oswald text-[22px]">SQL</p>
                                <p className="mt-2 font-Oswald text-[22px]">Python</p>
                                <p className="mt-2 font-Oswald text-[22px]">GitHub</p>
                                <p className="mt-2 font-Oswald text-[22px]">Contentful</p>
                                <p className="mt-2 font-Oswald text-[22px]">Wordpress</p>
                            </div>
              </div>
              <div className="hidden sm:block">
                  <div className="text-white border-azulbrillante border-2 border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                      <h3 className="font-bold font-Oswald text-[27px]">Data & Analytics</h3>
                      <p className="mt-6 font-Oswald text-[22px]">Big Data</p>
                      <p className="mt-2 font-Oswald text-[22px]">Machine Learning</p>
                      <p className="mt-2 font-Oswald text-[22px]">Google Analytics 4</p>
                      <p className="mt-2 font-Oswald text-[22px]">Looker Studio</p>
                      <p className="mt-2 font-Oswald text-[22px]">Power Bi</p>
                      <p className="mt-2 font-Oswald text-[22px]">Google Tag Manager</p>
                  </div>
              </div>
                    </div>
                    <div className="px-5 md:col-span-3">
                        <h2 className="font-medium font-Oswald uppercase text-naranjo text-7xl">MIRA MI CV</h2>
                        <div className="flex justify-between border-b-4 border-azulbrillante pb-4">
                            <button onClick={toggleLaboral}>
                                <span className={`font-bold font-Oswald text-[27px] ${visibleSection === 'laboral' ? 'text-white' : 'text-white/50'}`}>Experiencia Laboral</span>
                            </button>
                            <button onClick={toggleEstudios}>
                                <span className={`font-bold font-Oswald text-[27px] ${visibleSection === 'estudios' ? 'text-white' : 'text-white/50'}`}>Estudios</span>
                            </button>
                        </div>
                        <section className={`container mx-auto mt-10 ${visibleSection === 'laboral' ? 'block' : 'hidden'}`}>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2025</p>
                                    <p className="text-center font-bold font-Oswald text-18">2026</p>
                                    <div className="h-15 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Desarrollador Frontend - Ki Technologies</h2><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]">Optimicé la presencia digital de un retailer líder mediante la estructuración <span className="font-bold">SEO</span> en <span className="font-bold">Contentful</span> y la automatización de campañas en <span className="font-bold">Salesforce Marketing Cloud</span> (Journey Builder, Cloud Pages y AMPscript). Esta integración técnica y de contenidos dinámicos incrementó significativamente el tráfico al sitio web y redujo los tiempos de despliegue de las campañas.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2020</p>
                                    <p className="text-center font-bold font-Oswald text-18">2025</p>
                                    <div className="h-5 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Gestor de Marketing Digital - Global Ultrasonido y Comic Way</h2><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]">Gestión integral de e-commerce y adquisición digital. Optimización de embudos de conversión (CRO), posicionamiento SEO y administración de pauta (Google/Meta Ads)</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2020</p>
                                    <p className="text-center font-bold font-Oswald text-18">2021</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Diseñador UI - Europa Press</h2><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">UX Research y Arquitectura de Información:</span> Ejecuté estudios con usuarios <span className="font-bold">(Card Sorting, Tree Testing y pruebas de usabilidad con Optimal Workshop y Maze)</span> para definir la arquitectura de información y los flujos de usuario en plataformas web.</p><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Diseño UI y Prototipado:</span> Diseñé la interfaz, <span className="font-bold">wireframes y prototipos de alta fidelidad en Figma</span>, construyendo componentes escalables bajo <span className="font-bold">Design Systems</span> y maquetación en HTML/CSS.</p><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Impacto en Clientes:</span> Entregué soluciones digitales para marcas globales <span className="font-bold">(como Roche, Novartis, Abbott y Sanofi)</span>, alcanzando de forma sistemática un 100% de cumplimiento en los KPIs de negocio, interacción y conversión definidos para cada proyecto.</p>
                                </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2017</p>
                                    <p className="text-center font-bold font-Oswald text-18">2019</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]"> Webmaster E-commers - Mi Chile Spa Xiaomi Chile</h2><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Desarrollo E-commerce y UI</span>: Diseñé e implementé la tienda en línea oficial sobre WordPress (HTML/CSS), iterando la arquitectura y navegación a partir del análisis continuo de comportamiento en Google Analytics.</p><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Adquisición y Marketing Digital:</span> Lideré la estrategia de posicionamiento orgánico <span className="font-bold">(SEO)</span> y la pauta en Google Ads para la captación de tráfico cualificado y prospección de clientes.</p><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Impacto de Negocio:</span> Generé un incremento exponencial en las ventas del canal e-commerce, logrando un Retorno sobre la Inversión (ROI) mayor a 6x.</p>
                                    </div>
                            </div>
                            <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                                <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                                    <p className="text-center mt-2 font-bold font-Oswald text-18">2014</p>
                                    <p className="text-center font-bold font-Oswald text-18">2016</p>
                                    <div className="h-32 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                                </div>
                                <div className="col-span-4 sm:col-span-6 pb-[30px]">
                                    <h2 className="font-Oswald font-bold text-white text-[27px]">Diseñador UI - Comware Digital</h2><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Diseño UI y Maquetación Frontend:</span> Diseñé propuestas gráficas y maqueté componentes responsive <span className="font-bold">(HTML5, CSS3, SASS, Bootstrap, Material Design)</span> para sitios web y aplicaciones móviles.</p><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Desarrollo CMS a Medida:</span> Modifiqué y construí temas propios desde cero en <span className="font-bold">WordPress</span>, asegurando una arquitectura de código limpia.</p><br></br>
                                    <p className="font-Inter font-light text-white text-[20px]"><span className="font-bold">Entrega y Cumplimiento:</span> Entregué productos digitales para marcas internacionales <span className="font-bold">(como Purina, Avior y Gordons)</span>, garantizando el estándar visual deseado y el cumplimiento de sus objetivos comerciales.</p>
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
                    <div className="rounded-full border border-white w-[66px] h-[66px] text-white mx-auto">
                        <p className="text-center mt-2 font-bold font-Oswald text-18">2026</p>
                        <p className="text-center font-bold font-Oswald text-18">Actual</p>
                        <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                    </div>
                    <div className="col-span-4 sm:col-span-6 pb-[30px]">
                        <h2 className="font-Oswald font-bold text-white text-[27px]">Magíster Ingeniería en Informática - Universidad Andrés Bello</h2>
                        <p className="font-Inter font-light text-white text-[20px]">Actualmente estoy cursando este magíster, el cual posee dos polos: Ciencia de Datos e Ingeniería en Informática Aplicada.</p>
                    </div>
    </div>
                <div className="grid gap-5 grid-cols-5 sm:grid-cols-7">
                    <div className="text-white mx-auto mt-[10px]">
                        <p className="text-center font-bold font-Oswald text-18">2026</p>
                        <div className="h-10 w-0 mt-5 border-l border-dashed border-[1px] border-white mx-auto"></div>
                    </div>
                    <div className="col-span-4 sm:col-span-6 pb-[30px]">
                        <h2 className="font-Oswald font-bold text-white text-[27px]">Diplomado: Ciencia de Datos - Universidad Andrés Bello</h2>
                        <p className="font-Inter font-light text-white text-[20px]">Al realizar este diplomado me encuentro en la capacidad técnica y poseo las habilidades necesarias para actuar como científico de datos, recuperando datasets, realizando análisis EDA, para luego entrenar modelos de Machine Learning, tanto supervisados como no supervisados, con la finalidad de realizar predicciones o categorizar elementos.</p>
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
