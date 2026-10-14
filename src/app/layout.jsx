import { Oswald, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import HeaderScript from "../Components/Header/Header";
import FooterScript from "../Components/Footer/Footer";
import ScrollUpButton from "../Components/ScrollUpButton/ScrollUpButton";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.moises-script.cl"),
  title: "Servicios de Diseño UX / UI | Moises Script",
  description: "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales. Diseñamos interfaces intuitivas y atractivas que mejoran la interacción del usuario y potencian tu marca.",
  keywords: ["diseño ux", "diseño ui", "front end", "react", "next js"],
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
    title: "Servicios de Diseño UX / UI | Moises Script",
    description: "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales.",
    url: "https://www.moises-script.cl",
    siteName: "Moises Script",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moises Script - Diseño UX/UI",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Diseño UX / UI | Moises Script",
    description: "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales.",
    images: ["/og-image.jpg"],
    creator: "@moises_script",
  },
  icons: {
    icon: "/favimoises.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD: GEO Schema Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.moises-script.cl/#person",
                  "name": "Moisés Contreras",
                  "alternateName": "Moises Script",
                  "description": "Diseñador UX/UI y Frontend Developer chileno. Escribe sobre experiencia de usuario, metodologías ágiles, analítica UX e inteligencia artificial aplicada al diseño.",
                  "url": "https://www.moises-script.cl",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://www.moises-script.cl/moisescontreras.webp",
                    "width": 800,
                    "height": 800
                  },
                  "jobTitle": "Diseñador UX / UI & Frontend Developer",
                  "nationality": { "@type": "Country", "name": "Chile" },
                  "knowsAbout": ["Diseño UX", "Diseño UI", "Frontend Development", "React", "Next.js", "Metodologías ágiles", "Analítica web", "Ingeniería de prompts"],
                  "worksFor": { "@id": "https://www.moises-script.cl/#organization" },
                  "mainEntityOfPage": { "@id": "https://www.moises-script.cl/#webpage" },
                  "sameAs": [
                    "https://www.instagram.com/moises_script/",
                    "https://www.threads.com/@moises_script",
                    "https://www.linkedin.com/in/moises-script/",
                    "https://github.com/comicway"
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.moises-script.cl/#organization",
                  "name": "Moises Script",
                  "alternateName": "Moises Script UX/UI",
                  "url": "https://www.moises-script.cl",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.moises-script.cl/favimoises.svg"
                  },
                  "founder": { "@id": "https://www.moises-script.cl/#person" },
                  "foundingLocation": { "@type": "Place", "name": "Chile" },
                  "description": "Servicios de diseño UX/UI y desarrollo frontend enfocado en crear experiencias digitales excepcionales.",
                  "sameAs": [
                    "https://www.instagram.com/moises_script/",
                    "https://www.linkedin.com/in/moises-script/",
                    "https://github.com/comicway"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.moises-script.cl/#website",
                  "url": "https://www.moises-script.cl",
                  "name": "Moises Script",
                  "description": "Servicios profesionales de diseño UX/UI y artículos de diseño de experiencia de usuario.",
                  "inLanguage": "es-CL",
                  "author": { "@id": "https://www.moises-script.cl/#person" },
                  "publisher": { "@id": "https://www.moises-script.cl/#organization" }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.moises-script.cl/#service",
                  "name": "Moises Script – Servicios UX/UI",
                  "url": "https://www.moises-script.cl",
                  "description": "Servicios profesionales de diseño UX/UI para crear experiencias digitales excepcionales. Diseñamos interfaces intuitivas y atractivas que mejoran la interacción del usuario y potencian tu marca.",
                  "provider": { "@id": "https://www.moises-script.cl/#organization" },
                  "areaServed": "CL",
                  "inLanguage": "es-CL",
                  "serviceType": ["Diseño UX", "Diseño UI", "Frontend Development"]
                }
              ]
            })
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6R2JKNM');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6R2JKNM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>
          <HeaderScript />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <FooterScript />
        <Suspense fallback={null}>
          <ScrollUpButton />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
