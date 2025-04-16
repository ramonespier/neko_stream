import Menu from '../components/MenuFilmes/MenuFilmes.jsx';
import Carosel from '../components/CaroselFilmes/page.jsx';
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
                    <div className="col-span-9 bg-green-200" >{/*Menu  */}
                        <div className='w-full bg-red-500 px-40'> {/** Carrosel */}
                            <Carosel/>
                        </div>

                        <div> {/** episodeos */}
                            <Episodios/>
                        </div>
                    </div>
                </section>{/*Fim body grid*/}
            </div>
        </>
    )
}