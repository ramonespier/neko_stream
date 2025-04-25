"use client"

import { catalogo } from "./catalogo.js";
import { useState, useEffect } from "react";
import './page.css'
import Link from 'next/link'

export default function Catalogo() {

  const [search, setSearch] = useState("")
  const [shuffledAnimes, setShuffledAnimes] = useState([]);
  const [moreItems, setMoreItems] = useState([])

  useEffect(() => {
    const shuffled = [...animes].sort(() => 0.5 - Math.random())
    setShuffledAnimes(shuffled)
  }, [])
  // console.log(search)

  const searchLowerCase = search.toLowerCase()
  animes = shuffledAnimes
    .filter(anime => anime.titulo.toLowerCase().includes(searchLowerCase))
    .slice(0, moreItems);

  const loadMore = () => {
    setMoreItems(prev => prev + 8);
  };

  const animes = catalogo.filter(anime => anime.titulo.toLowerCase().includes(searchLowerCase))



  return (
    <div>
      <div className="w-full flex flex-col p-6">

        <div className="flex lg:justify-end justify-center">
          <div className="flex items-center border gap-2 rounded-lg w-96 p-0.5 bg-blue-50 text-black">
            <label htmlFor="search">🔎</label>
            <input id="search" type="search" placeholder="Black Clover . . ." value={search} onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                border-none
                appearance-none
                p-1
                px-3
                "/>
          </div>
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
                        bg-rose-800 
                        col-auto 
                        row-auto 
                        rounded-xl
                        shadow-lg
                        shadow-amber-300
                        hover:scale-105
                        cursor-pointer
                        ">
              <Link href={`/filmes/${anime.id}`}>
                <div className="w-full h-full p-5">
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
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão para carregar mais itens */}
      {filteredAnimes.length > 0 && filteredAnimes.length % 8 === 0 && (
        <div className="flex justify-center">
          <button 
            onClick={loadMore}
            className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Carregar Mais
          </button>
        </div>
      )}  
      </div>
    </div>

  )

}


