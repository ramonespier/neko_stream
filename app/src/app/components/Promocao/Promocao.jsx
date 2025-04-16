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
            <div className="grid justify-items-center
                            grid-rows-1 grid-cols-1
                            lg:grid-cols-2 
                            md:grid-cols-1 
                            ">

                <div className="flex flex-col items-center
                                row-start-1 col-start-1 
                                lg:row-start-1 lg:col-start-1 
                                md:row-start-1 md:col-start-1 
                                gap-2.5">

                    <h1 className="px-8 md:px-3 text- font-extrabold text-3xl w-svw md:w-md">Melhore sua experiência com o premium!</h1>
                    <p className="px-8 md:px-3 break-words text-justify font-bold text-gray-300 w-svw md:w-md">Assista a animes e séries sem anúncios e aproveite a entrega rápida e gratuita em diversos produtos. Não perca essa oportunidade de mergulhar no universo dos animes com a melhor qualidade! Aproveite também a entrega rápida e gratuita em diversos produtos."

                        Agora está mais simples, mantendo o foco nas vantagens de assistir sem anúncios e na entrega.</p>

                    {/* botões */}
                    <div className="m-5 flex flex-col items-center">
                        <button type="button" className="font-bold uppercase p-5 cursor-pointer bg-rose-900 w-90 rounded-xl hover:text-black hover:opacity-85 duration-300">Já é Neko? Faça login</button>
                        <p className="font-thin text-center">————— ou —————</p>
                        <button type="button" className="uppercase p-5 cursor-pointer  bg-rose-900 rounded-xl hover:opacity-85 hover:text-black duration-300 w-90    font-bold">Experimente 7 dias grátis</button>
                    </div>

                </div>

                <div className="animes hidden lg:flex p-5 lg:row-start-1 lg:col-start-2 lg:w-[60%] lg:h-[450px]">
                    {animes.map((anime) => (
                        <img key={anime.id} src={anime.img}
                            className="w-18 grow-100 object-cover 
                        duration-300 ease-out md:opacity-40
                        rounded-2xl m-[1%] hover:w-[140px] 
                        hover:opacity-100 hover:contrats-[120%]" ></img>
                    ))}
                </div>
            </div>

            <div className="animes lg:hidden p-5 w-full h-auto row-start-2 col-start-1">
                <div className="flex flex-wrap justify-center">
                    {animes.map((anime) => (
                        <img
                            key={anime.id}
                            src={anime.img}
                            alt=""
                            className="w-[150px] sm:w-[30%] md:w-[25%] lg:w-[15%] h-[150px] object-cover duration-300 ease-out opacity-90 rounded-2xl m-2"
                        />
                    ))}
                </div>
            </div>

            <p className="text-rose-600 font-extrabold text-[20px] flex justify-center">Escolha Seu VIP &darr;</p>

            {/* fim div pai */}



        </>
    )
}

