import { notFound } from 'next/navigation';
import NichoUx from '../../components/NichoUx';
import UxProba from '../../components/UxProba';
import QueEsDisenoUXUI from '../../components/QueEsDisenoUXUI';
import AgileMarketing from '../../components/AgileMarketing';



// 1. Mapeo de artículos del blog
const blogData = {
  "nichoux": {
    component: NichoUx,
    title: "¿Qué es un Nicho en UX? | Artículo de Diseño",
    description: "Aprende sobre la importancia de definir un nicho en el diseño UX. Estrategias, ventajas y cómo especializarte para destacar en la industria tecnológica."
  },
  "diseno-ux-y-probabiliades": {
    component: UxProba,
    title: "Diseño UX y Probabilidades | Análisis y Estrategia",
    description: "Un análisis profundo sobre cómo aplicar la estadística y las probabilidades en la toma de decisiones para el Diseño de Experiencia de Usuario (UX)."
  },
  "que-es-diseno-ux-ui": {
    component: QueEsDisenoUXUI,
    title: "¿Qué es Diseño UX y UI? | Definición práctica",
    description: "Descubre qué es el Diseño UX / UI desde una perspectiva realista y práctica. Aprende a equilibrar la experiencia de usuario con la rentabilidad del negocio."
  },
  "metodos-agiles-y-el-marketing": {
    component: AgileMarketing,
    title: "¿Cómo los métodos ágiles pueden potenciar tus campañas de marketing digital?",
    description: "Aprende a aplicar métodos ágiles, Lean UX y Design Sprint en marketing digital para optimizar conversiones, validar hipótesis y minimizar riesgos."
  }
};

// 2. generateStaticParams: Pre-renderizado en Build Time
export const dynamicParams = false; // Solo genera páginas definidas en generateStaticParams
export function generateStaticParams() {
  return [
    { slug: 'nichoux' },
    { slug: 'diseno-ux-y-probabiliades' },
    { slug: 'que-es-diseno-ux-ui' },
    { slug: 'metodos-agiles-y-el-marketing' }
  ];
}

// 3. Metadatos dinámicos
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogData[resolvedParams.slug];

  if (!post) {
    return { title: 'Artículo no encontrado' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.moises-script.cl/blog/${resolvedParams.slug}`,
    },
  };
}

// 4. Componente Principal
export default async function BlogDynamicPage({ params }) {
  const resolvedParams = await params;
  const post = blogData[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return <post.component />;
}
