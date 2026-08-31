import { Oswald, Inter } from "next/font/google";
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
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <HeaderScript />
        </Suspense>
        {children}
        <FooterScript />
        <Suspense fallback={null}>
          <ScrollUpButton />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
