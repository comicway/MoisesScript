const FooterScript = () => {
    return (
        <>
        <section className="mt-[80px] pt-[72px] pb-[65px] border-t-4 border-azulbrillante">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
                    <div className="sm:col-span-5">
                        <h3 className="text-white font-medium font-Oswald text-[42px]">Este es el momento de contactarme</h3>
                        <p className="text-white font-medium font-Inter text-[16px]">¡No dudes en ponerte en contacto conmigo o simplemente saludarme!</p>
                    </div>
                    <button className="w-[159px] h-[54px] bg-azulbrillante font-bold font-Inter text-[18px] mt-[26px]">Escríbeme</button>
                </div>
            </div> 
        </section>
        <footer className="pt-[50px] pb-[35px] bg-black">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 pb-[16px]">
                    <div className="sm:col-span-2">
                        <div className="flex flex-col">
                            <img src="./asset/img/logomoisesscript.svg" alt="logo moises.script" className="self-start w-auto h-auto mb-[122px]" />
                            <div className="flex mt-auto gap-3">
                                <a href="http://"><img src="./asset/img/ico-github.svg" alt="GitHub" /></a>
                                <a href="http://"><img src="./asset/img/ico-instagram.svg" alt="Instagram" /></a>
                                <a href="http://"><img src="./asset/img/ico-threads.svg" alt="Threads" /></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-Oswald font-bold text-[20px]">Contacto</h4>
                        <ul className="text-linkoff font-Inter font-normal text-[16px] mt-[35px] leading-loose">
                            <li><a href="tel:+56977658072">+56 9 7765 8072</a></li>
                            <li><a href="mailto:moiselias7@gmail.com">moiselias7@gmail.com</a></li>
                            <li>Quinta Normal</li>
                            <li><a href="http://github.com/comicway">github.com/comicway</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-Oswald font-bold text-[20px]">Mapa del Sitio</h4>
                        <ul className="text-linkoff font-Inter font-normal text-[16px] mt-[35px] leading-loose">
                            <li>Home CV</li>
                            <li>Proyectos</li>
                            <li>Blog</li>
                            <li>Contacto</li>
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