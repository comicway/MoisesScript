const Contacto = () => {
    return (
        <>
            <section className='container mx-auto border-b border-azulbrillante pb-[17px]'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-h1pagina mt-28">FORMULARIO DE CONTACTO</h1>
                <h2 className="font-light font-Oswald text-azulbrillante text-[111px]">deja tu mensaje aquí</h2>
            </section>
            <form className="container mx-auto">
                    <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <input placeholder="Nombre" type="text" name="nombre" id="nombre" autoComplete="given-name" className="mt-[135px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <input placeholder="Teléfono" type="telt" name="telefono" id="telefono" autoComplete="given-tel" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <input placeholder="Email" type="email" name="email" id="email" autoComplete="given-email" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <textarea placeholder="Mensaje" name="about" id="about" rows="6" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="h-[38px] max-w-2xl w-full mt-[21px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]">Enviar</button>
                    </div>
             </form>
        </>
    )
}
export default Contacto