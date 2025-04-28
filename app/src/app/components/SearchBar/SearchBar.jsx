// não há nada linkado pois apenas estou guardando a função


export default function SearchBar() {

    const [search, setSearch] = useState("")

    // console.log(search)

    const searchLowerCase = search.toLowerCase()

    const animes = catalogo.filter(anime => anime.titulo.toLowerCase().includes(searchLowerCase))

    function noResults() {

        if (animes.length == 0) {

            return (
                <div className="flex justify-center items-center h-[49vh]">
                    <div className="flex flex-col items-center justify-center w-1/2">
                        <p className="text-xl p-5 text-justify">Ainda não temos esse anime...</p>
                        <p className="text-xl p-5 text-justify">Tente outra pesquisa! </p>
                    </div>
                    <div className="flex justify-center w-1/2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-40">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                        </span>
                    </div>
                </div>

            )
        }
    }

    <div className="flex items-center justify-center border gap-2 rounded-lg w-96 p-0.5 bg-blue-50 text-black ">
        <label htmlFor="search">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

        </label>
        <input id="search" type="search" placeholder="Black Clover . . ." value={search} onChange={(e) => setSearch(e.target.value)}
            className="
                w-full
                border-none
                appearance-none
                p-1
                px-3
                "/>
    </div>
}