const VibeCodingVsInge = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px] px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-[90px] mt-28 leading-none">Vibe coding para diseñadores UX / UI, ¡NO!, mejor usa Ingeneria de Prompt</h1>
            </div>
            <div className="container mx-auto mt-[50px] px-2">
                <div className="grid grid-cols-1">
                    <p><strong className="text-white font-Oswald font-bold text-[16px]">Moises Contreras</strong> <span className="text-white text-[13px] font-Oswald font-light">09/10/2026</span></p>
                </div>
            </div>
            <article className="container mx-auto px-2 pb-[60px] sm:max-w-4xl">
                <div className="grid gap-5 grid-cols-1 mt-[25px]">
                    <div>
                        <img className="py-[15px] w-full object-cover" src="/asset/img/imgBlog02-prompt.webp" alt="mujer sentada con computador y taza" />
                    </div>
                    <div>
                        <p className="text-white font-Inter font-normal text-[18px]">¿No te ha sucedido que, al pedirle código a la inteligencia artificial, se vuelve un poco tonta o, al probar el resultado, nada funciona como esperabas? Esta sensación de reaccionar ante las respuestas de la IA y tener la intuición de cómo interactuar con ella se llama <em>Vibe Coding</em>. De hecho, de allí viene el nombre.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">En este nuevo post vamos a dejar de sentir esas "malas vibras" y aprenderemos a codificar con mejor calidad usando la ingeniería de <em>prompts</em>.</p>
                    </div>
                </div>

                <div className="grid gap-5 grid-cols-1 mt-[25px]">
                    <div>
                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">¿Qué es la ingeniería de prompts?</h2>
                        <p className="text-white font-Inter font-normal text-[18px]">Un <em>prompt</em> es una instrucción recibida por un modelo LLM para encontrar una respuesta determinada. Sin embargo, si la instrucción es deficiente, dará como resultado una respuesta de mala calidad. Este es el problema resuelto por la ingeniería de <em>prompts</em>.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">La ingeniería de <em>prompts</em>, además de comprender los principios y fundamentos detrás del funcionamiento de un modelo LLM, agrupa las técnicas necesarias para generar respuestas más coherentes y relevantes.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Y aquí radica la potencia de, por lo menos, saber algo del tema. Con esto, el diseñador UX puede potenciar sus habilidades, no solo para la generación de código, sino durante toda la etapa <em>end-to-end</em> de un producto digital.</p>

                        <h3 className="text-white font-medium font-Oswald sm:text-[32px] py-[15px] text-[26px] leading-snug">Un caso real</h3>
                        <p className="text-white font-Inter font-normal text-[18px]">En uno de mis trabajos anteriores, lamentablemente, perdimos el acceso a una cuenta de Asana. Allí teníamos absolutamente todo lo referente al proyecto: materiales, recursos, <em>feedback</em>, estados, el tablero Kanban, tareas pendientes, <em>backlog</em> y los <em>briefs</em>. Aproveché la oportunidad para crear nuestro propio "Asana". Tomé un proyecto de código abierto, con su repositorio disponible al público, lo copié y, con la ayuda de mis agentes de IA y la ingeniería de <em>prompts</em>, en menos de una semana realicé un clon de Asana. Este contaba solo con las funcionalidades necesarias y estaba ajustado al flujo de trabajo del equipo. Esto lo logré sabiendo dos cosas: los fundamentos de arquitectura y programación, y además técnicas de ingeniería de <em>prompts</em>.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Te aseguro que, usando solo <em>vibe coding</em>, no hubiera podido enfrentar este problema.</p>

                        <h3 className="text-white font-medium font-Oswald sm:text-[32px] py-[15px] text-[26px] leading-snug">El gran consejo</h3>
                        <p className="text-white font-Inter font-normal text-[18px]">Te voy a comentar un par de aspectos necesarios para iniciar en esta disciplina: primero, sé lo más específico posible, sin redundancias, directo al grano. Segundo, evita las imprecisiones o las generalizaciones. Como puedes ver, cada aspecto está entrelazado con el otro.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Ejemplo:</p>

                        <h4 className="text-white font-medium font-Oswald sm:text-[26px] pt-[15px] pb-[5px] text-[22px]">Prompt estándar:</h4>
                        <blockquote className="text-white font-Inter font-normal text-[18px] italic border-l-4 border-azulbrillante pl-4 my-3">
                            Explica el concepto de ingeniería de <em>prompts</em>. Usa explicaciones cortas para facilitar su entendimiento.
                        </blockquote>

                        <h4 className="text-white font-medium font-Oswald sm:text-[26px] pt-[15px] pb-[5px] text-[22px]">Mejora del prompt:</h4>
                        <blockquote className="text-white font-Inter font-normal text-[18px] italic border-l-4 border-azulbrillante pl-4 my-3">
                            Usa 2-3 oraciones para explicar el concepto de ingeniería de <em>prompts</em> a un estudiante de secundaria.
                        </blockquote>

                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">En los recursos del blog te voy a dejar una guía de IBM para profundizar en las numerosas técnicas existentes.</p>
                    </div>
                </div>

                <div className="grid gap-5 grid-cols-1 mt-[25px]">
                    <div>
                        <img className="py-[15px] w-full object-cover" src="/asset/img/imgBlog-prompt.webp" alt="mano humana de ceramica"/>
                    </div>
                    <div>
                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">Mi estructura actual de trabajo</h2>
                        <p className="text-white font-Inter font-normal text-[18px]">Los modelos de inteligencia artificial me han ayudado en varios aspectos cotidianos: automatizaciones de <em>stock</em>, registros de ventas, uso de modelos locales, mentoría de aprendizaje, generación de guías de estudio, <em>desktop research</em>, simulación de pruebas de usabilidad y modelos agénticos para generar código o poner en producción un MVP. Sin importar el tipo de actividad a realizar, siempre le solicito a Gemini la mejora y optimización de mis <em>prompts</em>.</p>

                        <h3 className="text-white font-medium font-Oswald sm:text-[32px] py-[15px] text-[26px] leading-snug">Primero empiezo con una Gems (o Skill) de Gemini</h3>
                        <p className="text-white font-Inter font-normal text-[16px] italic pb-[10px]">*A la fecha de redacción de este post, Google anunció el cambio de los Gems a Skills.</p>
                        <p className="text-white font-Inter font-normal text-[18px]">Tengo un Gems configurado para optimizar los <em>prompts</em> creados por mí, con el objetivo de evitar alucinaciones en el modelo o agente, consumiendo la menor cantidad de <em>tokens</em> posible sin perder la calidad de la tarea a realizar.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Este Gems contiene literatura, documentación y guías referentes a la ingeniería de <em>prompts</em>.</p>
                        <p className="text-white font-Inter font-normal text-[16px] italic pt-[10px] pb-[10px]">*Algunos de estos materiales puedes encontrarlos en los recursos de este mismo artículo.</p>
                        <p className="text-white font-Inter font-normal text-[18px]">Al tener configurado este Gems, le solicito una mejor versión de mi instrucción original. Gemini, en la mayoría de los casos, respetará las instrucciones y usará el conocimiento suministrado. Como resultado, obtengo un <em>prompt</em> con técnicas mezcladas, como <em>Meta Prompting</em> (el mismo modelo perfecciona las instrucciones), <em>Modular Prompting</em> (divide las instrucciones en bloques) y <em>Role Prompting</em> (asigna una identidad específica al modelo).</p>

                        <h3 className="text-white font-medium font-Oswald sm:text-[32px] py-[15px] text-[26px] leading-snug">Partes del prompt</h3>
                        <p className="text-white font-Inter font-normal text-[18px]">Esta es la estructura utilizada en la mayoría de mis <em>prompts</em>:</p>

                        <ul className="text-white font-Inter font-normal text-[18px] pt-[15px] space-y-3">
                            <li><strong>- Rol:</strong> ¿Cómo quieres ver actuar al modelo? Este paso es muy importante; aquí le dices al modelo quién es. Adopta ese perfil "profesional", con sus conocimientos y sesgos, para ejecutar las instrucciones en base a ello.</li>
                            <li><strong>- Instrucción:</strong> Son las tareas específicas por realizar. Pueden estar desglosadas en puntos.</li>
                            <li><strong>- Conocimiento:</strong> Hoy en día, los modelos de inteligencia artificial están entrenados con un conocimiento muy amplio, abarcando miles de temas generales y específicos. Pero si queremos introducir un saber nuevo y particular — por ejemplo, información empresarial o un tema tan especializado donde el modelo suele equivocarse —, lo ideal es suministrarle estos datos para mejorar la calidad de la respuesta.</li>
                            <li><strong>- Contexto:</strong> Si el modelo carece de un conocimiento previo, un archivo .md (no necesariamente Markdown) o un historial de conversación, se le puede dar un contexto directo y sin muchos adornos. Evita las explicaciones superficiales.</li>
                            <li><strong>- Datos de entrada:</strong> Es la información utilizada por el modelo para trabajar. Por ejemplo, un párrafo (si previamente le diste la instrucción de corregir su ortografía) o una lista (para luego pedirle categorizarla de diferentes maneras).</li>
                            <li><strong>- Salida:</strong> Instrucciones adicionales sobre cómo deseas recibir la respuesta del modelo.</li>
                        </ul>

                        <blockquote className="text-white font-Inter font-normal text-[18px] italic border-l-4 border-azulbrillante pl-4 my-4">
                            <strong>Te doy un dato:</strong> trata, en lo posible, de dividir las instrucciones en tareas sencillas. Esto evitará errores en el modelo y aumentará la calidad de sus respuestas.
                        </blockquote>

                        <h3 className="text-white font-medium font-Oswald sm:text-[32px] py-[15px] text-[26px] leading-snug">Modelos locales, Open WebUI y ZED</h3>
                        <p className="text-white font-Inter font-normal text-[18px]">Para los <em>prompts</em> de uso local, suelo ser mucho más específico y breve, evitando saturar los recursos del computador. Uso una aplicación local (levantada por medio de Docker) llamada Open WebUI; es una interfaz gráfica parecida a ChatGPT capaz de tomar tus modelos locales gracias a Ollama. Allí puedes configurarlos, darles un contexto, conocimientos, instrucciones, capacidades y habilidades, tal cual como un Gems de Gemini. Lo uso principalmente para obtener diferentes propuestas de generación de texto (es posible al tener varios modelos locales en mi máquina) y para encontrar información precisa en una documentación.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Hablando del IDE ZED, este puede levantar tus modelos locales de forma nativa o, si lo prefieres, usar opciones disponibles en el mercado por medio de una API. Eso sí, para los modelos locales te sugiero configurarlos previamente; existe un archivo .json dentro del mismo IDE muy sencillo de manipular.</p>

                        <h3 className="text-white font-medium font-Oswald sm:text-[32px] py-[15px] text-[26px] leading-snug">IDEs agénticos</h3>
                        <p className="text-white font-Inter font-normal text-[18px]">Trata siempre de trabajar con IDEs, ya que te permitirán ver el código creado (o modificado) por tu agente. Suelo alternar entre estos tres: Kiro, Antigravity y Cursor (tengo pendiente probar Claude Code), pues suelen ofrecer <em>tokens</em> gratuitos por tiempo limitado. Si se acaban los créditos en un IDE, salto a otro, pero por lo general ejecuto los modelos instalados de forma local en mi máquina.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Dentro de estos IDEs «más comerciales», por decirlo así, sí uso <em>prompts</em> mucho más robustos con la finalidad de aprovechar todo su potencial.</p>

                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">Un mensaje final para los diseñadores UX</h2>
                        <p className="text-white font-Inter font-normal text-[18px]">Si logré convencerte de usar la ingeniería de <em>prompts</em> (ojalá sea así), te recomiendo experimentar mucho, practicar y practicar. En pocos días verás a tus agentes mucho más maduros e inteligentes.</p>
                        <p className="text-white font-Inter font-normal text-[18px] pt-[15px]">Ten en cuenta esto: ahora tienes en tus manos un poder inalcanzable hace algunos años. Lograr simular pruebas de usabilidad, optimizar el tiempo de investigación y documentación, o realizar MVP mucho más realistas y funcionales. De verdad, esto potenciará tu carrera a mil.</p>

                        <h2 className="text-white font-medium font-Oswald sm:text-[42px] py-[25px] text-[34px] leading-snug">Recursos</h2>

                        <h3 className="text-white font-medium font-Oswald sm:text-[26px] py-[10px] text-[22px]">Ejemplos de prompts</h3>
                        <p className="text-azulbrillante font-Inter text-[18px] pb-3">
                            <a href="https://www.promptingguide.ai/es/introduction/examples" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">www.promptingguide.ai/es/introduction/examples</a>
                        </p>

                        <h3 className="text-white font-medium font-Oswald sm:text-[26px] py-[10px] text-[22px]">Guía de mejores prácticas por Open AI</h3>
                        <p className="text-azulbrillante font-Inter text-[18px] pb-3">
                            <a href="https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api</a>
                        </p>

                        <h3 className="text-white font-medium font-Oswald sm:text-[26px] py-[10px] text-[22px]">Guía en español de IBM</h3>
                        <p className="text-azulbrillante font-Inter text-[18px] pb-3">
                            <a href="https://www.ibm.com/mx-es/think/prompt-engineering#605511093" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">www.ibm.com/mx-es/think/prompt-engineering</a>
                        </p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default VibeCodingVsInge
