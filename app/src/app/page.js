"use client"

import './page.css'
import Filtro from './components/Catalago/Catalago.jsx';

export default function Catalogo() {

    return (

        <div>
            <Filtro genreId={'Aventura'} />
            <Filtro genreId={'Ação'} />
            <Filtro genreId={'Suspense'} />
            <Filtro genreId={'Esportes'} />
            <Filtro genreId={'Ficção Cientifíca'} />
            <Filtro genreId={'Mecha'} />
            <Filtro genreId={'Cyberpunk'} />
            <Filtro genreId={'Comédia'} />
            <Filtro genreId={'Romance'} />
            <Filtro genreId={'Horror'} />
            <Filtro genreId={'Drama'} />
            <Filtro genreId={'Fantasia'} />
        </div>
    )

}

