import React from 'react'

const ProyectoPage = () => {
    return (
        <>
            <div className='container mx-auto'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-h1pagina mt-28">Mira Mis Proyectos</h1>
                <div className='flex flex-row items-center border-b border-azulbrillante pb-[17px]'>
                        <button className='border-4 rounded-full border-colorborder bg-fondobtnmenu font-Oswald font-normal text-[22px] text-white p-1 w-[188px] mr-2'>DISEÑO UX / UI</button>
                        <button className='border rounded-full border-colorborder font-Oswald font-normal text-[22px] text-white p-1 w-[274px] mr-2'>DESARROLLO FRONTEND</button>
                        <button className='border rounded-full border-colorborder font-Oswald font-normal text-[22px] text-white p-1 w-[274px]'>VIDEOJUEGOS</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-9">
                    <div className='mt-[90px]'>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-end mt-2">
                            <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                            <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                        </div>
                    </div>
                    <div className='mt-[90px]'>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-end mt-2">
                            <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                            <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                        </div>
                    </div>
                    <div className='mt-[90px]'>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-end mt-2">
                            <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                            <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                        </div>
                    </div>
                    <div className='mt-[90px]'>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-end mt-2">
                            <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                            <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                        </div>
                    </div>
                    <div className='mt-[90px]'>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-end mt-2">
                            <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                            <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                        </div>
                    </div>
                    <div className='mt-[90px]'>
                        <img className="rounded-[20px] h-[330px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                        <h2 className="text-white font-Oswald text-[27px] mt-[45px] border-b border-azulbrillante pb-[28px]">Titulo de proyecto 1</h2>
                        <div className="flex justify-end mt-2">
                            <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                            <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoPage