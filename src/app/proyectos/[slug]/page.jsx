import { notFound } from 'next/navigation';
import ComicApp from '../../components/ComicApp';
import ToomicsApp from '../../components/ToomicsApp';
import MegaBook from '../../components/MegaBook';
import OdisyShoot from '../../components/OdisyShoot';
import RoverPhotoApp from '../../components/RoverPhotoApp';

// 1. Mapeo de datos: Relaciona cada slug con su componente y sus metadatos
const projectData = {
  "comicapp": {
    component: ComicApp,
    title: "Caso de Estudio: ComicApp | Diseño UX / UI",
    description: "Descubre el proceso de diseño UX / UI detrás de ComicApp. Investigación, prototipado y solución de interfaz para una aplicación de lectura de cómics."
  },
  "toomics": {
    component: ToomicsApp,
    title: "Caso de Estudio: Toomics | Rediseño UX / UI",
    description: "Análisis y propuesta de rediseño UX / UI para la plataforma Toomics. Mejorando la experiencia del usuario y la retención en lectura de webtoons."
  },
  "megabook": {
    component: MegaBook,
    title: "Caso de Estudio: MegaBook | UX UI y Frontend",
    description: "Proyecto de experiencia de usuario (UX) e interfaz (UI) para MegaBook. Una aplicación para motivar buenos hábitos de lectura."
  },
  "odisyshoot": {
    component: OdisyShoot,
    title: "Caso de Estudio: OdisyShoot | Diseño de Interfaz",
    description: "Conoce el trabajo de experiencia de usuario y diseño UI realizado para OdisyShoot. Creando interfaces interactivas y visualmente atractivas."
  },
  "roverphotoapp": {
    component: RoverPhotoApp,
    title: "Caso de Estudio: Rover Photo App | UX / UI Móvil",
    description: "Diseño UX / UI para la aplicación móvil Rover Photo App. Optimizando la experiencia fotográfica y el flujo de navegación para usuarios en dispositivos móviles."
  }
};

// 2. generateStaticParams: Le dice a Next.js qué URLs pre-renderizar en Build Time
export const dynamicParams = false; // Solo genera páginas definidas en generateStaticParams
export function generateStaticParams() {
  return [
    { slug: 'comicapp' },
    { slug: 'toomics' },
    { slug: 'megabook' },
    { slug: 'odisyshoot' },
    { slug: 'roverphotoapp' }
  ];
}

// 3. generateMetadata: Inyecta los Meta Tags dinámicamente según el slug
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projectData[resolvedParams.slug];

  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://www.moises-script.cl/proyectos/${resolvedParams.slug}`,
    },
  };
}

// 4. Componente Principal (Debe ser async)
export default async function ProjectDynamicPage({ params }) {
  const resolvedParams = await params;
  const project = projectData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return <project.component />;
}
