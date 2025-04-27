'use client'
export default function watchList(){

    function limparLocalStorage(){
        localStorage.clear();
        alert('LocalStorage foi limpo.');
    }

    return (
        <>
        <div>limpar LocalStorage !Importante</div>
        <button className="bg-green-800" onClick={limparLocalStorage}>clique aqui</button>
        </>
    )
}