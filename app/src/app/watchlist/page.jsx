'use client'

import { catalogo } from "../catalogo.js";
import '../page.css'

import { useState, useEffect } from 'react';

export default function watchList() {

  function limparDados() {
    localStorage.removeItem("meusIds");
    alert("Todos os titulos foram removidos do watchList, recarregue a pagina!");
  }

  const [search, setSearch] = useState("");
  const [id3, setId3] = useState([]);


  useEffect(() => {
    const id2 = JSON.parse(localStorage.getItem("meusIds")) || [];
    setId3(id2.map(Number));
  }, []);

  const searchLowerCase = search.toLowerCase();
  const catalogo2 = catalogo.filter((p) => id3.includes(p.id));
  const animes = catalogo2.filter((anime) =>
    anime.titulo.toLowerCase().includes(searchLowerCase)
  );

  function noResults() {
    if (animes.length == 0) {
      return <p className="col-start-2 text-xl mt-12">Não existe itens na watchList</p>
    }
  }

  console.log(id3);

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
          className="
            m-10
            grid 
            grid-cols-[repeat(auto-fill,minmax(275px,1fr))] 
            justify-items-center    
            gap-8">
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
