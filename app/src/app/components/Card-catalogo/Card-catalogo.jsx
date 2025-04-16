import catalogo from '../../catalogo.json'

export default function CardCatalogo() {
catalogo.map((dados) => (
        <div key={dados.id}
        className='w-10 h-10 bg-amber-500'>aaa</div>
    ))
}