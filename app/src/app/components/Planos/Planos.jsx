"use client";

import { useState } from "react";
import CardVip1 from "../Card/CardVip1";
import CardVip2 from "../Card/CardVip2";
import CardVip3 from "../Card/CardVip3";

const cards = [
  { nome: "Plano 1", componente: <CardVip1 /> },
  { nome: "Plano 2", componente: <CardVip2 /> },
  { nome: "Plano 3", componente: <CardVip3 /> },
];

export default function Planos() {
  const [planoSelecionado, setPlanoSelecionado] = useState(0);

  return (
    <div className="md:hidden flex flex-col items-center gap-6 p-6">
      {/* Botões para trocar de plano */}
      <div className="flex gap-4">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setPlanoSelecionado(index)}
            className={`px-4 py-2 rounded-xl border-2 transition ${
              planoSelecionado === index
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            }`}
          >
            {card.nome}
          </button>
        ))}
      </div>

      {/* Card atual */}
      <div className="w-full max-w-md">{cards[planoSelecionado].componente}</div>
    </div>
  );
}
