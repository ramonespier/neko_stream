"use client"

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
                        className="lg:w-40 md:w-40 w-32 ml-5 absolute top-5"
                    /></span>

                    <div className="w-40 h-40"></div> {/* espaço apenas para ajeitar distância equivalente */}

                    <div className="flex items-center 
                    justify-center gap-10
                    text-2xl ">

                        <ul
                            className="lg:flex md:flex
                        hidden items-center
                        justify-center gap-10
                        
                        ">
                            <li style={{ fontFamily: "Juzho" }} className="p-5 text-3xl hover:scale-105 hover:text-gray-400 transition"><a href="/">Catálogo</a></li>
                            <li style={{ fontFamily: "Juzho" }} className="p-5 text-3xl hover:scale-105 hover:text-gray-400 transition"><a href="/watchlist">Watchlist</a></li>
                            <li style={{ fontFamily: "Juzho" }} className="p-5 text-3xl hover:scale-105 hover:text-gray-400 transition"><a href="/planos">Planos</a></li>
                        </ul>
                    </div>
                </div>

                <div
                    className="md:hidden
                    text-2xl z-20"
                    style={{ fontFamily: "Juzho" }}
                >
                    <Dropdown />
                </div>
                <div>
                    <ul className="hidden lg:flex md:flex mr-5 items-center gap-10">
                        <li className="p-5 hover:scale-105 hover:text-gray-400 transition w-36"><img className="rounded-full" src="/perfil.jfif" alt="Foto de perfil" /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}