export default async function Teste({ params }) {
    const {id} = await params; // Obtém o ID dinâmico da URL

    return (
        <div>
            <h1>O ID na URL é: {id}</h1>
            <p>Essa é a página para o ID dinâmico: {id}</p>
        </div>
    );
}
