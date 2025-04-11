import Menu from '../components/MenuFilmes/MenuFilmes.jsx';
export default function pageFilmes() {
    return (
        <>
            <div>
                <section className="grid grid-cols-12 h-30 mt-30"> {/*Inicio body grid*/}
                    <div className='col-span-3'>
                        <Menu/>
                    </div>
                    
                    {/* -------------------------------------------------------- */}
                    <div className="col-span-9 bg-green-200">{/*Menu  */}
                        a
                    </div>
                </section>{/*Fim body grid*/}
            </div>
        </>
    )
}