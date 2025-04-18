'use client'
import { useState } from "react"
import data from "../../data/dados.json"
const data2 = data.titulos?.[0]

export default function episodiosFunc() {
    const [activeItem, setActiveItem] = useState(null); // Estado para controlar o item ativo

    function changeStatus(id) {
        setActiveItem(activeItem === id ? null : id); // Alternar entre ativo e inativo
    }

    return (
        <>
            <div className="w-full px-10">
                <div className="">
                    
                    <h1 className="text-center text-4xl my-5 underline decoration-red-500 decoration-4">Episodios</h1>
                    <div className="grid grid-cols-4 gap-5 pb-10">
                        {data2.episodios.map((item) => (
                            <div key={item.titulo} className=" border-1 flex flex-col items-end h-35 relative">
                                <button className="z-20 absolute " onClick={() => changeStatus(item.titulo)}>a</button>

                                <div className={` ${activeItem === item.titulo ? 'fixed' : 'hidden'} w-full flex flex-col items-center relative z-10 h-full px-1 border border-1 rounded`}style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                                    <p className="relative">{item.titulo}</p>
                                    <p className="relative text-xs text-justify">{item.descr}</p>
                                </div>
                                <img className="absolute top-0 left-0 w-full h-full object-cover z-0" src={item.img} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
