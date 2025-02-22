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
                            <button className="h-[38px] w-[114px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px] hidden sm:block ml-auto">Ver todos</button>
                            <div className="flex justify-end">
                                <button className="h-[38px] w-[114px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px] block sm:hidden">Ver todos</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-[45px] sm:mt-[117px] px-2">
                    <div className="mt-[20px]">
                        <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Categoria</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Categoria</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] sm:mt-[98px]">
                        <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Categoria</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] sm:mt-[98px]">
                        <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Categoria</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
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