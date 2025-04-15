export default function Banners() {
    const promocoes = [
        {
            id: 1,
            titulo: "Assista onde quiser",
            subtitulo: "Assista no site ou no app Neko Stream em seu celular, tablet ou seleção de Smart TVs — em até 4 dispositivos ao mesmo tempo.",
            img: "./namo.png",
        },
        {
            id: 2,
            titulo: "Baixe para assistir",
            subtitulo: "Assista offline no app Neko Stream ao baixar títulos em seu iPhone, iPad, tablet ou dispositivo Android.",
            img: "./test.png",
        },
        {
            id: 3,
            titulo: "Economia de dados",
            subtitulo: "Controle o uso de dados ao baixar e assistir a vídeos em uma seleção de celulares e tablets.",
            img: "./test.png",
        },
    ];

    return (
        <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 font-extrabold max-w-7xl">
          {promocoes.map((promocao) => (
            <div key={promocao.id} className="text-center p-4">
              <img src={promocao.img} alt={promocao.titulo} className="mx-auto mb-4" />
              <p className="text-lg">{promocao.titulo}</p>
              <span className="text-sm font-mono">{promocao.subtitulo}</span>
            </div>
          ))}
        </div>
      </div>
      
      
      
       
    );
}
