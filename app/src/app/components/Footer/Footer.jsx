import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div
                className="
                 bg-gradient-to-t
                from-rose-600 to-background
                grid 
                lg:h-32
                md:h-32
                h-52
            ">
                <div
                    className="
                    flex justify-center items-end
                    p-5 text-center
                    ">
                    <span>&copy;Neko Stream 2025. Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    )
}