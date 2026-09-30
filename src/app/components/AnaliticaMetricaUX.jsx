const AnaliticaMetricaUX = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px] px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-[90px] mt-28 leading-none">¡Hey, Diseñador UX! Piérdele el miedo a las métricas</h1>
            </div>
            <div className="container mx-auto mt-[50px] px-2">
                <div className="grid grid-cols-1">
                    <p><strong className="text-white font-Oswald font-bold text-[16px]">Moises Contreras</strong> <span className="text-white text-[13px] font-Oswald font-light">30/09/2026</span></p>
                </div>
            </div>
            <article className="container mx-auto px-2 pb-[60px] sm:max-w-4xl">
                <div className="grid gap-5 grid-cols-1 mt-[25px]">
                    <div>
                        <img className="py-[15px] w-full object-cover" src="/asset/img/imgBlog02-metrics.webp" alt="mujer sentada con computador y taza" />
                    </div>
                    <div>
                        <p className="text-white font-Inter font-normal text-[18px]">He escuchado que los números y la analítica son el terror de los diseñadores. Triste para ellos, porque gracias a la analítica se pueden tomar decisiones más acertadas. Pero, ¿existe alguna esperanza para los diseñadores UX?</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">En este nuevo artículo te voy a llevar de la mano sobre cómo perderle el miedo a los "números", para así ser un diseñador UX más competitivo y, en definitiva, de más valor para tus clientes.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Los siguientes son algunos puntos de vista que me han ayudado a mí. Es importante aclarar que no soy un estadista o matemático, solo soy un diseñador con ganas infinitas de mejorar día a día.</p>
                    </div>
                </div>

                <div className="grid gap-5 grid-cols-1 mt-[25px]">
                    <div>
                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">1) Olvídate de las pesadillas matemáticas</h2>
                        <p className="text-white font-Inter font-normal text-[18px]">Lamentablemente, la educación en Latinoamérica es de muy mala calidad. A mi edad, llegando a los 40 años, recuerdo aquellos profesores de la infancia y a otros tantos del liceo. Y me da mucha, pero mucha lástima, recordar cómo eran sus clases, sobre todo en matemáticas o en alguna otra materia científica.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">A estos susodichos profesores les costaba un montón explicar de forma sencilla, por lo cual era muy evidente la falta de dominio del tema, dejando así más dudas que respuestas. Agrandando un poco este círculo de culpabilidad, en mi juventud ninguna escuela tenía un programa con el objetivo de enseñar a los estudiantes <em>cómo estudiar</em>. Nadie, absolutamente nadie, me dijo cuál era la forma correcta de estudiar, ni me ayudaron a encontrar un método de estudio con el que pudiera sentirme cómodo y desarrollado.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Ahora, como persona adulta, no tengo excusas.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Si pasaste por esta misma mala experiencia, discúlpame; mi intención es hacerte consciente de que el pasado se quedó atrás. Ahora debes pensar que el mundo se mueve de una manera diferente, por lo cual, ese "miedo a los números", descártalo. Ahora tienes la mente en blanco y estás dispuesto a aprender cosas nuevas para que, por medio de ese proceso, puedas disfrutarlo, a tu ritmo y sin presión: nadie te va a evaluar en un examen final.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Sabiendo esto, y dejando atrás este miedo, sigamos.</p>
                    </div>
                </div>

                <div className="grid gap-5 grid-cols-1 mt-[25px]">
                    <div>
                        <img className="py-[15px] w-full object-cover" src="/asset/img/imgBlog-metrics.webp" alt="persona analizando metricas en un computador"/>
                    </div>
                    <div>
                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">2) Conoce los tipos de datos</h2>
                        <p className="text-white font-Inter font-normal text-[18px]">Para poder entender las métricas, se deben reconocer los tipos de datos. Pero, ¿qué es un dato? Un dato es una información; clasificar y entender esta información es crucial para poder analizarla.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Entonces, ¿cuáles son los tipos de datos?</p>

                        <ul className="text-white font-Inter font-normal text-[18px] pt-[15px] space-y-3">
                            <li><strong>- Cualitativos:</strong> Definen cualidades que nos ayudan a descubrir el "porqué" del problema. Por ejemplo, son todos aquellos que dan respuesta a una pregunta abierta: ¿Cómo te sentiste al culminar la tarea?, ¿la aplicación te resultó sencilla o difícil de usar y por qué? El dato cualitativo, o la información cualitativa, describe el sentir (por lo general, frustración o satisfacción) del usuario y su punto de vista.</li>
                            <li><strong>- Cuantitativos:</strong> Hacen referencia a la cantidad que únicamente se puede representar con números. Nos ayudan a definir el "qué" del problema. Pueden identificar patrones, sucesos o tendencias, como la cantidad de visitas en una página, la tasa de abandono en la vista de pago en una tienda online o el tiempo de carga de un sitio web.</li>
                        </ul>

                        <p className="text-white font-Inter font-normal text-[18px] pt-[20px]">
                            <strong>¿Cómo podemos identificarlos?</strong> Por medio de la información (variable) que representan, que puede ser: numérica (enteros, continuos), categórica (aquellos que etiquetan, como la arquitectura de información de un supermercado: lácteos, carnes, verduras, frutas, etc.), binaria (es verdadero o es falso), de texto (el nombre completo de una persona o una dirección) o de tiempo (fecha de nacimiento o vencimiento). Si estudias esto más a fondo, podrás encontrar muchas más variedades de datos.
                        </p>

                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">3) Estudia los principios de la estadística descriptiva</h2>
                        <p className="text-white font-Inter font-normal text-[18px]">Y ahora que hemos levantado los datos y conocemos la esencia detrás de ellos, es importante poder interpretarlos; y es aquí donde el poder de la estadística descriptiva toma protagonismo. No necesitas tomar un curso universitario o volver a estudiar matemáticas para esto. Lo fundamental es identificar cada una de las gráficas (barra, línea, torta, etc.) y que estas te ayuden a transmitir los <em>insights</em> descubiertos.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Pero ten cuidado en cómo muestras los datos; las gráficas pueden sesgar u omitir información, cambiando dramáticamente un punto de vista. Esto se llama manipular datos y no es honesto. Capaz has visto casos de encuestas o estudios estadísticos involucrados en la política y la economía donde truncan gráficos para engañar al espectador.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Luego, estudia conceptos como: moda, media, mediana, cohortes, tendencia, patrón y correlaciones. Estos te ayudarán a responder una gran variedad de preguntas.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Para mí, el más difícil es "cohortes". Con la finalidad de entenderlo, te redacté la siguiente descripción:</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px] italic border-l-4 border-azulbrillante pl-4 my-3">"Una <strong>cohorte</strong> es un grupo de usuarios que comparten una característica o hito común en un periodo determinado —como su fecha de registro— para analizar su comportamiento real de forma independiente a lo largo del tiempo."</p>

                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">4) ¿Cuáles son las métricas más usadas en Diseño UX?</h2>
                        <p className="text-white font-Inter font-normal text-[18px]">Excelente pregunta. Para no alargarnos más, te voy a dejar una lista con una breve descripción:</p>

                        <ul className="text-white font-Inter font-normal text-[18px] pt-[15px] space-y-3">
                            <li><strong>- Tasa de finalización de tareas:</strong> Porcentaje de usuarios que finalizaron una tarea con éxito. Aquí hablamos de eficacia.</li>
                            <li><strong>- Tiempo de ejecución de tarea:</strong> ¿Cuánto tiempo tardó el usuario en completar una tarea? Aquí hablamos de eficiencia.</li>
                            <li><strong>- Número promedio de errores por tarea:</strong> Ten cuidado con generalizar la media, ya que se puede diluir información relevante. Mientras más específico seas, mejor.</li>
                            <li><strong>- System Usability Scale (SUS):</strong> Es un estándar con 10 preguntas de puntuación sobre la usabilidad percibida.</li>
                            <li><strong>- Net Promoter Score (NPS):</strong> Le preguntas al usuario qué tan probable recomienda el producto a un tercero. Se mide de 0 a 10.</li>
                            <li><strong>- Single Ease Question (SEQ):</strong> Evalúa la dificultad percibida tras completar una tarea. Va desde 1 (muy difícil) a 7 (muy fácil). Esto lo contesta el usuario.</li>
                        </ul>

                        <p className="text-white font-Inter font-normal text-[18px] pt-[25px]">Lo anterior fue una vista general, lo más reducida posible. Ojalá puedas entenderlo para así aplicarlo en pruebas de usabilidad, ya sean moderadas o no moderadas, y en reportes UX. Te aseguro que estarás un paso más cerca de llegar a la excelencia.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Éxito.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Si tienes alguna duda, no tardes en contactarme.</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default AnaliticaMetricaUX
