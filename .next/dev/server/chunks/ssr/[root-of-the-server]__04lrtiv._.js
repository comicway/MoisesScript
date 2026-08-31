module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/blog/[slug]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogDynamicPage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NichoUx$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/NichoUx.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UxProba$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UxProba.jsx [app-rsc] (ecmascript)");
;
;
;
;
// 1. Mapeo de artículos del blog
const blogData = {
    "nichoux": {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NichoUx$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        title: "¿Qué es un Nicho en UX? | Artículo de Diseño",
        description: "Aprende sobre la importancia de definir un nicho en el diseño UX. Estrategias, ventajas y cómo especializarte para destacar en la industria tecnológica."
    },
    "diseno-ux-y-probabiliades": {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UxProba$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        title: "Diseño UX y Probabilidades | Análisis y Estrategia",
        description: "Un análisis profundo sobre cómo aplicar la estadística y las probabilidades en la toma de decisiones para el Diseño de Experiencia de Usuario (UX)."
    }
};
const dynamicParams = false; // Solo genera páginas definidas en generateStaticParams
function generateStaticParams() {
    return [
        {
            slug: 'nichoux'
        },
        {
            slug: 'diseno-ux-y-probabiliades'
        }
    ];
}
async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = blogData[resolvedParams.slug];
    if (!post) {
        return {
            title: 'Artículo no encontrado'
        };
    }
    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `https://www.moises-script.cl/blog/${resolvedParams.slug}`
        }
    };
}
async function BlogDynamicPage({ params }) {
    const resolvedParams = await params;
    const post = blogData[resolvedParams.slug];
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(post.component, {}, void 0, false, {
        fileName: "[project]/src/app/blog/[slug]/page.jsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/blog/[slug]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[slug]/page.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/components/NichoUx.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const NichoUx = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto border-b border-azulbrillante pb-[17px] px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-[90px] mt-28 leading-none",
                        children: "El nicho: Claves para emprender como Diseñador UX/UI"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/NichoUx.jsx",
                        lineNumber: 5,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white font-medium font-Oswald sm:text-[42px] text-[34px] leading-snug",
                        children: "Identificar tu nicho es importante"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/NichoUx.jsx",
                        lineNumber: 6,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/NichoUx.jsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto mt-[50px] px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-white font-Oswald font-bold text-[16px]",
                                children: "Moises Contreras"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/NichoUx.jsx",
                                lineNumber: 10,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-[13px] font-Oswald font-light",
                                children: "07/03/2025"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/NichoUx.jsx",
                                lineNumber: 10,
                                columnNumber: 115
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/NichoUx.jsx",
                        lineNumber: 10,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/NichoUx.jsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/NichoUx.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "container mx-auto px-2 pb-[60px] sm:max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 grid-cols-1 mt-[25px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "rounded-[20px] py-[15px] w-full object-cover",
                                    src: "/asset/img/nichoux.jpg",
                                    alt: "identificar nichos como diseñador ux"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/NichoUx.jsx",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/NichoUx.jsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px]",
                                        children: "La idea de esta serie de artículos sobre el emprendimiento en Diseño UX / UI surgió a partir de una gran incertidumbre: ¿por qué los cursos, universidades, institutos e incluso influencers enfocan el aprendizaje del Diseño UX únicamente hacia la meta de buscar empleo?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 19,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "A lo largo de mi carrera como Diseñador UX / UI, y siendo un estudiante activo, he notado constantemente esta mentalidad tanto en profesores como en materiales de apoyo, e incluso en influencers relevantes dentro del área. ¿Por qué sucede esto? No tengo una respuesta clara, pero quiero enfocar mis contenidos, tanto en el blog como en redes sociales, hacia un enfoque diferente: el Diseño UX al servicio del emprendimiento."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 20,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "A raíz de lo anterior, y como una introducción general, ya que el emprendimiento en sí es un mundo muy amplio por explorar, quiero abordar varios puntos clave que son fundamentales para quienes deseen seguir este camino."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "Define un nicho o problema específico, pero también sé realista"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Identificar un nicho que presente un problema sin resolver es fundamental para el éxito de cualquier negocio. Esto también aplica si deseas comercializar tus servicios de Diseño UX, ya que, al enfocarte en áreas donde eres experto, no solo ganas valor como profesional, sino que además reduces las posibilidades de enfrentarte a una fuerte competencia, evitando así que el mercado cambie de manera desfavorable para tu negocio."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Es crucial asegurarte de que esa área del mercado realmente constituya un nicho, pues podrías cometer el error de entrar en un mercado que, a los pocos meses, termine saturado. Por esta razón, he preparado estos puntos que pueden ayudarte a identificarlo de manera más efectiva:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "¿Existe una exclusividad?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 26,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Si el producto o servicio es de fácil acceso para ti, es probable que también lo sea para otras personas. La exclusividad aporta valor, pero al mismo tiempo reduce la cantidad de actores en el campo. ¿Cómo se aplica esto al servicio de UX? Es sencillo: primero identifica los sectores del mercado que son más populares y solicitados, como la banca, los restaurantes, entre otros, solo por mencionar algunos ejemplos. Luego, dirige tu atención hacia sectores menos explorados o mencionados. Por ejemplo, aunque la banca en general puede parecer un sector amplio y competitivo, te aseguro que dentro de la banca o los productos financieros existen nichos poco conocidos, pero de gran valor que podrías descubrir y aprovechar."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 27,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/NichoUx.jsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/NichoUx.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 grid-cols-1 mt-[25px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "rounded-[20px] py-[15px] w-full object-cover",
                                    src: "/asset/img/nichoux1.jpg",
                                    alt: "identificar nichos como diseñador ux"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/NichoUx.jsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/NichoUx.jsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "¿Cuántas personas hablan de ese servicio o producto?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 35,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Realiza una investigación, o un research , como prefieras llamarlo, e identifica si ese nicho es popular entre muchas personas o no. Este paso es importante, ya que te permitirá eliminar sesgos y determinar con exactitud qué tan grande es un mercado. Por su temática, un nicho puede parecer pequeño, pero esto podría ser un juicio anticipado que, de no analizarse bien, podría afectar económicamente a tu negocio."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "¿Hay un valor significativo?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "¿Este nicho tiene el valor suficiente para que tu negocio sea rentable? Si lograste identificar un nicho de manera exitosa, es fundamental considerar si los proyectos que adquieras serán suficientes no solo para cubrir tus gastos, sino también para ahorrar o invertir con miras a alcanzar metas a futuro. Esto lo afirmo porque es probable que te encuentres con nichos sobrevalorados en el mercado, donde, al ofrecer tus servicios, los clientes no estén dispuestos a pagar el costo propuesto. Esto sucede cuando algunos mercados son tan pequeños que carecen del poder económico necesario para justificar los servicios de un Diseñador UX."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Lamentablemente, esta situación suele hacerse evidente al interactuar con posibles clientes. Algunos confirmarán si están dispuestos a pagar, otros intentarán regatear el precio, pero si notas que este comportamiento es recurrente y proviene de una gran cantidad de personas, preocúpate. Haz una pausa y replantea los enfoques de tus objetivos."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "¿Los grupos demográficos comparten características semejantes?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Este es un buen consejo para identificar a tu nicho ideal. Como Research UX, tienes ciertas herramientas y habilidades que puedes utilizar a tu favor. Identifica estos grupos demográficos mediante entrevistas y encuestas. Si en los resultados encuentras que comparten ciertas características similares, es probable que estés frente a un nicho de mercado, y muy posiblemente, aunque enfrenten la misma necesidad o problema, lo aborden desde perspectivas parecidas."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Sin embargo, ten cuidado con esto, ya que, sin contar con información previa sobre los puntos que acabo de mencionarte, podrías caer en un sesgo que no te permita ver el panorama completo."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Ten en cuenta que este análisis sobre el nicho es apenas un pequeño acercamiento dentro de la actividad desafiante de emprender como Diseñador UX. Por ello, te invito a seguir explorando mi web y a mantenerte atento a mis redes sociales, donde estaré compartiendo más artículos como este para acompañarte en tu camino."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[13px] pt-[15px] italic",
                                        children: "*Este artículo no se redactó con inteligencia artificial, es completamente redactado por mi persona. Muchas gracias."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NichoUx.jsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/NichoUx.jsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/NichoUx.jsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/NichoUx.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/NichoUx.jsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NichoUx;
}),
"[project]/src/app/components/UxProba.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const UxProba = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto border-b border-azulbrillante pb-[17px] px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-[90px] mt-28 leading-none",
                        children: "Diseño de Experiencia de Usuario (UX) basado en Probabilidades"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UxProba.jsx",
                        lineNumber: 5,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white font-medium font-Oswald sm:text-[42px] text-[34px] leading-snug",
                        children: "No dejemos las decisiones importantes a la suerte"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UxProba.jsx",
                        lineNumber: 6,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UxProba.jsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto mt-[50px] px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-white font-Oswald font-bold text-[16px]",
                                children: "Moises Contreras"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UxProba.jsx",
                                lineNumber: 10,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-[13px] font-Oswald font-light",
                                children: "09/05/2026"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UxProba.jsx",
                                lineNumber: 10,
                                columnNumber: 115
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UxProba.jsx",
                        lineNumber: 10,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/UxProba.jsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/UxProba.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "container mx-auto px-2 pb-[60px] sm:max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 grid-cols-1 mt-[25px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "rounded-[20px] py-[15px] w-full object-cover",
                                    src: "/asset/img/ux-probabiliades.png",
                                    alt: "identificar nichos como diseñador ux"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/UxProba.jsx",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UxProba.jsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px]",
                                        children: "Voy a iniciar esta entrada del blog siendo completamente sincero: no tenía ninguna idea para escribir sobre ella, así que decidí buscar inspiración en mi cuaderno de NoteBook LM sobre diseño UX/UI. En él tengo cargadas las mejores fuentes y libros más relevantes que he encontrado en el área de la experiencia de usuario."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 19,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: 'Una de las preguntas generales que aparecen automáticamente cuando se comienza un nuevo cuaderno es: "¿Cómo utilizar la probabilidad para optimizar clics y conversiones críticas?". Esta pregunta capturó mi atención, por lo que decidí explorarla en esta entrada del blog.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 20,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "Probabilidades vs. Suerte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 21,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: 'Es importante comenzar aclarando que las afirmaciones que se presentan a continuación están basadas en verosimilitudes fundadas en la verdad, y no son mera coincidencia o suerte. La probabilidad se define como una "verosimilitud o fundada apariencia de verdad", mientras que la suerte se refiere al "encadenamiento de los sucesos, considerado como fortuito o casual".'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 22,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "2 aspectos para aplicar la probabilidad y optimizar las conversiones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Gracias a la probabilidad podemos tomar decisiones más informadas y fundamentadas, en lugar de basarnos en experiencia personal, intuiciones, gustos o caprichos. A continuación, se presentan dos aspectos probabilisticos que pueden ayudar a optimizar las conversiones:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1. Optimizar clics mediante el orden y la visibilidad"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/UxProba.jsx",
                                            lineNumber: 26,
                                            columnNumber: 96
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 26,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Para aumentar el ratio de clics en un elemento relevante dentro de una página web, landing page, aplicación o producto digital, es importante tener en cuenta la posición del mismo. Las estadísticas muestran que los usuarios suelen hacer clic en la primera opción que les parece razonable, por lo que resulta más efectivo colocar elementos importantes en la parte superior e izquierda."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: 'Es fundamental pensar en el área conocida como "fold", que es el espacio visible sin necesidad de desplazarse hacia abajo. En este lugar deberían encontrarse los elementos más relevantes, como el llamado CTA (Botón de llamada a la acción) o cualquier otro punto diseñado para aumentar el KPI del negocio.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Es importante tener en cuenta que cuantas más personas vean el CTA, mayor será la probabilidad de que hagan clic en él. Por lo tanto, si una landing page es demasiado larga y el CTA se encuentra al final de la página, menos personas llegarán hasta ese punto, lo que reducirá el número de clics."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "2. La Regla del Menor Esfuerzo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/UxProba.jsx",
                                            lineNumber: 34,
                                            columnNumber: 96
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "En la era digital actual, los usuarios prefieren interactuar con productos tecnológicos o digitales que sean fáciles y rápidos de usar. Como diseñadores, debemos anticiparnos a esta realidad e intentar facilitar lo máximo posible las tareas para el usuario."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "La probabilidad nos indica que mientras más esfuerzo tenga que hacer un usuario para completar una tarea en nuestro producto, menor será la probabilidad de que la complete. Sin embargo, aquellas personas dispuestas a realizar un gran esfuerzo también podrían estar interesadas en tareas más sencillas."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Para aplicar este principio en tus diseños, imagina cada acción que realiza el usuario como un costo, por ejemplo, en una escala de 1 a 5. Si una acción representa un alto costo para el usuario (costo 5), es probable que sea de bajo valor para los objetivos del negocio (costo 1). Por lo tanto, debes tratar de simplificar las tareas para reducir el esfuerzo del usuario y aumentar el retorno monetario para el negocio."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "rounded-[20px] py-[15px] w-full object-cover",
                                            src: "/asset/img/ux-probable.jpg",
                                            alt: "identificar nichos como diseñador ux"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/UxProba.jsx",
                                            lineNumber: 43,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug",
                                        children: "Optimización de Conversiones Críticas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Al aplicar estos dos aspectos probabilisticos, es posible optimizar conversiones de alto valor tanto para los usuarios como para el negocio. A continuación se presentan algunos consejos a tener en cuenta durante el proceso de diseño:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "- Trabajar hacia atrás:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UxProba.jsx",
                                                lineNumber: 47,
                                                columnNumber: 96
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Comienza optimizando el último paso del proceso de conversión. Perder un usuario al final del túnel de pago es mucho más costoso que perderlo al principio, por lo que optimizar el final ofrece el mayor retorno porcentual."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "- Analizar patrones de datos:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/UxProba.jsx",
                                                lineNumber: 48,
                                                columnNumber: 96
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ' Si los datos muestran que los usuarios no siguen el orden esperado (por ejemplo, si el tercer elemento es más popular que el segundo), es posible que diseño y la probabilidad estén "desincronizados". Esto indica una oportunidad para rediseñar el flujo y alinear la atención con el valor.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 48,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: "Es importante recordar que una mente UX no está actuando al máximo de su capacidad si no entiende el contexto general del producto o pieza digital en la que esté trabajando. En la actualidad, el diseño UX ha evolucionado y se basa en herramientas de inteligencia artificial para resguardar los intereses del negocio."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-Inter font-normal text-[18px] pt-[15px]",
                                        children: 'Al terminar de escribir esta entrada, me surge una pregunta: "¿El CRO (Optimización de la tasa de conversión) está relacionado con estas probabilidades?". Lo descubriremos en otros artículos. ¡Gracias por leer!'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/UxProba.jsx",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/UxProba.jsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UxProba.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 grid-cols-1 mt-[25px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-Inter font-normal text-[13px] pt-[15px] italic",
                                children: "*Este artículo no se redactó con inteligencia artificial, es completamente redactado por mi persona. Muchas gracias."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UxProba.jsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/UxProba.jsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UxProba.jsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UxProba.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/UxProba.jsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = UxProba;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04lrtiv._.js.map