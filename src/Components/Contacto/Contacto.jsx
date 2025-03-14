import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = "El nombre es requerido";
    } else if (!/^[A-Za-z]+$/.test(values.nombre)) {
        errors.nombre = "El nombre debe contener solo letras";
    }
    if (!values.telefono) {
        errors.telefono = "El teléfono es requerido";
    } else if (!/^\d+$/.test(values.telefono)) {
        errors.telefono = "El teléfono debe contener solo números";
    }
    if (!values.email) {
        errors.email = "El email es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "El email no es válido";
    }
    if (!values.about) {
        errors.about = "El mensaje es requerido";
    } 
    return errors;
};

const Contacto = () => {

    const formik = useFormik({
        initialValues: {
            nombre: '',
            telefono: '',
            email: '',
            about: '',
        },
        validate,
        onSubmit: (values) => console.log(values)
    });

    return (
        <>
            <section className='container mx-auto border-b border-azulbrillante pb-[17px]'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-h1pagina mt-28">FORMULARIO DE CONTACTO</h1>
                <h2 className="font-light font-Oswald text-azulbrillante text-[111px]">deja tu mensaje aquí</h2>
            </section>
            <form onSubmit={formik.handleSubmit} className="container mx-auto">
                    <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <input 
                            type="text"
                            placeholder="Nombre"
                            {...formik.getFieldProps('nombre')}
                            className="mt-[135px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    {formik.touched.nombre && formik.errors.nombre ? <div className="text-red-500 flex justify-center">{formik.errors.nombre}</div> : null}
                    <label htmlFor="telefono" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <input
                            placeholder="Teléfono"
                            type="telt"
                            {...formik.getFieldProps('telefono')}
                            className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    {formik.touched.telefono && formik.errors.telefono ? <div className="text-red-500 flex justify-center">{formik.errors.telefono}</div> : null}
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <input
                            placeholder="Email"
                            type="email"
                            {...formik.getFieldProps('email')}
                            className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    {formik.touched.email && formik.errors.email ? <div className="text-red-500 justify-center">{formik.errors.email}</div> : null}
                    <label htmlFor="mensaje" className="block text-sm/6 font-medium text-gray-900"></label>
                    <div className="flex justify-center">
                        <textarea
                            placeholder="Mensaje"
                            {...formik.getFieldProps('about')}
                            rows="6"
                            className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"></textarea>
                    </div>
                    {formik.touched.about && formik.errors.about ? <div className="text-red-500 justify-center">{formik.errors.about}</div> : null}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="h-[38px] max-w-2xl w-full mt-[21px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]"
                        >Enviar</button>
                    </div>
             </form>
        </>
    )
}
export default Contacto