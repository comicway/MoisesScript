import Link from "next/link";

const ProyectosRecientes = () => {
    return (
        <>
            <section className="bg-gradient-to-tr from-[#456173] to-[#45617300] mt-[83px] sm:mt-[140px] pt-[47px] sm:pt-[104px] pb-[125px] border-b-4 border-azulbrillante">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="px-5">
                            <span className="text-white font-Oswald font-bold text-[22px]">Mis proyectos recientes</span>
                            <div className="sm:flex sm:justify-between sm:items-end">
                                <h2 className="text-naranjo font-medium font-Oswald uppercase text-[53px] sm:text-[65px]">Mira mi portafolio</h2>
                                <Link href='/proyectos' className="ml-auto">
                                    <button className="h-[38px] w-[114px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px] hidden sm:block">Ver todos</button>
                                </Link>
                                <div className="flex justify-end">
                                    <Link href='/proyectos'>
                                        <button className="h-[38px] w-[114px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px] block sm:hidden">Ver todos</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-[45px] sm:mt-[117px] px-2">
                        <div className="mt-[20px] sm:mt-[98px]">
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="/asset/img/portadaMegaBook.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">App MegaBook</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI, Frontend</span>
                                <div className="flex justify-between">
                                    <Link href='/proyectos/megabook'>
                                        <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                    </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] sm:mt-[98px]">
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="/asset/img/portadaroverapp.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Rover Photo App</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Frontend</span>
                                <div className="flex justify-between">
                                    <Link href='/proyectos/roverphotoapp'>
                                        <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                    </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="/asset/img/portadacomicapp.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Comic App</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                    <Link href='/proyectos/comicapp'>
                                        <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                    </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="/asset/img/portadatoomics.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Rediseño App Toomics</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                    <Link href='/proyectos/toomics'>
                                        <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                    </Link>
                                    <img className="pl-1" src="/asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProyectosRecientes