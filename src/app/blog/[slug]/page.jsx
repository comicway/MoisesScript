import { notFound } from 'next/navigation';
import NichoUx from '../../components/NichoUx';
import UxProba from '../../components/UxProba';
import QueEsDisenoUXUI from '../../components/QueEsDisenoUXUI';
import AgileMarketing from '../../components/AgileMarketing';
import AnaliticaMetricaUX from '../../components/AnaliticaMetricaUX';
import VibeCodingVsInge from '../../components/VibeCodingVsInge';

// 1. Mapeo de artículos del blog
const blogData = {
  "nichoux": {
    component: NichoUx,
    title: "¿Qué es un Nicho en UX? | Artículo de Diseño",
    description: "Aprende sobre la importancia de definir un nicho en el diseño UX. Estrategias, ventajas y cómo especializarte para destacar en la industria tecnológica.",
    datePublished: "2025-03-07",
    dateModified: "2025-03-07",
    keywords: ["nicho UX", "diseño UX", "especialización diseñador", "UX UI Chile"]
  },
  "diseno-ux-y-probabiliades": {
    component: UxProba,
    title: "Diseño UX y Probabilidades | Análisis y Estrategia",
    description: "Un análisis profundo sobre cómo aplicar la estadística y las probabilidades en la toma de decisiones para el Diseño de Experiencia de Usuario (UX).",
    datePublished: "2026-05-09",
    dateModified: "2026-05-09",
    keywords: ["diseño UX", "probabilidades", "estadística", "toma de decisiones UX", "analítica UX"]
  },
  "que-es-diseno-ux-ui": {
    component: QueEsDisenoUXUI,
    title: "¿Qué es Diseño UX y UI? | Definición práctica",
    description: "Descubre qué es el Diseño UX / UI desde una perspectiva realista y práctica. Aprende a equilibrar la experiencia de usuario con la rentabilidad del negocio.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    keywords: ["qué es diseño UX", "qué es diseño UI", "experiencia de usuario", "UX UI Chile"]
  },
  "metodos-agiles-y-el-marketing": {
    component: AgileMarketing,
    title: "¿Cómo los métodos ágiles pueden potenciar tus campañas de marketing digital?",
    description: "Aprende a aplicar métodos ágiles, Lean UX y Design Sprint en marketing digital para optimizar conversiones, validar hipótesis y minimizar riesgos.",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    keywords: ["métodos ágiles", "marketing digital", "Lean UX", "Design Sprint", "agile marketing"]
  },
  "analitica-y-metricas-ux": {
    component: AnaliticaMetricaUX,
    title: "Piérdele el miedo a las métricas del diseño UX | Algunos consejos",
    description: "Aprende a perderle el miedo a los números y domina los tipos de datos, estadística descriptiva y las métricas UX más usadas.",
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    keywords: ["métricas UX", "analítica web", "estadística descriptiva", "diseño UX datos"]
  },
  "vibe-coding-vs-ingenieria-de-prompts": {
    component: VibeCodingVsInge,
    title: "Vibe coding para diseñadores UX / UI, ¡NO!, mejor usa Ingeneria de Prompt",
    description: "Aprende a sustituir el vibe coding por la ingeniería de prompts. Potencia tu flujo de trabajo UX con mejores instrucciones, modelos locales e IDEs agénticos.",
    datePublished: "2026-10-09",
    dateModified: "2026-10-09",
    keywords: ["vibe coding", "ingeniería de prompts", "IA diseño UX", "prompt engineering", "LLM diseñadores"]
  }
};

// 2. generateStaticParams: Pre-renderizado en Build Time
export const dynamicParams = false; // Solo genera páginas definidas en generateStaticParams
export function generateStaticParams() {
  return [
    { slug: 'nichoux' },
    { slug: 'diseno-ux-y-probabiliades' },
    { slug: 'que-es-diseno-ux-ui' },
    { slug: 'metodos-agiles-y-el-marketing' },
    { slug: 'analitica-y-metricas-ux' },
    { slug: 'vibe-coding-vs-ingenieria-de-prompts' }
  ];
}

// 3. Metadatos dinámicos
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogData[resolvedParams.slug];
  const slug = resolvedParams.slug;

  if (!post) {
    return { title: 'Artículo no encontrado' };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [
      {
        name: "Moisés Contreras",
        url: "https://www.moises-script.cl",
      },
    ],
    alternates: {
      canonical: `https://www.moises-script.cl/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.moises-script.cl/blog/${slug}`,
      siteName: "Moises Script",
      locale: "es_CL",
      type: "article",
      article: {
        publishedTime: post.datePublished,
        modifiedTime: post.dateModified,
        authors: ["https://www.moises-script.cl"],
        tags: post.keywords,
      },
      images: [
        {
          url: "/moisescontreras.webp",
          width: 800,
          height: 800,
          alt: `${post.title} - Moisés Contreras`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@moises_script",
      images: ["/moisescontreras.webp"],
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

  const slug = resolvedParams.slug;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.moises-script.cl/blog/${slug}/#blogposting`,
    "headline": post.title,
    "description": post.description,
    "url": `https://www.moises-script.cl/blog/${slug}`,
    "inLanguage": "es-CL",
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "keywords": post.keywords,
    "image": "https://www.moises-script.cl/moisescontreras.webp",
    "author": {
      "@id": "https://www.moises-script.cl/#person"
    },
    "publisher": {
      "@id": "https://www.moises-script.cl/#website"
    },
    "isPartOf": {
      "@id": "https://www.moises-script.cl/#website"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <post.component />
    </>
  );
}
