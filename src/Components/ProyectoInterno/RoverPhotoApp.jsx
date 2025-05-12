import { Link } from "react-router-dom"
import HomeRover from '../../Components/RoverPhotoApp/HomeRover'

const RoverPhotoApp = () => {
    return (
        <>
            <div className='container mx-auto border-b border-azulbrillante pb-[17px] px-2'>
                <h1 className="font-bold font-Oswald uppercase text-naranjo text-[70px] sm:text-h1pagina mt-28 leading-none">Rover Photos App</h1>
                <h2 className="text-white font-medium font-Oswald sm:text-[42px] text-[34px] leading-snug">Aplicación conectada a la API de la NASA</h2>
            </div>
            <section className="container mx-auto px-4 max-w-2xl mt-[20px]">
                <HomeRover/>
            </section>
            <div className="bg-gradient-to-tr from-[#456173] to-[#45617300] py-[60px] sm:py-[126px] mt-24 px-2">
                <section className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <p className="font-Inter text-letrablanca text-lg mb-4">La aplicación, desarrollada con React JS, se conecta a la API de la NASA para acceder a la información de tres rovers marcianos (Curiosity, Opportunity y Spirit). Los usuarios pueden seleccionar un rover y una fecha específica para ver las 20 primeras fotos tomadas ese día. La aplicación también permite consultar el manifiesto de cada rover, mostrando detalles como nombre, estado, fechas de lanzamiento e inicio de actividades, total de soles y fotos.</p>
                        <p className="font-Inter text-letrablanca text-lg mb-4">El desarrollo se basó en peticiones GET a la API, y el diseño visual se definió mediante un Moodboard, estudio de colores y tipografía, bocetos y un prototipo de alta fidelidad, cuya maquetación final se realizó con TailwindCSS.</p>
                        <a href="https://github.com/comicway/MarsRoverPhotos" target="_blank">
                            <button className="h-[38px] w-[150px] border-2 border-azulbrillante font-bold font-Inter text-azulbrillante text-[15px]">Ver en Github</button>
                        </a>
                    </div>
                </section>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">Moodboard</h3>
                        <img className="mt-[10px] px-2 m-auto" src="./asset/img/moodboard-roverapp.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2">
                <div className="grid gap-5 grid-cols-1">
                    <div className="text-white bg-gradient-to-tr from-[#456173] to-[#45617300] p-[20px] mt-24">
                        <h3 className="font-Oswald font-bold text-[27px]">UI Kits</h3>
                        <img className="mt-[10px] px-2 m-auto" src="./asset/img/uikit-roverapp.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-[50px] sm:mt-[73px] border-t border-azulbrillante px-2">
                <section className="container mx-auto mt-[20px] sm:mt-[73px] pb-[125px]">
                    <h2 className="text-white font-medium font-Oswald text-[42px]">Otros proyectos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-[0px] sm:mt-[37px]">
                        <div className='mt-[90px]'>
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/portadacomicapp.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Comic App</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                <Link to='/comicapp'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                    <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-[90px]'>
                            <img className="rounded-[20px] sm:h-[507px] h-auto w-full object-cover" src="./asset/img/portadatoomics.png" alt="" />
                            <h2 className="text-white font-Oswald text-[27px] sm:mt-[45px] mt-[24px] border-b-4 border-azulbrillante pb-[28px]">Rediseño App Toomics</h2>
                            <div className="flex justify-between items-end mt-3">
                                <span className="text-white font-Oswald text-[18px]">Diseño UX/UI</span>
                                <div className="flex justify-between">
                                <Link to='/toomics'>
                                    <button className="text-azulbrillante font-Inter font-medium text-[20px]">Ver proyecto</button>
                                </Link>
                                    <img className="pl-1" src="./asset/img/vectorflecha.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default RoverPhotoApp