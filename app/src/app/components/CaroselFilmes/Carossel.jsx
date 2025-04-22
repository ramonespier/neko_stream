"use client"
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/demonslayer.jpg", // Substitua pelo caminho das suas imagens
    "/Carroselimg/DemonSlayerCarrosel.jpeg",
    "/image3.jpg",
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-3/4 mx-auto z-0">
      {/* Imagem atual */}
      <div className="w-full h-100 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Botão de anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
      >
        {"<"}
      </button>

      {/* Botão de próximo */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;