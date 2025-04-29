"use client"
import { useState } from "react";
import dataBruto from "../../data/dadosFilmes.js"

export default function Carousel({ id }) {
  const [slideAtual, setslideAtual] = useState(0);
  const data = dataBruto.find(p => p.id == id)
  const images = data.fotosBanner

  const slideAnterior = () => {
    const primeiroSlide = slideAtual === 0;
    const novoSlide = primeiroSlide ? images.length - 1 : slideAtual - 1;
    setslideAtual(novoSlide);
  };

  const proximoSlide = () => {
    const ultimoSlide = slideAtual === images.length - 1;
    const novoSlide = ultimoSlide ? 0 : slideAtual + 1;
    setslideAtual(novoSlide);
  };

  return (
    <div className="relative w-full md:w-3/4 mx-auto z-0">
      {/* Imagem atual */}
      <div className="w-full overflow-hidden ">
        <img
          src={images[slideAtual]}
          alt={`Slide ${slideAtual}`}
          className="w-full h-80 object-cover"
        />
      </div>

      <button
        onClick={slideAnterior}
        className="
          absolute 
          top-1/2 
          left-4 
          text-xl
          transition
          cursor-pointer
          hover:scale-105
          -translate-y-1/2 
          text-white 
          bg-rose-700/70 
          border
          p-4 
          rounded-full"
      >
        {"<"}
      </button>

      <button
        onClick={proximoSlide}
        className="
          absolute 
          top-1/2 
          right-4 
          text-xl
          transition
          cursor-pointer
          hover:scale-105
          -translate-y-1/2 
          text-white 
          bg-rose-700/70 
          border
          p-4 
          rounded-full"
      >
        {">"}
      </button>
    </div>
  );
};

