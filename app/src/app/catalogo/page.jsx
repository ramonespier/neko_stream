"use client"

import { catalogo } from "../catalogo.js";
import { useState } from "react";
import './page.css'

export default function Catalogo() {

    const [search, setSearch] = useState("")

    // console.log(search)

    const searchLowerCase = search.toLowerCase()

    const animes = catalogo.filter(anime => anime.titulo.toLowerCase().includes(searchLowerCase))

    return (
        <div>
            <div className="w-full flex flex-col p-6">

                <div className="flex items-center border gap-2 rounded-lg w-96 p-0.5 bg-blue-50 text-black">
                    <label for="search">🔎</label>
                    <input id="search" type="search" placeholder="Black Clover . . ." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="
                w-full
                border-none
                appearance-none
                p-1
                px-3
                "/>
                </div>

                <ul className="
                m-10
                grid 
                grid-cols-[repeat(auto-fill,minmax(275px,1fr))] 
                justify-items-center    
                gap-8">

                    {animes.map(anime => (
                        <li key={anime.id}
                            className="
                        transition
                        border-2
                        max-w-[300px] 
                        p-5 
                        bg-rose-800 
                        col-auto 
                        row-auto 
                        rounded-xl
                        shadow-lg
                        shadow-amber-300
                        hover:scale-105
                        cursor-pointer
                        ">

                            <div className="
                            flex 
                            flex-col 
                            gap-4">

                                <h3 className="
                                text-center 
                                text-2xl 
                                font-extrabold">
                                    {anime.titulo}
                                </h3>

                                <img className="border-2 border-neutral-200/70"
                                    src={anime.foto} />

                                <p className="text-justify text-lg text-">{anime.descricao}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )

}

