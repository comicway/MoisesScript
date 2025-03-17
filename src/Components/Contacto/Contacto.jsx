import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = "El nombre es requerido";
    } else if (!/^[A-Za-z\s]+$/.test(values.nombre)) {
        errors.nombre = "El nombre debe contener solo letras";
    }
    if (!values.telefono) {
        errors.telefono = "El teléfono es requerido";
    } else if (!/^[\d\s+]+$/.test(values.telefono)) {
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

    return (
        <>
            <section className='container mx-auto border-b border-azulbrillante pb-[17px]'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-h1pagina mt-28">FORMULARIO DE CONTACTO</h1>
                <h2 className="font-light font-Oswald text-azulbrillante text-[111px]">deja tu mensaje aquí</h2>
            </section>
            <Formik
                initialValues={{
                    nombre: "",
                    telefono: "",
                    email: "",
                    about: "",
                }}
                validate={validate}
                onSubmit={ values  => console.log(values) }
            >
                <Form className="container mx-auto">
                    <div className="flex justify-center">
                        <Field name="nombre" type="text" placeholder="Nombre*"  className="mt-[135px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <div className="text-[#BF3A0A] flex justify-center">
                        <ErrorMessage name="nombre"/>
                    </div>
                    <div className="flex justify-center">
                        <Field name="telefono" placeholder="Teléfono*" type="telt" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <div className="text-[#BF3A0A] flex justify-center">
                        <ErrorMessage name="telefono"/>
                    </div>
                    <div className="flex justify-center">
                        <Field name="email" placeholder="Email*" type="email" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <div className="text-[#BF3A0A] flex justify-center">
                        <ErrorMessage name="email"/>
                    </div>
                    <div className="flex justify-center">
                        <Field name="about" placeholder="Mensaje*" as="textarea" rows="6" className="mt-[12px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
                    </div>
                    <div className="text-[#BF3A0A] flex justify-center">
                        <ErrorMessage name="about"/>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="h-[38px] max-w-2xl w-full mt-[21px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]"
                        >Enviar</button>
                    </div>
                </Form>
             </Formik>
        </>
    )
}
export default Contacto