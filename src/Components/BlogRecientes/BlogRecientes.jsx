const BlogRecientes = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="px-5">
                        <span>Mis blogs recientes</span>
                        <h1>Mira mi blog</h1>
                        <button>Ver todos</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de blog 1</h2>
                        <span>Categoria</span>
                        <button>Ver blog</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de blog 2</h2>
                        <span>Categoria</span>
                        <button>Ver blog</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de blog 3</h2>
                        <span>Categoria</span>
                        <button>Ver blog</button>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h2>Titulo de blog 4</h2>
                        <span>Categoria</span>
                        <button>Ver blog</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogRecientes