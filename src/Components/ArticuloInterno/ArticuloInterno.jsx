const ArticuloInterno = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px]'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-h1pagina mt-28">Mi primer articulo sobre diseño UX</h1>
                <h2 className="text-white font-medium font-Oswald text-[42px]">Subtitulo del articulo</h2>
            </div>
            <div className="container mx-auto mt-[105px]">
                <div className="grid grid-cols-1">
                    <p><strong className="text-white font-Oswald font-bold text-[27px]">Moises Contreras</strong> <span className="text-white text-[27px] font-Oswald font-light">30/12/2024</span></p>
                </div>
            </div>
            <article className="container mx-auto">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 mt-[25px]">
                    <div>
                        <img className="rounded-[20px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                    </div>
                    <div>
                        <p className="text-white font-Inter font-normal text-[18px]">I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.

I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.

I’m from Singapore and I have been working as a Product Designer for more than 7 years.</p>
                    </div>
                </div>
                <div className="grid gap-5 grid-cols-1 mt-[25px]">
                <div>
                        <p className="text-white font-Inter font-normal text-[18px]">I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.

I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.

I’m from Singapore and I have been working as a Product Designer for more than 7 years.</p>
                    </div>
                    <div>
                        <img className="rounded-[20px] w-full object-cover" src="./asset/img/imgportada.png" alt="" />
                    </div>
                    <div>
                        <p className="text-white font-Inter font-normal text-[18px]">I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.

I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.

I’m from Singapore and I have been working as a Product Designer for more than 7 years.</p>
                    </div>
                </div>
            </article>
        </>
    )
}
export default ArticuloInterno