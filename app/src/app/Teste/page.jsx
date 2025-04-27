// components/LocalStorageComponent.js
'use client'
// components/LocalStorageComponent.js
import { useState } from 'react';

export default function LocalStorageComponent() {
  const [output, setOutput] = useState("");

  // Função para adicionar um ID ao array armazenado no localStorage
  function adicionarDados() {
    const ids = JSON.parse(localStorage.getItem("meusIds")) || []; // Recuperar ou inicializar array
    const novoId = ids.length + 1; // Gerar um novo ID (incremental)
    ids.push(novoId); // Adicionar o novo ID ao array
    localStorage.setItem("meusIds", JSON.stringify(ids)); // Armazenar novamente no localStorage
    alert(`ID ${novoId} adicionado ao localStorage!`);
  }

  // Função para exibir os IDs armazenados
  function exibirDados() {
    const ids = JSON.parse(localStorage.getItem("meusIds")) || []; // Recuperar array
    if (ids.length > 0) {
      setOutput(`IDs armazenados: ${ids.join(", ")}`); // Mostrar os IDs como uma string
    } else {
      setOutput("Nenhum ID armazenado no localStorage.");
    }
  }

  // Função para limpar todos os IDs do array no localStorage
  function limparDados() {
    localStorage.removeItem("meusIds"); // Remover chave do localStorage
    alert("Todos os IDs foram removidos do localStorage!");
    setOutput(""); // Limpar o estado de exibição
  }

  return (
    <div>
      <h1>Exemplo de LocalStorage com Array de IDs</h1>
      <button className='bg-red-500' onClick={adicionarDados}>Adicionar ID</button>
      <button className='bg-green-500' onClick={exibirDados}>Exibir IDs</button>
      <button className='bg-blue-500' onClick={limparDados}>Limpar IDs</button>
      <div>{output}</div>
    </div>
  );
}