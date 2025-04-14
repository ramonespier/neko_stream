export default function CardVip1() {
  return (
    <>
    
      <div className="card w-85 lg:w-[400] bg-rose-900 text-white p-8 rounded-xl border-2 mt-8">
        <div className="list flex flex-col items-center gap-5">
          <div className="titulo font-extrabold text-3xl"><h2>FAN</h2></div>
          <div className="price text-3xl font-extrabold">R$ 10,99/mês</div>
          <div className="button text-[16px] font-bold bg-rose-700 hover:bg-rose-950 duration-200 ease-in rounded-lg p-2"><button type="button">Comece um teste grátis de 7 dias</button></div>
          <div className="detalhes font-mono"><p>Assista a todo o acervo da Crunchyroll, sem propagandas, com novos episódios logo após o lançamento no Japão.*</p></div>
          <div className="flex flex-col">
            <span className="uppercase text-[12px]">——— plus ———</span>
            <span className="text-[13px]">✔ Assista em até 1 tela</span>
          </div>
        </div>
      </div>
    </>

  )
}