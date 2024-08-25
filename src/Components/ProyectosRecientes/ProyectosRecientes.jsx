const ProyectosRecientes = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="px-5">
                        <span>Mis proyectos recientes</span>
                        <h1>Mira mi portafolio</h1>
                        <button>Ver todos</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de proyecto 1</h2>
                        <span>Categoria</span>
                        <button>Ver proyecto</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de proyecto 2</h2>
                        <span>Categoria</span>
                        <button>Ver proyecto</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de proyecto 3</h2>
                        <span>Categoria</span>
                        <button>Ver proyecto</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de proyecto 4</h2>
                        <span>Categoria</span>
                        <button>Ver proyecto</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProyectosRecientes