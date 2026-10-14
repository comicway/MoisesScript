import HomePage from "../Components/Home/Home";

export const metadata = {
  title: "Servicios de Diseño UX / UI | Moisés Contreras",
  description: "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales. Diseñamos interfaces intuitivas y atractivas que mejoran la interacción del usuario y potencian tu marca.",
  keywords: ["diseño UX", "diseño UI", "frontend developer Chile", "UX UI Chile", "experiencia de usuario"],
  authors: [
    {
      name: "Moisés Contreras",
      url: "https://www.moises-script.cl",
    },
  ],
  creator: "Moisés Contreras",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Servicios de Diseño UX / UI | Moisés Contreras",
    description: "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales. Diseñamos interfaces intuitivas y atractivas que mejoran la interacción del usuario y potencian tu marca.",
    url: "https://www.moises-script.cl",
    siteName: "Moises Script",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moises Script - Diseño UX/UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Diseño UX / UI | Moisés Contreras",
    description: "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales.",
    creator: "@moises_script",
    images: ["/og-image.jpg"],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.moises-script.cl/#webpage",
  "url": "https://www.moises-script.cl",
  "name": "Servicios de Diseño UX / UI | Moisés Contreras",
  "description": "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales.",
  "inLanguage": "es-CL",
  "isPartOf": { "@id": "https://www.moises-script.cl/#website" },
  "about": { "@id": "https://www.moises-script.cl/#service" },
  "author": { "@id": "https://www.moises-script.cl/#person" }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomePage />
    </>
  );
}
