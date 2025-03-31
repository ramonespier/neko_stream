"use client"

import Switch from "../BotaoTema/Botao"
import './header.css'

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

                    <span><img src="/neko_dark.png" className="w-40 ml-5" alt="Logotipo Neko Stream" /></span>

                    <div className="flex items-center 
                    justify-center gap-10 
                    text-2xl">

                        <ul 
                        className="flex items-center 
                        justify-center gap-10
                        ">
                            <li className="p-5 hover:scale-105 hover:text-gray-400 transition"><a href="#">Catálogo</a></li>
                            <li className="p-5 hover:scale-105 hover:text-gray-400 transition"><a href="#">Watchlist</a></li>
                        </ul>
                    </div>
                </div>

                <div
                    className="flex items-center 
                    gap-10
                    text-2xl m-5">
                    <ul className="flex items-center gap-10">
                        <li><Switch /></li>
                        <li className="p-5 hover:scale-105 hover:text-gray-400 transition w-36"><img className="rounded-full" src="/perfil.jfif" alt="Foto de perfil" /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}