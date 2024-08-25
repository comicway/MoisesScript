const CvMoises = () => {
    return (
        <>
            <section className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <div className="px-5">
                        <div>
                            <p>Moises Contreras</p>
                            <p>+56 9 77 65 80 72</p>
                            <p>moiselias7@gmail.com</p>
                            <p>github.com/comicway</p>
                            <p>Santiago Centro</p>
                        </div>
                        <div className="hidden sm:block">
                            <div>
                                <h3>Programacion</h3>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 md:col-span-3">
                        <h1>MIRA MI CV</h1>
                        <div>
                            <span>Experiencia Laboral</span>
                            <span>Estudios</span>
                        </div>
                        <section className="container mx-auto">
                            <div className="grid grid-cols-7 gap-5">
                                <div>
                                    <p>2024</p>
                                    <p>2020</p>
                                </div>
                                <div className="col-span-6">
                                    <h2>Webmaster E-commers Comic Way Spa</h2>
                                    <p>Diseño de interfaces para aplicaciones web. Implementación de arquitectura de información, card sorting, tree testing, userow, wireframe en baja y alta, prototipados, motion, user persona, usos de design systems, pruebas de usabildiad. Diseño de variadas piezas gráficas digitales para el rubro del marketing farmacéutico, como sitios web, landing page, mail, entre otros.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CvMoises