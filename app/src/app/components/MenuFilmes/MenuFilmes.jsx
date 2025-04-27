"use client";
import { useState, useEffect } from "react";
import "./index.css";
import dataBruto from "../../data/dadosFilmes.js";

export default function menuFilmes({ id }) {
    const [ids, setIds] = useState([]);
    const [statusWatchList, setWatchList] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [buttonText, setButtonText] = useState("Expandir");
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
        setButtonText(isExpanded ? "Expandir" : "Recolher"); // Alterna o texto
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

    let exibirCurtir = "";
    if (statusCurtir) {
        exibirCurtir = (
            <img src="/icon/coracao.png" alt="icon_watch_list" className="w-8 h-8" />
        );
    };

    return (
        <>
            <section className=" bg-black p-5 ">{/*Inico section menu*/}
                <div className="
                    w-full 
                    mr-5 
                    bg-neutral-800 
                    border-3 
                    border-neutral-500 
                    shadow-rose-css 
                    rounded-lg"> {/*div central menu*/}
                    <div className="
                        font-bold 
                        sm:text-5xl 
                        md:text-2xl 
                        lg:text-3xl 
                        xl:text-4xl 
                        text-4xl 
                        bg-neutral-800 
                        text-red-500 
                        rounded-t-sm ">{/*titulo menu*/}
                        <h1 className="text-center">{data.titulo}</h1>
                    </div>
                    <div className="bg-neutral-800">
                        <div className={`
                            ${isExpanded ? "h-auto" : "h-[50px]"} 
                            overflow-hidden 
                            transition-all 
                            bg-neutral-800 
                            pt-4 
                            px-4 
                            roboto 
                            text-justify`}>
                            {data.descricao}
                        </div>
                        <div className="flex justify-center">

                            <button onClick={toggleHeight} className="
                                text-blue-600 
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
                            text-black 
                            bg-neutral-800 
                            text-white 
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
                                    hover:scale-105 
                                    hover:text-stone-500">
                                        Detalhes
                                </button>

                                <div className={`
                                    ${popUpDetalhes ? 'hidden' : 'fixed'} 
                                    bg-neutral-800 
                                    rounded-lg 
                                    border-4 
                                    border-neutral-500  
                                    top-1/2 
                                    left-1/2 
                                    transform 
                                    -translate-x-1/2 
                                    -translate-y-1/2  
                                    w-9/10 md:w-3/4 
                                    lg:w-3/5 
                                    xl:w-1/2 
                                    z-50`}> {/**PopUp detalhes */}
                                    <div className="flex justify-end">
                                        <button onClick={exibirPopUp} >
                                            <img src='/icon/fechar.png' alt='fechar' className="
                                                w-7 
                                                cursor-pointer 
                                                hover:scale-105
                                                m-2"/>
                                        </button>
                                    </div>
                                    <div className="
                                        bg-zinc-900 
                                        mx-5 
                                        mb-5 
                                        flex 
                                        justify-center 
                                        itens-center">
                                        <img src={data.fotoDescricao}/>
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
                                            <div className=" flex content-center h-10 w-10">

                                                <div className="object-contain heart-container" title="Like"> {/** Coração */}
                                                    <input type="checkbox" className="checkbox" id="Give-It-An-Id"></input>
                                                    <div className="svg-container">
                                                        <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                                            </path>
                                                        </svg>
                                                        <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                                            </path>
                                                        </svg>
                                                        <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                                            <polygon points="10,10 20,20"></polygon>
                                                            <polygon points="10,50 20,50"></polygon>
                                                            <polygon points="20,80 30,70"></polygon>
                                                            <polygon points="90,10 80,20"></polygon>
                                                            <polygon points="90,50 80,50"></polygon>
                                                            <polygon points="80,80 70,70"></polygon>
                                                        </svg>
                                                    </div>
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

