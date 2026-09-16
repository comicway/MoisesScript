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
