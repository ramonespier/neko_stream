'use client'
import { useState } from "react"
import dataBruto from "../../data/dadosFilmes.js"

export default function episodiosFunc({id}) {
    const data = dataBruto.find(p => p.id == id)
    const [activeItem, setActiveItem] = useState(null); // Estado para controlar o item ativo

    function changeStatus(titulo) {
        setActiveItem(activeItem === titulo ? null : titulo); // Alternar entre ativo e inativo
    }

    return (
        <>

            <div className="w-full px-3 sm:px-7 md:px-10">
                <div className="">
                    
                    <h1 className="text-center text-4xl my-5 underline decoration-red-500 decoration-4">Episodios</h1>
                    <div className="
                    grid 
                    
                    grid-cols-2
                    gap-2
                    pb-2
                    sm:gap-5
                    lg:grid-cols-3
                    xl:grid-cols-4
                    
                    ">
                        {data.episodios.map((item) => (
                            <div key={item.titulo} className=" border-1 flex flex-col items-end  h-35 relative hover:scale-105">
                                <button className="z-20 absolute p-1" onClick={() => changeStatus(item.titulo)}><img src='/icon/info.png' alt='fechar' className="w-5 cursor-pointer hover:scale-110"/></button>

                                <div2 className={` ${activeItem === item.titulo ? 'fixed' : 'hidden'} w-full flex flex-col items-center relative z-10 px-1 border border-1 rounded`}style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                                    <p className="relative">{item.titulo}</p>
                                    <p className="relative text-xs text-justify">{item.descr}</p>
                                </div2>
                                <img className="absolute top-0 left-0 w-full h-full object-cover z-0" src={item.img} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
