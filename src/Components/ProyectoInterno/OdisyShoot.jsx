import Image from "next/image";
import Link from "next/link"

const OdisyShoot = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px] px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-h1pagina mt-28 leading-none">Odisy Shoot</h1>
                <h2 className="text-white font-medium font-Oswald sm:text-[42px] text-[34px] leading-snug">Videojuego shoot 'em up 3D</h2>
            </div>
            <div className="container mx-auto pt-[17px] px-2">
                <img src="/asset/img/logo-odisy-shoot.png" alt="logo OdisyShoot" />
            </div>
            <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[60px] sm:py-[126px] mt-24 px-2">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <p className="font-Inter text-letrablanca text-lg mb-4">Como parte del proyecto final del curso de Desarrollo de Videojuegos en Unity de CoderHouse, desarrollé una demo de un juego que combina elementos de género shoot 'em up 3D  y puzles. El objetivo principal de este proyecto fue poner en práctica los conocimientos adquiridos durante el curso. Este videojuego está diseñado específicamente para ser jugado en dispositivos móviles.</p>
                        <a href="./asset/img/odisyshootejecutable.zip" target="_blank">
                            <button className="h-[38px] w-[150px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]">Descargar Juego</button>
                        </a>
                    </div>
                </section>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Idea general</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Jorg debe superar acertijos en cada planeta con obstáculos, además de enfrentarse a naves enemigas para avanzar en la historia y llegar a nuevos mundos.</p>
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Mecánicas básicas</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Juego que combina acertijos y elementos de disparos para eliminar naves enemigas. Incluye movimientos tanto del personaje como de la nave, además de cuadros de diálogo integrados en la narrativa.</p>
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-55 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Género</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">Puzzle + shoot 'em up 3D</p>
                        <h3 className="font-Oswald font-bold text-[27px]">Lenguaje y Programa</h3>
                        <p className="font-Oswald font-light text-[23px] pr-[15px]">C# y Unity</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">Dinámica General</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/dinamicajuego.png" alt="dinamica general" />
                    </div>
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 p-[20px] bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Escenario #1</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/escenapro1.png" alt="esenario juego unity" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    <div className="text-white border-azulbrillante border border-b-4 mt-24 pt-8 pl-8 pb-8 bg-gradient-to-t from-[#45617350] to-[#45617300]">
                        <h3 className="font-Oswald font-bold text-[27px]">Escenario #2</h3>
                        <img className="mt-[10px] px-2" src="/asset/img/escenapro2.png" alt="esenario juego unity" />
                    </div>
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                    <h3 className="font-Oswald font-bold text-[27px]">Escenario #3</h3>
                    <img className="mt-[10px] px-2" src="/asset/img/escenapro3.png" alt="esenario juego unity" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">Juego Ejecutado</h3>
                        <img className="mt-[10px] px-2 m-auto" src="/asset/img/vistamoviljuego.png" alt="" />
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
                                <Link href='/comicapp'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" width="20" height="20" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-[90px]'>
                            <Image src="/asset/img/portadatoomics.png" alt="" width={1200} height={630} className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Rediseño App Toomics</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                <Link href='/toomics'>
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
export default OdisyShoot