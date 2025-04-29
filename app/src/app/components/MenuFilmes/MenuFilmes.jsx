"use client";
import { useState, useEffect } from "react";
import "./index.css";
import dataBruto from "../../data/dadosFilmes.js";

export default function menuFilmes({ id }) {
    const [ids, setIds] = useState([]);
    const [statusWatchList, setWatchList] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [buttonText, setButtonText] = useState("Leia mais");
    const [popUpDetalhes, SetpopUpDetalhes] = useState(true);
    const [statusCurtir, setCurtir] = useState(false);

    useEffect(() => {
        const storedIds = JSON.parse(localStorage.getItem("meusIds")) || [];
        setIds(storedIds);
        const verificaçãoIdExiste = storedIds.includes(id);
        setWatchList(!verificaçãoIdExiste);
    }, [id]);

    const data = dataBruto.find(p => p.id == id);

    function toggleHeight() {
        setIsExpanded(!isExpanded);
        setButtonText(isExpanded ? "Leia mais" : "Recolher"); // Alterna o texto
    };

    function exibirPopUp() {
        SetpopUpDetalhes(!popUpDetalhes);
    };

    function watchList() {
        const verificaçãoIdExiste = ids.includes(id);
        if (verificaçãoIdExiste) {
            const idsAtualizados = ids.filter(item => item !== id);
            localStorage.setItem("meusIds", JSON.stringify(idsAtualizados));
            setIds(idsAtualizados);
            setWatchList(true);
        } else {
            const novoIds = [...ids, id];
            localStorage.setItem("meusIds", JSON.stringify(novoIds));
            setIds(novoIds);
            setWatchList(false);
        }
    }

    function funcCurtir() {
        setCurtir(!statusCurtir);
    }

    let exibirWatchList = "";
    if (!statusWatchList) {
        exibirWatchList = (
            <img src="/icon/aprovar.png" alt="icon_watch_list" className="w-8 h-8" />
        );
    };
    let exibirWatchListWhite = "";
    if (!statusWatchList) {
        exibirWatchListWhite = (
            <img src="/icon/aproveWhite.png" alt="icon_watch_list" className="w-8 h-8" />
        );
    };



    let exibirCurtir = "";
    if (statusCurtir) {
        exibirCurtir = (
            <img src="/icon/coracao.png" alt="icon_watch_list" className="w-8 h-8" />
        );
    };

    return (
        <>
            <section className=" bg-black px-5 pb-5 MenuComponent ">{/*Inico section menu*/}
                <div className="
                    w-full 
                    bg-neutral-800 
                    border-2
                    border-neutral-700 
                    shadow-xl
                    shadow-rose-500
                    rounded-lg"> {/*div central menu*/}
                    <div className="
                        font-bold 
                        sm:text-5xl 
                        md:text-2xl 
                        lg:text-3xl 
                        xl:text-4xl 
                        text-4xl 
                        text-justify
                        bg-neutral-800 
                        text-red-500 
                        rounded-t-sm ">{/*titulo menu*/}
                        <h1 className="text-center mt-4">{data.titulo}</h1>
                    </div>
                    <div className="flex">
                        <div className={`
                            ${isExpanded ? "h-auto" : "h-[50px]"} 
                            overflow-hidden 
                            transition-all 
                            bg-neutral-800 
                            py-4 
                            px-4 
                            font-mono 
                            text-justify`}>
                            {data.descricao}
                        </div>
                        <div className="flex justify-center">

                            <button onClick={toggleHeight} className="
                                bg-neutral-200
                                text-neutral-950 
                                p-3 rounded-full m-2
                                transition
                                cursor-pointer 
                                hover:scale-105 
                                hover:text-blue-400">
                                {buttonText}
                            </button>
                        </div>
                    </div>
                    <div>

                        <div className="
                            grid 
                            grid-flex-row 
                            bg-neutral-800 
                            text-rose-100
                            pl-2 
                            gap-1 
                            justify-center 
                            md:justify-start">
                            <div className="
                                text-4xl 
                                flex 
                                justify-center 
                                md:justify-start 
                                md:text-3xl"> {/**assistir */}
                                <button className="
                                    cursor-pointer 
                                    transition
                                    hover:scale-105 
                                    hover:text-stone-500">
                                    Assistir
                                </button>
                            </div>
                            <div className="
                                text-4xl 
                                flex 
                                justify-center 
                                md:justify-start 
                                md:text-3xl">{/*Detalhes */}
                                <button onClick={exibirPopUp} className=" 
                                    cursor-pointer 
                                    transition
                                    hover:scale-105 
                                    hover:text-stone-500">
                                    Detalhes
                                </button>

                                <div className={`
                                ${popUpDetalhes ? 'opacity-0 invisible scale-95' : 'opacity-100 visible scale-100'} 
                                fixed 
                                bg-neutral-800 
                                rounded-lg 
                                border-4 
                                border-neutral-700  
                                top-1/2 
                                left-1/2 
                                transform 
                                -translate-x-1/2 
                                -translate-y-1/2  
                                w-9/10 md:w-3/4 
                                lg:w-3/5 
                                xl:w-1/2 
                                z-50
                                transition-all duration-300 ease-out
                            `}> {/**PopUp detalhes */}
                                    <div className="flex justify-end">
                                        <button onClick={exibirPopUp} >
                                            <img src='/icon/fechar.png' alt='fechar' className="
                                                w-7 
                                                cursor-pointer 
                                                transition
                                                hover:scale-105
                                                m-2"/>
                                        </button>
                                    </div>
                                    <div className="
                                        bg-zinc-900 
                                        transition
                                        mx-5 
                                        mb-5 
                                        flex 
                                        justify-center 
                                        itens-center">
                                        <img src={data.fotoDescricao} />
                                    </div>
                                    <div className="
                                        bg-zinc-900 
                                        grid 
                                        grid-cols-2 
                                        grid-rows-1
                                        sm:gap-10  
                                        sm:grid-cols-3">
                                        <div className="col-start-1 flex justify-center sm:justify-end">
                                            <div className="rating"> {/* Estrelas */}
                                                <input value="5" name="rate" id="star5" type="radio"></input>
                                                <label title="text" htmlFor="star5"></label>
                                                <input value="4" name="rate" id="star4" type="radio"></input>
                                                <label title="text" htmlFor="star4"></label>
                                                <input value="3" name="rate" id="star3" type="radio"></input>
                                                <label title="text" htmlFor="star3"></label>
                                                <input value="2" name="rate" id="star2" type="radio"></input>
                                                <label title="text" htmlFor="star2"></label>
                                                <input value="1" name="rate" id="star1" type="radio"></input>
                                                <label title="text" htmlFor="star1"></label>
                                            </div>
                                        </div>
                                        <div className=" sm:col-start-3  sm:justify-start justify-center flex ">
                                            <div className="flex">
                                                <button onClick={watchList} className=" 
                                                text-2xl
                                                cursor-pointer
                                                transition 
                                                hover:scale-102 
                                                hover:text-stone-500">
                                                    Watchlist
                                                </button>
                                                <div className="flex items-center ml-3">
                                                    {exibirWatchListWhite}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-lg mt-2 px-3 roboto mb-3 ">{data.descricaoDetalhes}</p>
                                    </div>
                                    <div className="flex gap-3 text-lg pl-3">
                                        <p className="">
                                            dublagem:
                                        </p>
                                        <p className="roboto">
                                            {data.dublagem}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 text-lg pl-3">
                                        <p className="">
                                            legenda:
                                        </p>
                                        <p className="roboto">
                                            {data.legenda}
                                        </p>
                                    </div>
                                </div>


                            </div>
                            <div className="
                                text-4xl 
                                flex 
                                justify-center 
                                md:justify-start 
                                md:text-3xl">{/**Watchlist */}
                                <button onClick={watchList} className=" 
                                    cursor-pointer
                                    transition 
                                    hover:scale-105 
                                    hover:text-stone-500">
                                    Watchlist
                                </button>
                                <div className="flex items-center ml-3">
                                    {exibirWatchList}
                                </div>


                            </div>
                            <div className="
                                text-4xl 
                                flex 
                                justify-center 
                                md:justify-start 
                                md:text-3xl">{/**Curtir */}
                                <div className="flex">
                                    <button onClick={funcCurtir} className=" 
                                            cursor-pointer 
                                            transition
                                            hover:scale-105 
                                            hover:text-stone-500">
                                        Curtir
                                    </button>
                                    <div className="flex justify-center items-center ml-3">
                                        {exibirCurtir}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section> {/*fim section menu*/}
        </>
    )


}

