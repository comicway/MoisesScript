# Integración de Contentful CMS en MoisesScript

El objetivo de este plan es reemplazar el contenido estático ("hardcodeado") que tienes actualmente en tus componentes de React (`ProyectosRecientes.jsx`, `BlogRecientes.jsx`, y sus respectivas vistas completas) por un sistema dinámico usando **Contentful Headless CMS**. Esto te permitirá actualizar tu portafolio y publicar posts nuevos desde un panel amigable y que se refleje instantáneamente en tu aplicación de Vercel.

> [!IMPORTANT]
> **Revisión del Usuario Requerida**
> Antes de proceder con la ejecución de este plan, necesito que me confirmes lo siguiente:
> 1. ¿Ya tienes creada una cuenta gratuita en **Contentful** y un "Space" (espacio) creado?
> 2. Una vez que apruebes el plan, voy a necesitar que me proporciones (o que coloques en un archivo `.env.local` que vamos a ignorar en git) tu `Space ID` y tu `Content Delivery API - access token`. 
> 3. ¿Estás de acuerdo con que instale la librería oficial de `contentful` en tu proyecto usando npm?

## Cambios Propuestos

### 1. Configuración del Proyecto y Dependencias
Se debe añadir la librería para conectarse a Contentful y configurar las variables de entorno para proteger las claves de la API.

#### [NUEVO] `.env.local`
Archivo local para guardar tus variables de entorno (ya veo que `.env` en plural no está en `.gitignore`, añadiremos las claves correctamente).
- `VITE_CONTENTFUL_SPACE_ID`
- `VITE_CONTENTFUL_ACCESS_TOKEN`

#### [MODIFICAR] `package.json`
- Instalación de `contentful`: `npm install contentful`

### 2. Capa de Servicios (Services)
Se creará un archivo encargado exclusivamente de inicializar Contentful y traer la información, para mantener los componentes de React limpios (separación de preocupaciones).

#### [NUEVO] `src/services/contentfulConfig.js`
Este archivo inicializará el cliente de Contentful con tus claves e incluirá funciones exportables como:
- `getProyectos()`
- `getArticulosBlog()`

### 3. Modificación de Componentes de React
Transformaremos los componentes que actualmente muestran datos fijos y los conectaremos con la API de Contentful haciendo uso de hooks `useEffect` y `useState`.

#### [MODIFICAR] `src/Components/ProyectosRecientes/ProyectosRecientes.jsx`
- Sustituiremos los contenedores `<div>` fijos (Megabook, Rover, etc.) por una iteración `.map()` basada en el estado de proyectos cargados desde `getProyectos()`.

#### [MODIFICAR] `src/Components/BlogRecientes/BlogRecientes.jsx`
- Reemplazaremos el post de "El nicho..." por una lista mapeada de artículos cargados dinámicamente desde `getArticulosBlog()`.

#### [MODIFICAR] Rutas / Vistas de Detalles
*(Dependiendo de la arquitectura de tus rutas, se requerirán cambios para hacer páginas dinámicas tipo `/proyecto/:id` en lugar de listar cada proyecto uno por uno, pero empezaremos por las listas de inicio)*.

## Modelo de Contenido a crear en Contentful (Para tu referencia)

Tendrás que crear 2 "Content Types" en Contentful:
1. **Proyecto**: 
   - *Título* (Title)
   - *Categoría* (Text - Ej: "Diseño UX/UI, Frontend")
   - *Imagen de Portada* (Media)
   - *Slug / Enlace* (Text)
2. **Artículo Blog**:
   - *Título* (Title)
   - *Categoría* (Text)
   - *Imagen de Portada* (Media)
   - *Slug / Enlace* (Text)
   - *Cuerpo* (Rich Text o Markdown)

## Plan de Verificación

### Verificación Manual
- Arrancaremos el entorno de desarrollo localmente (`npm run dev`).
- Comprobaremos que la pantalla de Inicio cargue correctamente los proyectos y blogs obtenidos desde Contentful mediante un listado de los objetos por consola temporalmente en caso de que aún no tengas datos creados.
- Ayudar al usuario a poner las variables de entorno en Vercel una vez el entorno local esté validado para el despliegue a producción.
