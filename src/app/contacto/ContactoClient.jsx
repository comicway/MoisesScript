"use client";
import dynamic from "next/dynamic";

const Contacto = dynamic(() => import("../../Components/Contacto/Contacto"), {
  ssr: false,
  loading: () => (
    <div className="container mx-auto mt-28 text-azulbrillante font-Oswald text-center">
      Cargando formulario...
    </div>
  ),
});

export default function ContactoClient() {
  return <Contacto />;
}
