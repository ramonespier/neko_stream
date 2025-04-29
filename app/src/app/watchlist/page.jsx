'use client'

import { catalogo } from "../catalogo.js";
import '../page.css'

import { useState, useEffect } from 'react';

export default function watchList() {

  function limparDados() {
    localStorage.removeItem("meusIds");
    { setidUseState([]) }
  }

  const [search, setSearch] = useState("");
  const [idUseState, setidUseState] = useState([]);
  // const [itensWatchList, setitensWatchList] = useState([])

  useEffect(() => {
    const idLocalStorage = JSON.parse(localStorage.getItem("meusIds")) || [];
    setidUseState(idLocalStorage.map(Number));

  }, []);

  const searchLowerCase = search.toLowerCase();
  const catalogo2 = catalogo.filter((p) => idUseState.includes(p.id));
  const animes = catalogo2.filter((anime) =>
    anime.titulo.toLowerCase().includes(searchLowerCase)
  );

  function noResults() {
    if (animes.length == 0) {
      return (

        <div className="h-[45vh] w-full flex flex-col items-center justify-center">
          <p className="flex items-center justify-center col-start-2 text-xl">Sua watchlist está vazia!</p>
          <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-40 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
          </div>

          <div className="m-10"></div>
        </div>
      )
    }
  }

  console.log(idUseState);

  return (
    <>
      <div>

      </div>
      <div className="w-full flex flex-col p-6">
        <div className="
          flex 
          items-center 
          border 
          gap-2 
          rounded-lg 
          w-96 
          p-0.5 
          bg-blue-50 
          text-black">
          <label htmlFor="search">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>


          </label>
          <input
            id="search"
            type="search"
            placeholder="Black Clover . . ."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              border-none
              appearance-none
              p-1
              px-3
              "/>
        </div>

        <ul
          className={`${noResults() ? 'flex flex-col' : 'grid'}
            justify-center
            items-center
            m-10
            grid-cols-[repeat(auto-fill,minmax(275px,1fr))] 
            justify-items-center    
            gap-8`}>
            {noResults()}
          
          {animes.map((anime) => (
            <li
              key={anime.id}
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
              <a href={`/filmes/${anime.id}`}>
                <div className="w-full h-full p-5">
                  <div
                    className="
                      flex 
                      flex-col 
                      gap-4">
                    <h3
                      className="
                        text-center 
                        text-2xl 
                        font-extrabold">
                      {anime.titulo}
                    </h3>
                    <img className="border-2 border-neutral-200/70" src={anime.foto} />
                    <p className="text-justify text-lg text-">
                      {anime.descricao}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button onClick={limparDados} className='
        bg-rose-800 
        mb-10 
        mt-5 
        px-5 
        py-2 
        rounded-lg h
        over:scale-110 
        hover:bg-rose-700 
        cursor-pointer'>
          Limpar WatchList
        </button>
      </div>
    </>
  );
}
