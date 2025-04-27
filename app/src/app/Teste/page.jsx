'use client'
// localStorage.clear();
export default function teste () {

    function salvarTeste () {
        // const user = { id: 1, name: 'João', active: true };
        // localStorage.setItem('user', JSON.stringify(user));
        // alert('Dados salvos com sucesso!');
    }
    function limparLocalStorage(){
        alert('LocalStorage foi limpo.');
        localStorage.clear();
        console.log(localStorage)
    }

    const teste1 = (localStorage.getItem("user"));
    // const teste2 = teste1.find(p => p.id == 1)
    // const teste2 = JSON.stringify(localStorage.getItem('user'));
    return (
        <>
            <div>
                {/* <button className="bg-green-900" onClick={salvarTeste}>clique aqui</button>
                <p>ler item {teste1}</p>
                <p>-----</p> */}

                <p>-----</p>
                <div>limpar LocalStorage !Importante</div>
                <button className="bg-green-800" onClick={limparLocalStorage}>clique aqui</button>
            </div>
        </>
    )
}