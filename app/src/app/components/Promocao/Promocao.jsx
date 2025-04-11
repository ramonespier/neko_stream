export default function Promocao() {
    const animes = [
        { id: 1, nome: "Demon Slayer", img: '/demonslayer.jpg' },
        { id: 2, nome: "Kaguya Sama", img: '/kaguyasama.jpg' },
        { id: 3, nome: "Jujutsu Kaisen", img: '/jujutsukaisen.jpg' },
        { id: 4, nome: "Spy x Family", img: '/spyxfamily.jpg' },
        { id: 5, nome: "Hunter x Hunter", img: '/hxh.jpg' }
    ]
    return (
        <>

            {/* div pai */}
            <div className="flex m-5 items-center">

                <div className="flex flex-col gap-2.5">
                    <h1 className="font-extrabold text-3xl">Melhore sua experiência com o premium!</h1>
                    <p className="break-words w-200 font-bold text-gray-300">Assista a animes e séries sem anúncios e aproveite a entrega rápida e gratuita em diversos produtos. Não perca essa oportunidade de mergulhar no universo dos animes com a melhor qualidade! Aproveite também a entrega rápida e gratuita em diversos produtos."

                        Agora está mais simples, mantendo o foco nas vantagens de assistir sem anúncios e na entrega.</p>

                        {/* botões */}
                    <div className="w-90 m-5">
                    <button type="button" className="font-bold uppercase p-5 cursor-pointer bg-rose-900 w-90     rounded-xl hover:text-black hover:opacity-85 duration-300">Já é Neko? Faça login</button>
                    <p className="font-extrabold text-center">----- ou -----</p>
                    <button type="button" className="uppercase p-5 cursor-pointer  bg-rose-900 rounded-xl hover:opacity-85 hover:text-black duration-300 w-90    font-bold">Experimente 7 dias grátis</button>
                    </div>

                </div>

                <div className="flex justify-center mt-5"></div>
                <div className="animes flex w-[60%] h-[450px]">
                    {animes.map((anime) => (
                        <img key={anime.id} src={anime.img} className="w-0 grow-100 object-cover duration-300 ease-out opacity-40 rounded-2xl m-[1%] hover:w-[117px] hover:opacity-100 hover:contrats-[120%]" ></img>
                    ))}
                </div>
            </div>
            <p className="text-rose-600 font-extrabold text-[20px] flex justify-center">Comparar todos os planos abaixo &darr;</p>

            {/* fim div pai */}



        </>
    )
}

