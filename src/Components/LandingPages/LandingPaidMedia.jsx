import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';

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

const LandingPaidMedia = () => {
    const [currentText, setCurrentText] = useState("Google Ads");
    const texts = ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(prevText => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 3000);

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <>
            <div className="container mx-auto px-2">
                <h2 className="font-bold font-Oswald uppercase text-naranjo mt-28 text-[70px] sm:text-h1pagina ">Necesitas ayuda con:</h2>
                <h1 className="font-Oswald text-azulbrillante text-[69px] border-b border-azulbrillante mb-6 w-[360px] sm:w-[580px] sm:text-h1pagina">{currentText}</h1>
            </div>
            <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-5 mt-24">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                        <div className="p-5">
                            <img src="./asset/img/moisescontreras.png" alt="" />
                        </div>
                        <div className="p-5 sm:col-span-3">
                            <p className="font-Inter text-letrablanca text-lg mb-4">Hola, mi nombre es Moisés, soy especialista en Paid Media con más de 4 años de experiencia creando y gestionando campañas publicitarias dentro de la plataforma de Google Ads y Meta Business Suite.</p>
                            <p className="font-Inter text-letrablanca text-lg mb-4">Dentro del marketing digital vas a encontrar un abanico de herramientas que pueden potenciar el rendimiento económico de tu negocio. Si estás solo en tu emprendimiento o empresa, delega; no lo hagas tú si no conoces del área.</p>
                            <p className="font-Inter text-letrablanca text-lg mb-4">Confía en mí y contrátame. Te haré ahorrar mucho tiempo y dinero a la hora de administrar tus campañas publicitarias en internet.</p>
                            <p className="font-Inter text-letrablanca text-lg">Conmigo vas a encontrar al mejor aliado, con conocimientos sólidos en marketing digital, programación y diseño.</p>
                            <p className="font-Inter text-letrablanca text-lg">Sigue leyendo esta landing y contáctame.</p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="container mx-auto mt-[80px]">  
                <div className="grid grid-cols-1">
                    <h2 className="text-naranjo font-medium font-Oswald uppercase text-[53px] sm:text-[65px] text-center">Plataformas de publicidad online pagas</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mt-[65px]">
                    <div>
                        <img src="./asset/img/google-ads-logo.svg" className="sm:w-[60%] w-[30%] mx-auto"/>
                        <p className="font-Oswald text-letrablanca text-[25px] mt-2 text-center">Google Ads</p>
                    </div>
                    <div>
                        <img src="./asset/img/meta-ads-logo.svg" className="sm:w-[60%] w-[30%] mx-auto"/>
                        <p className="font-Oswald text-letrablanca text-[25px] mt-2 text-center">Meta Bussines Suite</p>
                    </div>
                    <div>
                        <img src="./asset/img/tiktok-ads-logo.svg" className="sm:w-[60%] w-[30%] mx-auto"/>
                        <p className="font-Oswald text-letrablanca text-[25px] mt-2 text-center">TitTok for Bussines</p>
                    </div>
                    <div>
                        <img src="./asset/img/linkedIn-ads-logo.svg" className="sm:w-[60%] w-[30%] mx-auto"/>
                        <p className="font-Oswald text-letrablanca text-[25px] mt-2 text-center">LinkedIn Ads</p>
                    </div>
                </div>
                <h3 className="text-naranjo font-light font-Oswald text-[33px] sm:text-[55px] text-left mt-[70px]">Aumenta el retorno de inversión de tu negocio, con algunas de estas herramientas.</h3>
                <h4 className="text-white font-light font-Oswald text-[13px] sm:text-[35px] text-left mt-[10px]">Contrata un especialista:</h4>
                <Formik
                initialValues={{
                    nombre: "",
                    telefono: "",
                    email: "",
                    about: "",
                }}
                validate={validate} 
                    onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const response = await axios.post('/api/sendEmail', values);
                        console.log('Email enviado:', response.data);
                    } catch (error) {
                        console.error('Error al enviar el email:', error);
                    }
                    setSubmitting(false);
                    console.log(values)
                }}
                
            >
                <Form>
                    <div className="flex justify-center">
                        <Field name="nombre" type="text" placeholder="Nombre*"  className="mt-[20px] max-w-2xl w-full rounded-sm bg-[#1E293B] px-3 py-1.5 text-base text-white font-Inter outline outline-1 -outline-offset-1 outline-fondobtnmenu placeholder:text-azulbrillante focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-azulbrillante sm:text-sm/6"/>
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
            </section>
            <section className="mt-[80px] pt-[72px] pb-[65px] border-t-4 border-azulbrillante bg-[#D96E11]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                    <h2 className="text-[#071226] font-medium font-Oswald text-[43px] sm:text-[55px] text-left">Sabias que; el ROAS en tu tienda online puede aumentar en un 20% si tienes una estrategia de marketing basada en un embudo de conversión.</h2>    
                    </div>
                </div>
            </section>
            <section className="container mx-auto mt-[80px]">  
                <div className="grid grid-cols-1">
                        <h2 className="text-naranjo font-medium font-Oswald uppercase text-[53px] sm:text-[65px] text-center">Certificado en Google y Meta</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[65px]">
                    <div>
                        <img src="./asset/img/google-ads-logo.svg" className="sm:w-[60%] w-[30%] mx-auto"/>
                        <p className="font-Oswald text-letrablanca text-[25px] mt-2 text-center">Red de Búsqueda</p>
                    </div>
                    <div>
                        <img src="./asset/img/meta-ads-logo.svg" className="sm:w-[60%] w-[30%] mx-auto"/>
                        <p className="font-Oswald text-letrablanca text-[25px] mt-2 text-center">Red de Display</p>
                    </div>
                    <div>
                        <img src="./asset/img/tiktok-ads-logo.svg" className="sm:w-[60%] w-[30%] mx-auto"/>
                        <p className="font-Oswald text-letrablanca text-[25px] mt-2 text-center">Asociado de marketing digital</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LandingPaidMedia;