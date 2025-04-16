'use client'
import { useState } from "react"
import data from "../../data/dados.json"
const data2 = data.titulos?.[0]
export default function episodiosFunc() {

const [StatusDescr, SetStatusDescr] = useState(true)

function changeStatus () {
    SetStatusDescr(!StatusDescr);
}

    return (
        <>
            <div className="w-full bg-yellow-200 px-10">
                <div className="">

                    <div className="grid grid-cols-4 gap-5">
                        {/* {data2.map((titulo)=>(
                        <div key = {titulo.nome} > */}

                        {data2.episodios.map((data) => (
                            <div key={data.titulo} className="bg-yellow-500 border-1 flex items-end h-50 relative">
                                    <button className="bg-lime-500 z-1" onClick={changeStatus}>a</button>

                                <div className={` ${StatusDescr ? 'hidden' : 'fixed'} w-full flex flex-col items-center relative z-10 p-5 text-sm`} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                                    <p className="relative">{data.titulo}</p>
                                    <p className="relative">{data.descr}</p>
                                </div>
                                <img className="absolute top-0 left-0 w-full h-full object-cover z-0" src={data.img} />
                            </div>
                        ))}
                        {/* </div>
                        
                    ))} */}
                    </div>

                </div>
            </div>

        </>
    )
}