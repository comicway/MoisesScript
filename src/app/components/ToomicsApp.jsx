import Image from "next/image";
import Link from "next/link"

const ToomicsApp = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px] px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-h1pagina mt-28 leading-none">Aplicación móvil Toomics</h1>
                <h2 className="text-white font-medium font-Oswald sm:text-[42px] text-[34px] leading-snug">Rediseño de la app móvil</h2>
            </div>
            <div className="container mx-auto pt-[17px] px-2">
                <img src="/asset/img/logotoomics.svg" alt="logo toomics" width="150" height="50" />
            </div>
            <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[60px] sm:py-[126px] mt-24 px-2">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <p className="font-Inter text-letrablanca text-lg mb-4"><span className="font-bold">¿Qué es Toomics?</span> Toomics es una aplicación móvil dedicada a la lectura legal de webcomis, estilos webtoons.</p>
                        <p className="font-Inter text-letrablanca text-lg mb-4"><span className="font-bold">El porque, hipótesis.</span> Aunque las historias son agradables de leer en móviles, muchos usuarios no completan las lecturas por la suscripción paga. Se propone un nuevo modelo de negocio rentable para ambos. La usabilidad es complicada: los filtros de género son confusos, los accesos directos del home no llevan a descripciones generales y el apartado “leído recientemente” muestra mensajes sin valor cuando está vacío.</p>
                        <a href="https://www.figma.com/proto/VO492H49PX5O9rGkzMGg4q/CoderHouse-Desaf%C3%ADos-UX-UI-Avanzado?page-id=275%3A98&node-id=387-235&viewport=263%2C-1%2C0.14&scaling=scale-down&starting-point-node-id=387%3A279&hotspot-hints=0&t=HCeXRt84R6oYDmWr-1" target="_blank">
                            <button className="h-[38px] w-[114px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]">Ver prototipo</button>
                        </a>
                    </div>
                </section>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Metodología</h3>
                        <p className="font-Oswald font-normal text-[23px]">Elementos UX de James Garrett</p>
                        <ul className="font-Oswald font-light text-[23px] pr-[15px]">
                            <li>Estrategia</li>
                            <li>Alcance</li>
                            <li>Estructura</li>
                            <li>Superficie</li>
                        </ul>
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Población de Estudio</h3>
                        <p className="font-Oswald font-normal text-[40px]">29 Personas</p>
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Número de Iteraciones</h3>
                        <p className="font-Oswald font-normal text-[40px]">1 iteración</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">1. Estrategia</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/estrategia1.png" alt="" />
                        <img className="mt-[10px] px-2" src="/asset/img/estrategia2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">2. Alcance</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/alcance1.png" alt="" />
                        <img className="mt-[10px] px-2" src="/asset/img/alcance2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">3. Estructura</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/estructura1.png" alt="" />
                        <img className="mt-[10px] px-2" src="/asset/img/estructura2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">4. Superficie</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/superficie1.png" alt="" />
                        <img className="mt-[10px] px-2" src="/asset/img/superficie2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-[50px] sm:mt-[73px] border-t border-azulbrillante px-2">
                <section className="container mx-auto mt-[20px] sm:mt-[73px] pb-[125px]">
                    <h2 className="text-white font-medium font-Oswald text-[42px]">Otros proyectos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-[0px] sm:mt-[37px]">
                        <div className='mt-[90px]'>
                            <Image src="/asset/img/portadacomicapp.png" alt="" width={1200} height={630} className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Comic App</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                <Link href='/proyectos/comicapp'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-[90px]'>
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="/asset/img/portadaodisyshoot.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Odisy Shoot</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Videojuegos</span>
                                <div className="flex justify-between">
                                <Link href='/proyectos/odisyshoot'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ToomicsApp
