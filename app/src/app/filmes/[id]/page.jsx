
import Menu from '../../components/MenuFilmes/MenuFilmes.jsx';
import Carosel from '../../components/CaroselFilmes/Carossel.jsx';
import Episodios from "../../components/Episodios/Episodios.jsx";

export default async function pageFilmes({ params }) {

    const { id } = await params;

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
                            
                        <Menu id={id}/>
                    </div>
                    
                    {/* -------------------------------------------------------- */}
                    <div className="
                    col-span-3 
                    md:rounded-lg
                    md:border-3
                    md:border-t-3 
                    md:border-l-3 
                    md:border-b-3 
                    md:col-span-7
                    lg:col-span-8
                    xl:col-span-9 
                    
                    w-full
                    bg-neutral-800     
                    border-neutral-500" >{/*Menu  */}
                        <div className='bg-stone-900 py-7 rounded-tl-lg'>
                        <div className='w-full bg-neutral-800 mx-auto'> {/** Carrosel */}
                            <Carosel id={id}/>
                        </div>
                        </div>

                        <div className=''> {/** episodeos */}
                            <Episodios id={id}/>
                        </div>
                    </div>
                </section>{/*Fim body grid*/}
            </div>
        </>
    )
}