"use client"

import Switch from "../BotaoTema/Botao"
import './header.css'
import Dropdown from "../Dropdown/dropdown"

export default function Header() {
    return (
        <header>
            <nav
            className="
            bg-gradient-to-b
            from-rose-600
            via-rose-900
            to-background
            w-full
            inline-flex justify-between items-center 
            ">

                <div className="flex gap-10">


                    <span><img src="/neko_dark.png" alt="Logotipo Neko Stream"
                    className="w-40 ml-5 absolute top-5"  
                    /></span>

                    <div className="w-40"></div> {/* espaço apenas para ajeitar distância equivalente */}

                    <div className="flex items-center 
                    justify-center gap-10 
                    text-2xl ">

                        <ul 
                        className="flex items-center 
                        justify-center gap-10
                        ">
                            <li className="p-5 hover:scale-105 hover:text-gray-400 transition"><a href="#">Catálogo</a></li>
                            <li className="p-5 hover:scale-105 hover:text-gray-400 transition"><a href="#">Watchlist</a></li>
                        </ul>
                    </div>
                </div>

                <Dropdown/>

                <div
                    className="flex items-center 
                    gap-10
                    text-2xl m-5">
                    <ul className="flex items-center gap-10">
                        <li className="p-5 hover:scale-105 hover:text-gray-400 transition w-36"><img className="rounded-full" src="/perfil.jfif" alt="Foto de perfil" /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}