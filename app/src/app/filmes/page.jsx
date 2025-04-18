import Menu from '../components/MenuFilmes/MenuFilmes.jsx';
import Carosel from '../components/CaroselFilmes/Carossel.jsx';
import Episodios from "../components/Episodios/Episodios.jsx"
export default function pageFilmes() {
    return (
        <>

            <div className='bg-black'>
                <section className="grid grid-cols-12 mt-30 mb-50"> {/*Inicio body grid*/}
                    <div className='col-span-3'>
                        <Menu/>
                    </div>
                    
                    {/* -------------------------------------------------------- */}
                    <div className="col-span-9 bg-neutral-800 rounded-l-lg" >{/*Menu  */}
                        <div className='bg-stone-900 py-7 rounded-tl-lg'>
                        <div className='w-full bg-neutral-800 px-40'> {/** Carrosel */}
                            <Carosel/>
                        </div>
                        </div>

                        <div className=''> {/** episodeos */}
                            <Episodios/>
                        </div>
                    </div>
                </section>{/*Fim body grid*/}
            </div>
        </>
    )
}