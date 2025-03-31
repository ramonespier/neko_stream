import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div
                className="
                h-96 bg-gradient-to-t
                from-rose-600 to-background
                grid grid-cols-5 grid-rows-4
                ">

                <div
                    className='
                    row-start-3 row-span-2
                    col-start-5
                    border-2
                    bg-rose-900
                    rounded-tl-xl
                    '>

                    <div
                        className='
                        flex flex-col
                        items-center justify-center
                        gap-7 mt-7
                        '>
                        <span>Site desenvolvido por:</span>

                        <div>
                            <div>Davi Chagas</div>
                            <div>Pedro H. Leonardi</div>
                            <div>Ramon Coelho</div>
                        </div>
                    </div>
                </div>

                <div
                    className="
                    row-start-4
                    col-start-2 col-span-3
                    flex justify-center items-end
                    p-5
                    ">
                    <span>&copy;Neko Stream 2025. Todos os direitos reservados.</span>
                </div>

            </div>
        </footer>
    )
}