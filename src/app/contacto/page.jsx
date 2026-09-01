import ContactoClient from "./ContactoClient";

export const metadata = {
  title: "Contacto | Moises Script",
  description: "¿Tienes un proyecto en mente? Contáctame para servicios profesionales de diseño UX/UI y desarrollo frontend. Hablemos de tus ideas.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function Page() {
  return <ContactoClient />;
}
