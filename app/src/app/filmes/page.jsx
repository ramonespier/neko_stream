import Menu from '../components/MenuFilmes/MenuFilmes.jsx';
import Carosel from '../components/CaroselFilmes/Carossel.jsx';
import Episodios from "../components/Episodios/Episodios.jsx"
export default function pageFilmes() {
    return (
        <>

            <div className='bg-black'>
                <section className=" grid 
                
                md:grid-cols-10
                lg:grid-cols-11
                xl:grid-cols-12 
                grid-rows-1 
                mt-30 mb-50"> {/*Inicio body grid*/}
                    <div className='
                            w-full
                            col-span-3  
                            
                            '>
                            
                        <Menu/>
                    </div>
                    
                    {/* -------------------------------------------------------- */}
                    <div className="
                    col-span-3 border-3 rounded-lg
                    border-t-3 border-l-3 border-b-3 
                    md:col-span-7
                    lg:col-span-8
                    xl:col-span-9 
                    w-full
                    
                    bg-neutral-800     
                    border-neutral-500" >{/*Menu  */}
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