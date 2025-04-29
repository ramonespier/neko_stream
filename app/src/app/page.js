"use client"

import './page.css'
import Filtro from './components/Catalago/Catalago.jsx';

export default function Catalogo() {

    return (
        <div className="m-5 mt-8">
          <div>
            <h1 className="text-2xl font-extrabold">Aventura</h1>
            <Filtro genreId="Aventura" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Ação</h1>
            <Filtro genreId="Ação" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Suspense</h1>
            <Filtro genreId="Suspense" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Esportes</h1>
            <Filtro genreId="Esportes" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Ficção Científica</h1>
            <Filtro genreId="Ficção Científica" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Mecha</h1>
            <Filtro genreId="Mecha" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Cyberpunk</h1>
            <Filtro genreId="Cyberpunk" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Comédia</h1>
            <Filtro genreId="Comédia" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Romance</h1>
            <Filtro genreId="Romance" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Horror</h1>
            <Filtro genreId="Horror" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Drama</h1>
            <Filtro genreId="Drama" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Fantasia</h1>
            <Filtro genreId="Fantasia" />
          </div>
        </div>
      );
      
}

