export default function Banners() {

    return (
        <div className="grid grid-cols-5 font-extrabold gap-20 mt-10">
            <div className="col-start-2">
                <div className="text-center">
                <img src="./namo.png" className=""></img>
                <p>Assista onde quiser</p>
                <p>Assista no site ou no app Prime Video em seu celular, tablet ou seleção de Smart TVs — em até 3 dispositivos ao mesmo tempo.</p>
                </div>
            </div>
           
            <div className="col-start-3">
                <img src="./test.png" alt="" />
            <p>Baixe para assistir quando e onde quiser</p>
            <p>Assista offline no app Prime Video ao baixar títulos em seu iPhone, iPad, tablet ou dispositivo Android.</p>
            </div>

            <div className="col-start-4">
            <img src="./test.png" alt="" />

            <p>Economia de dados</p>
            <p>Controle o uso de dados ao baixar e assistir a vídeos em uma seleção de celulares e tablets.</p>
            </div>

        </div>
    )
}