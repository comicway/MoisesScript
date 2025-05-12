import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomeRover = () => {
    
    const [roverSelect, setRoverSelect] = useState(localStorage.getItem('selectedRover'));
    const [dateSelect, setDateSelect] = useState(null);
    const [displayCalendar, setDisplayCalendar] = useState(0);
    const [displayFeed, setDisplayFeed] = useState(0);

    useEffect(() => {
        localStorage.clear();
        console.log("LocalStorage limpiado al montar Home."); 
        setRoverSelect(null);
    }, []);

    const selectRover = (selectedRover) => {
        setRoverSelect(selectedRover);
        localStorage.setItem('selectedRover', selectedRover);
        console.log(selectedRover);
    };

    const roverName = roverSelect;
    const date = localStorage.getItem('selectedDate');

    const selectDate = (date) => {
        setDateSelect(date);
        const selectedDate = date.toISOString().split('T')[0];
        localStorage.setItem('selectedDate', selectedDate);
        console.log(selectedDate);
    };

    const [photos, setPhotos] = useState([]);
    const [launchDate, setLaunchDate] = useState('');
    const [roverStatus, setRoverStatus] = useState('');
    const [totalPhotos, setTotalPhotos] = useState('');
    const [maxSol, setMaxSol] = useState('');
    const [landingDate, setLandingDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        const fetchManifest = async () => {

            if (!roverName) {
                console.log("No hay rover seleccionado, omitiendo fetch.");
                setRoverStatus('');
                setTotalPhotos('');
                setMaxSol('');
                setLaunchDate('');
                setLandingDate('');
                setMaxDate('');
                return; 
            }
            const API_KEY = 'M9RpgIfPIE5CK0shTYQKszNHYurqSM6buLB7M14w';
            const photosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&api_key=${API_KEY}`;
            const manifestUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${API_KEY}`;

            try {
                // Fetch photos
                const photosResponse = await fetch(photosUrl);
                if (photosResponse.ok) {
                    const photosData = await photosResponse.json();
                    setPhotos(photosData.photos.slice(0, 25));
                } else {
                    setPhotos([]);
                    console.log('Todavia no se ha seleccionado una fecha para monstrar las fotos:', photosResponse.status, photosResponse.statusText);
                }

                // Fetch manifest for launch date and status
                const manifestResponse = await fetch(manifestUrl);
                if (manifestResponse.ok) {
                    const manifestData = await manifestResponse.json();
                    setRoverStatus(manifestData.photo_manifest.status);
                    setTotalPhotos(manifestData.photo_manifest.total_photos);
                    setMaxSol(manifestData.photo_manifest.max_sol);
                    setLaunchDate(manifestData.photo_manifest.launch_date); 
                    setLandingDate(manifestData.photo_manifest.landing_date);
                    setMaxDate(manifestData.photo_manifest.max_date);
                } else {
                    setRoverStatus('');
                    setTotalPhotos('');
                    setMaxSol('');
                    setLaunchDate('');
                    setLandingDate('');
                    setMaxDate('');
                    console.error('Error en la respuesta del manifiesto:', manifestResponse.status, manifestResponse.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchManifest();
    }, [roverName, date]);

    const calendar = () => setDisplayCalendar(1);
    const photoFeed = () => setDisplayFeed(1);

    const isSectionActive = (sectioncalendar) => {
        if (displayCalendar === 0) return 'hidden';
        return displayCalendar === sectioncalendar ? 'block' : 'hidden';
    };
    const notSectionActive = (notsectioncalendar) => {
        if (displayCalendar === 1) return 'hidden';
        return displayCalendar === notsectioncalendar ? 'block' : 'hidden';
    };
    const dateSelected = (dateSelected) => {
        if (displayFeed === 0) return 'hidden';
        return displayFeed === dateSelected ? 'block' : 'hidden';
    };

    return (
        <>
            <div className="grid grid-cols-1 mt-5 border-b border-white py-5 mb-10">
                <img src="/asset/img/logoroverphotos.svg" alt="" className="mx-auto" />
            </div>
            {/*INICIO SELECCION DE ROVER*/}
            <section className={`${notSectionActive(0)}`}>
                <div className="grid grid-cols-3 gap-3 mt-2">
                    <div className="mx-auto">
                        <button onClick={() => selectRover('curiosity')}>
                            <img src="/asset/img/rover-curiosity-3d.png" alt="Rover Curiosity"/>
                        </button>
                        <p className="text-center text-white font-medium font-SpaceGrotesk text-[15px]">Curiosity</p>
                    </div>
                    <div className="mx-auto">
                        <button onClick={() => selectRover('opportunity')}>
                            <img src="/asset/img/rover-opportunity-3d.png" alt="Rover Opportunity"/>
                        </button>
                        <p className="text-center text-white font-medium font-SpaceGrotesk text-[15px]">Opportunity</p>
                    </div>
                    <div className="mx-auto">
                        <button onClick={() => selectRover('spirit')}>
                            <img src="/asset/img/rover-spirit-3d.png" alt="Rover Spirit"/>
                        </button>
                        <p className="text-center text-white font-medium font-SpaceGrotesk text-[15px]">Spirit</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-10">
                    <button
                        onClick={calendar}
                        disabled={!roverSelect}
                        className="text-white font-bold font-SpaceGrotesk text-[16px] bg-[#BF3B0B] w-full h-[40px] rounded disabled:opacity-50 disabled:cursor-not-allowed">
                        Seleccionar
                    </button>
                </div>
            </section>
            {/*FIN SELECCION DE ROVER*/}
            {/*INICIO SELECCION DE FECHA*/}
            {displayFeed === 0 && (
                <section className={`${isSectionActive(1)}`}>
                    <div className="grid grid-cols-1 mt-5">
                        <div>
                            <div className="flex justify-center mt-4">
                                <DatePicker
                                    selected={dateSelect}
                                    onChange={selectDate}
                                    dateFormat="yyyy-MM-dd"
                                    className="p-2 border border-[#BF3B0B] bg-black rounded-md text-center w-full text-white"
                                    isClearable
                                    placeholderText="Selecciona una fecha"
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-10">
                        <button onClick={photoFeed} disabled={!dateSelect} className="text-white font-bold font-SpaceGrotesk text-[16px] bg-[#BF3B0B] w-full h-[40px] rounded disabled:opacity-50 disabled:cursor-not-allowed">Siguiente</button>
                    </div>
                </section>
            )}
            {/*FIN SELECCION DE FECHA*/}
            {/*INICIO FEED FOTOS*/}
            <section className={`${dateSelected(1)}`}>
            <section  className="grid grid-cols-3 gap-1 mt-5">
                <div>
                    <img src="/asset/img/rover-curiosity-3d.png" alt="Rover Curiosity" className='mx-auto'/>
                </div>
                <div>
                    <img src="/asset/img/icono-sol.svg" alt="" className='w-full h-[68px]'/>
                    <p className='text-white font-SpaceGrotesk font-bold text-[16px] text-center'>{maxSol}</p>
                </div>
                <div>
                    <img src="/asset/img/icono-camera.svg" alt="" className='w-full h-[68px]'/>
                    <p className='text-white font-SpaceGrotesk font-bold text-[16px] text-center'>{totalPhotos}</p>
                </div>
            </section>
            <section className="grid grid-cols-1">
                <div className="text-center text-white border-t border-b border-white mt-[32px] text-[18px] font-bold font-SpaceGrotesk first-letter:uppercase py-[5px]">{roverName}</div>
                <div className="text-center text-white border-b border-white text-[15px] font-bold font-SpaceGrotesk py-[5px]">{date}</div>
            </section>
            <section className="grid grid-cols-2 gap-1 mt-5 pb-5">
                {photos.map((photo) => (
                    <img 
                        key={photo.id}
                        src={photo.img_src}
                        alt={`Mars rover photo ${photo.id}`}
                        className="w-full h-auto"
                    />
                ))}
            </section>
            <section className="grid grid-cols-2 justify-center gap-5 pb-5">
            {photos.length === 0 && (
                    <p className="text-red-500">No se encontraron fotos para esa fecha, por favor regresar y seleccionar otra</p>
                )}
            </section>
            <section className="grid grid-cols-1 gap-5 pb-5">
                    <button onClick={() => window.location.reload()} className="text-white font-medium font-SpaceGrotesk text-[16px] bg-none w-full h-[40px] rounded border border-[#BF3B0B]">Ir al inicio</button>
            </section>
            </section>
            {/*FIN FEED FOTOS*/}
            {roverSelect && displayFeed === 0 && (
                <section className="grid grid-cols-1 mt-10">
                    <div className="text-center text-white border-t border-b border-white mt-[32px] text-[20px] font-bold font-SpaceGrotesk py-[18px] first-letter:uppercase">{roverName}</div>
                    <div className="text-center text-white border-b border-white text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">DÍA DE LANZAMIENTO: </span>{launchDate}</div>
                    <div className="flex justify-evenly text-white border-b border-white text-[18px] font-light font-SpaceGrotesk py-[18px]">
                        <div>STATUS:</div>
                        <div className="bg-[#0FF2F2] font-bold text-black px-2 text-center w-[200px] first-letter:uppercase">{roverStatus}</div>
                    </div>
                    <div className="flex justify-evenly items-center text-white border-b border-white font-SpaceGrotesk py-[18px]">
                        <div><img src="/asset/img/icono-sol.svg" alt="" /></div>
                        <div className="">
                            <p className="font-light text-center text-[15px]">Soles Totales</p>
                            <p className="font-bold text-center text-[40px] mt-[-15px]">{maxSol}</p>
                        </div>
                    </div>
                    <div className="text-center text-white border-b border-white text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">INICIO DE ACTIVIDADES: </span>{landingDate}</div>
                    <div className="text-center text-white border-b border-white text-[18px] font-bold font-SpaceGrotesk py-[18px]"><span className="font-light">ÚLTIMO DÍA DE FOTOS: </span>{maxDate}</div>
                    <div className="flex justify-evenly items-center text-white border-b border-white font-SpaceGrotesk py-[18px]">
                        <div><img src="/asset/img/icono-camera.svg" alt="" /></div>
                        <div className="">
                            <p className="font-light text-center text-[15px]">Fotos Tomadas</p>
                            <p className="font-bold text-center text-[40px] mt-[-15px]">{totalPhotos}</p>
                        </div>
                    </div>
                </section>
            )}
            <section className='grid grid-cols-1 mt-10'>
                <div className="text-center text-white border-b border-t border-white text-[12px] font-light font-SpaceGrotesk py-[4px]">Diseñado y desarrollado por: moises.script</div>
            </section>
        </>
    );
};

export default HomeRover;