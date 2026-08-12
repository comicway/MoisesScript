import ArticuloInterno from "../../Components/ArticuloInterno/ArticuloInterno";

export const metadata = {
  title: "Artículos Internos | Moises Script",
  description: "Artículos y reflexiones sobre diseño UX/UI, desarrollo frontend y tendencias tecnológicas.",
  alternates: {
    canonical: "/articulointerno",
  },
};

export default function Page() {
  return <ArticuloInterno />;
}
