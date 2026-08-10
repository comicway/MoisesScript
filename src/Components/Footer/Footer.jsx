import Link from "next/link"

const FooterScript = () => {
    return (
        <>
            <section className="sm:mt-[80px] pt-[72px] pb-[65px] border-t-4 border-azulbrillante">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
                        <div className="sm:col-span-5">
                            <h3 className="text-white font-medium font-Oswald text-[42px] leading-snug">Este es el momento de contactarme</h3>
                            <p className="text-white font-medium font-Inter text-[16px]">¡No dudes en ponerte en contacto conmigo o simplemente saludarme!</p>
                        </div>
                        <a href="https://wa.me/56977658072">
                            <button className="w-[159px] h-[54px] bg-azulbrillante font-bold font-Inter text-[18px] mt-[26px]">Escríbeme</button>
                        </a>
                    </div>
                </div>
            </section>
            <footer className="pt-[50px] pb-[35px] bg-black px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pb-[16px]">
                        <div className="sm:col-span-2">
                            <div className="flex flex-col">
                                <img src="/asset/img/logomoisesscript.svg" alt="logo moises.script" className="self-start w-auto sm:h-auto sm:mb-[122px]" />
                                <div className="flex mt-[20px] sm:mt-auto gap-3">
                                    <a href="https://github.com/comicway" target="blank"><img src="/asset/img/ico-github.svg" alt="GitHub" /></a>
                                    <a href="https://www.instagram.com/moises_script/" target="blank"><img src="/asset/img/ico-instagram.svg" alt="Instagram" /></a>
                                    <a href="https://www.threads.net/@moises_script" target="blank"><img src="/asset/img/ico-threads.svg" alt="Threads" /></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-Oswald font-bold text-[20px]">Contacto</h4>
                            <ul className="text-linkoff font-Inter font-normal text-[16px] mt-[35px] leading-loose">
                                <li><a href="tel:+56977658072">+56 9 77 65 80 72</a></li>
                                <li><a href="mailto:moiselias7@gmail.com">moiselias7@gmail.com</a></li>
                                <li>Santiago Centro</li>
                                <li><a href="http://github.com/comicway">github.com/comicway</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-Oswald font-bold text-[20px]">Mapa del Sitio</h4>
                            <ul className="text-linkoff font-Inter font-normal text-[16px] mt-[35px] leading-loose">
                                <Link href='/'><li>Home CV</li></Link>
                                <Link href='/proyectos'><li>Proyectos</li></Link>
                                <Link href='/blog'><li>Blog</li></Link>
                                <Link href='/contacto'><li>Contacto</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-5 border-t border-custom-gray pt-[30px]">
                        <div className="sm:col-span-5">
                            <p className="font-Inter font-normal text-white">Diseñado y desarrollado por <span className="font-bold text-naranjo">Moisés Contreras</span></p>
                        </div>
                        <div>
                            <p className="font-Inter font-normal text-white">Copyright ©2025</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterScript