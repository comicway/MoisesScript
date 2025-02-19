const Contacto = () => {
    return (
        <>
            <section className='container mx-auto border-b border-azulbrillante pb-[17px]'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-h1pagina mt-28">FORMULARIO DE CONTACTO</h1>
                <h2 className="font-light font-Oswald text-azulbrillante text-[111px]">deja tu mensaje aquí</h2>
            </section>
            <form className="container mx-auto">
                <div className="grid grid-cols-1 justify-center">
                    <label for="nombre" classNams="block text-sm/6 font-medium text-gray-900"></label>
                    <div>
                        <input placeholder="Nombre" type="text" name="nombre" id="nombre" autocomplete="given-name" className="mt-[135px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <label for="nombre" classNams="block text-sm/6 font-medium text-gray-900"></label>
                    <div>
                        <input placeholder="Teléfono" type="telt" name="telefono" id="telefono" autocomplete="given-tel" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <label for="nombre" classNams="block text-sm/6 font-medium text-gray-900"></label>
                    <div>
                        <input placeholder="Email" type="email" name="email" id="email" autocomplete="given-email" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <label for="nombre" classNams="block text-sm/6 font-medium text-gray-900"></label>
                    <div>
                        <textarea placeholder="Mensaje" name="about" id="about" rows="6" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"></textarea>
                    </div>
                    <button type="submit" class="mt-[21px] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                </div>
             </form>
        </>
    )
}
export default Contacto