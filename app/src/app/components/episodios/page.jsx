'use client'
import data from "../../data/dados.json"
const data2 = data.titulos?.[1]
export default function episodios () {
    let tituloapa = []
    return (
        <>
            <div className="w-full h-50 bg-yellow-200 px-10">
                <div className="">
                    a
                    <div >
                    {/* {data2.map((titulo)=>(
                        <div key = {titulo.nome} > */}
                            
                            {data2.episodeos.map((data)=>(
                                <div key={data.titulo} className="bg-yellow-500 border-1">
                                    <p>{data.descr}</p>
                                    
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