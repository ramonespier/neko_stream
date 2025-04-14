'use client'

export default function teste () {



    const testes = [
        {id: 1, nome: 'leo', age: 25},
        {id: 2, nome: 'ronald', age: 10},
        {id: 3, nome: 'lucas', age: 40}
    ]



    return (
        <>
        <div className="bg-red-500 p-5 w-full">

        {testes.map((teste) =>(
            <div className="bg-purple-500" key ={teste.id} >
            <p> ID: {teste.id}</p>
<button className="bg-blue-500 h-50 w-50"><a href={`/teste/${teste.id}`}>a</a></button>
            
            <p>Nome: {teste.nome}</p>
            <p>Age: {teste.age}</p>
            <br/>
            </div>
        ))}
        </div>

        <p>a</p>
        </>
    )
}