"use client"; //é necessario pois o useState servi no lado cliente e se não utilizar ele quebra
import { useState } from 'react';
export default function menuFilmes() {
    // --------------------------------- Ver se é capaz traferir para um js 
    const [ativo, setAtivo] = useState(false);

    function lerMais() {
        document.getElementById("botao").textContent = "true"
        setAtivo(!ativo)
    }
    function Descricao () {
        
    }

     // --------------------------------- 
    return (
        <>
            <section className=" bg-blue-200 p-5">{/*Inico section menu*/}
                <div className="w-full mr-5 bg-blue-50"> {/*div central menu*/}
                    <div className="font-bold text-4xl bg-blue-100 text-red-500 ">{/*titulo menu*/}
                        <p className="text-center">Titulo</p>
                    </div>
                    {/* -------------------------------------------------------- */}
                    <div className="font-bold text-sm bg-blue-100 text-black  ">{/*descricao menu*/}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, repudiandae ex. Adipisci labore accusamus vero? Ipsam dolores 
                            corporis obcaecati earum numquam sunt doloremque nam! Quas velit rerum quo atque nostrum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a reprehenderit autem aperiam ad corrupti delectus. Explicabo 
                            ommodi officiis nam magni itaque quasi aliquid labore dolore odio incidunt, adipisci voluptatem!
                        </p>
                        <button id="readMore">read more</button>
                    </div>

                    {/* -------------------------------------------------------- */}
                    <div>

                        <div className="grid grid-flex-row text-black">
                            <p className="text-3xl"> {/**assistir */}
                                Asistir
                            </p>
                            <p className="text-3xl">{/*Detalhes */}                        
                                <button onClick={Descricao}>Drescição</button>
                            </p>
                            <p className="text-3xl">{/**Desejos */}
                                Lista de desejos               
                            </p>
                            <p className="text-3xl">{/**Curtir */}
                                Curtir
                            </p>
                        </div>

                    </div>
                </div>
            </section> {/*fim section menu*/}
        </>
    )


}
// FUNC faltas = Detalhes, Lista de Desejos, Curtir