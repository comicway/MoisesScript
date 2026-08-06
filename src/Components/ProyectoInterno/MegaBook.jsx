import { Link } from "react-router-dom"

const MegaBook = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px] px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-h1pagina mt-28 leading-none">Aplicación MegaBook</h1>
                <h2 className="text-white font-medium font-Oswald sm:text-[42px] text-[34px] leading-snug">Motivando buenos hábitos de lectura.</h2>
            </div>
            <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[60px] sm:py-[126px] mt-24 px-2">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <p className="font-Inter text-letrablanca text-lg mb-4">MegaBook es una aplicación en React JS diseñada para construir el hábito de lectura desde cero mediante psicología del comportamiento y gamificación. El proyecto aplicó la metodología Lean UX para validar rápidamente las necesidades reales de los lectores y alcanzar así su primera fase de interacción.</p>
                        <p className="font-Inter text-letrablanca text-lg mb-4">Puedes acceder al repositorio en <strong>GitHub</strong> a través del siguiente enlace:</p>
                        <a href="https://github.com/comicway/megabook" target="_blank">
                            <button className="h-[38px] w-[150px] bg-azulbrillante font-bold font-Inter text-black text-[15px]">Ver en GitHub</button>
                        </a>
                        <a href="https://www.figma.com/proto/AySPPkvqW3aVlY9kAmePuA/App-Habitos-Lectura?node-id=252-487&t=JoFhb74fzbsdCtGu-1&scaling=min-zoom&content-scaling=fixed&page-id=190%3A219&starting-point-node-id=252%3A487&hotspot-hints=0" target="_blank">
                            <button className="h-[38px] w-[150px] mt-4 border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]">Ver prototipo</button>
                        </a>
                    </div>
                </section>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Metodologías</h3>
                        <ul className="font-Oswald font-light text-[23px] pr-[15px]">
                            <li>Lean UX</li>
                            <li>Entrevistas</li>
                            <li>Proto y User Persona</li>
                            <li>PMV</li>
                            <li>Taskflow</li>
                            <li>Pruebas de usabilidad</li>
                        </ul>
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Tecnologías</h3>
                        <ul className="font-Oswald font-light text-[23px] pr-[15px]">
                            <li>React JS</li>
                            <li>Context API</li>
                            <li>Custom Hooks</li>
                            <li>Formik</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Fase 1: El Descubrimiento</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/ProtoPersona.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/Entrevista.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/UserPersona.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Fase 2: La Solución</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/PMV.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/TaskFlow.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/Prototipoenbaja.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Fase 3: La Validación</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/PruebasUsabilidad.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/Interaccion.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/Moodboard.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/Componentes.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[20px] mt-24">
                        <img className="m-auto" src="/asset/img/PrototipoAlta.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-[50px] sm:mt-[73px] border-t border-azulbrillante px-2">
                <section className="container mx-auto mt-[20px] sm:mt-[73px] pb-[125px]">
                    <h2 className="text-white font-medium font-Oswald text-[42px]">Otros proyectos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-[0px] sm:mt-[37px]">
                        <div className='mt-[90px]'>
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/portadatoomics.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Rediseño App Toomics</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                    <Link to='/toomics'>
                                        <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                    </Link>
                                    <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-[90px]'>
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/portadaroverapp.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Rover Photo App</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Frontend</span>
                                <div className="flex justify-between">
                                    <Link to='/roverphotoapp'>
                                        <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                    </Link>
                                    <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default MegaBook