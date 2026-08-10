import Link from "next/link"

const ComicApp = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px] px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-h1pagina mt-28 leading-none">COMIC APP</h1>
                <h2 className="text-white font-medium font-Oswald sm:text-[42px] text-[34px] leading-snug">Proyecto de aplicación móvil: guía especilizada para lectores noveles en comic.</h2>
            </div>
            <div className="container mx-auto pt-[17px] px-2">
                <img src="/asset/img/logocomicapp.svg" alt="logo comicapp" />
            </div>
            <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[60px] sm:py-[126px] mt-24 px-2">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <p className="font-Inter text-letrablanca text-lg mb-4">El cómic es un arte que despierta interés en Chile, pero la gran cantidad de historias y tramas puede abrumar a los nuevos lectores, dificultando su decisión de compra y afectando las ventas de tiendas y distribuidores.</p>
                        <p className="font-Inter text-letrablanca text-lg mb-4"><span className="font-bold">Solución:</span> Una aplicación móvil guiará a los usuarios en la elección de cómics, solicitando datos como preferencias de superhéroes, películas o edad. Basándose en esta información, ofrecerá recomendaciones claras y personalizadas para facilitar el inicio en el mundo del cómic.</p>
                        <a href="https://www.figma.com/proto/ZDho21n7ZZtdenDISxNzhd/CoderHouse-Prototipos-y-Patrones-ComicApp?page-id=206%3A1647&node-id=211-1278&viewport=1362%2C-1768%2C0.7&scaling=min-zoom&starting-point-node-id=211%3A1234&t=qOZUdxWR67ET6FNw-1" target="_blank">
                            <button className="h-[38px] w-[114px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]">Ver prototipo</button>
                        </a>
                    </div>
                </section>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Metodologías</h3>
                        <ul className="font-Oswald font-light text-[23px] pr-[15px]">
                            <li>Desk Research</li>
                            <li>User Persona</li>
                            <li>Benchmarking</li>
                            <li>PMV</li>
                            <li>Taskflow y Geralflow</li>
                            <li>Wireframe y prototipo</li>
                            <li>Pruebas de usabilidad</li>
                        </ul>
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Población de estudio</h3>
                        <p className="font-Oswald font-normal text-[40px]">13 personas</p>
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Número de Iteraciones</h3>
                        <p className="font-Oswald font-normal text-[40px]">1 iteración</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">Desk Research</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Más de 16 reseñas en app similares</p>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Gran interés por organizar colecciones de cómics. Quejas relacionadas con el pago de funcionalidades básicas y la falta de una base de datos suficiente en la aplicación.</p>
                        <img className="mt-[10px] px-2" src="/asset/img/desk-research-1.png" alt="desk research" />
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Notas y Video</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Tanto en Google como en YouTube, existe una gran cantidad de información disponible sobre el tema "guía para empezar a leer cómics".</p>
                        <img className="mt-[10px] px-2" src="/asset/img/desk-research-2.png" alt="desk research" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">User Persona</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Entrevistas a 5 personas con intereses similares.</p>
                        <img className="mt-[10px] px-2" src="/asset/img/protopersona.png" alt="user persona" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Benchmarking</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Las 3 app similares, más relevantes del mercado. Se estudiaron sus fortalezas y debilidades.</p>
                        <img className="mt-[10px] px-2" src="/asset/img/benchmarking.png" alt="benchmarking" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">Producto Mínimo Viable</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">En base a la problemática encontrada, se caracterizaron las funcionalidades de la app, tanto indispensables como deseables.</p>
                        <img className="mt-[10px] px-2" src="/asset/img/productominimoviable.png" alt="producto minimo viable" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Taskflow</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/taskflow.png" alt="taskflow" />
                    </div>
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">Geralflow</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/geralflow.png" alt="geralflow" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Wireframe y prototipo</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/wireframe.png" alt="wireframe" />
                        <img className="mt-[10px] px-2" src="/asset/img/prototipado.png" alt="prototipado" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">Prueba de Usabilidad</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/prueba1.png" alt="prueba de usabilidad" />
                        <img className="mt-[10px] px-2" src="/asset/img/prueba2.png" />
                        <img className="mt-[10px] px-2" src="/asset/img/prueba3.png" />
                        <img className="mt-[10px] px-2" src="/asset/img/prueba4.png" />
                        <img className="mt-[10px] px-2" src="/asset/img/prueba5.png" />
                    </div>
                </div>
            </div>
            <div className="mt-[50px] sm:mt-[73px] border-t border-azulbrillante px-2">
                <section className="container mx-auto mt-[20px] sm:mt-[73px] pb-[125px]">
                    <h2 className="text-white font-medium font-Oswald text-[42px]">Otros proyectos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-[0px] sm:mt-[37px]">
                        <div className='mt-[90px]'>
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="/asset/img/portadatoomics.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Rediseño App Toomics</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                <Link href='/toomics'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-[90px]'>
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="/asset/img/portadaodisyshoot.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Odisy Shoot</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Videojuegos</span>
                                <div className="flex justify-between">
                                <Link href='/odisyshoot'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ComicApp;