const BlogRecientes = () => {
    return (
        <>
            <section className="container mx-auto mt-[140px] pt-[104px] pb-[125px]">
                <div className="grid grid-cols-1">
                    <div className="px-5">
                        <span className="text-white font-Oswald font-bold text-[22px]">Mis blogs recientes</span>
                        <div className="flex justify-between items-end">
                            <h2 className="text-naranjo font-medium font-Oswald uppercase text-[65px]">Mira mi blog</h2>
                            <button className="h-[38px] w-[114px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]">Ver todos</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-[117px]">
                    <div>
                        <img className="rounded-[20px] h-[507px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b-4 border-azulbrillante pb-[28px]">Titulo del articulo 1</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Categoria</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Leer entrada</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-[20px] h-[507px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b-4 border-azulbrillante pb-[28px]">Titulo del articulo 2</h2>
                        <div className="flex justify-between items-end mt-3">
                            <span className="text-white font-Oswald text-[18px]">Categoria</span>
                            <div className="flex justify-between">
                                <button className="text-azulbrillante font-Inter font-medium text-[20px]">Leer Entrada</button>
                                <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BlogRecientes