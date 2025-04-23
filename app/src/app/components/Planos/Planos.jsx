"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importe do Framer Motion
import CardVip1 from "../Card/CardVip1";
import CardVip2 from "../Card/CardVip2";
import CardVip3 from "../Card/CardVip3";

const cards = [
  { nome: "FAN", componente: <CardVip1 /> },
  { nome: "MEGAFAN", componente: <CardVip2 /> },
  { nome: "BLASTER FAN", componente: <CardVip3 /> },
];

export default function Planos() {
  const [planoSelecionado, setPlanoSelecionado] = useState(0);

  return (
    <>
      <div className="lg:hidden flex flex-col items-center gap-6 p-6">
        {/* botões para trocar de plano */}
        <div className="flex gap-4">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => setPlanoSelecionado(index)}
              className={`px-4 py-2 rounded-xl border-2 transition ${planoSelecionado === index
                  ? "bg-rose-900 text-white font-extrabold border"
                  : "bg-black text-rose-600 font-extrabold border"
                }`}
            >
              {card.nome}
            </button>
          ))}
        </div>

          {/* framer-motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={planoSelecionado}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md flex justify-center items-center"
          >
            {cards[planoSelecionado].componente}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex justify-center lg:gap-5">
        <div className="hover:scale-105 transition-all duration-150 ease-linear">
          <CardVip1 />
        </div>
        <div className="hover:scale-105 transition-all duration-150 ease-in">
          <CardVip2 />
        </div>
        <div className="hover:scale-105 transition-all duration-150 ease-in">
          <CardVip3 />
        </div>
      </div>
    </>
  );
}