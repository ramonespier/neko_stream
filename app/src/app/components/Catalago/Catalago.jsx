"use client";

import { Imprima } from "next/font/google";
import { use, useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";



export default function Catalogo({ genreId }) {
    const catalogoAnime2 = [
        {
            id: 1,
            titulo: "One Piece",
            descricao: "One Piece conta a jornada de Luffy, um pirata elástico, em busca do tesouro lendário para se tornar o Rei dos Piratas.",
            foto: "/catalogo/onepiece.jpg",
            genero: "Aventura"
        },
        {
            id: 2,
            titulo: "Naruto",
            descricao: "Naruto Uzumaki é um jovem ninja que sonha em se tornar Hokage, o líder de sua vila, e conquistar o respeito de todos.",
            foto: "/catalogo/naruto.jpg",
            genero: "Ação"
        },
        {
            id: 4,
            titulo: "Attack on Titan",
            descricao: "Humanos lutam pela sobrevivência contra Titãs gigantes que devoram pessoas, enquanto descobrem segredos sombrios sobre seu mundo.",
            foto: "/catalogo/aot.jpg",
            genero: "Ação"
        },
        {
            id: 5,
            titulo: "Death Note",
            descricao: "Light Yagami encontra um caderno sobrenatural que permite matar qualquer pessoa cujo nome seja escrito nele.",
            foto: "/catalogo/deathnote.jpg",
            genero: "Suspense"
        },
        {
            id: 6,
            titulo: "Fullmetal Alchemist: Brotherhood",
            descricao: "Os irmãos Edward e Alphonse Elric buscam a Pedra Filosofal para recuperar seus corpos após uma transmutação falha.",
            foto: "/catalogo/fma.jpg",
            genero: "Aventura"
        },
        {
            id: 7,
            titulo: "My Hero Academia",
            descricao: "Izuku Midoriya, um garoto sem poderes em um mundo de super-heróis, herda uma poderosa habilidade e entra em uma academia de heróis.",
            foto: "/catalogo/mha.jpg",
            genero: "Ação"
        },
        {
            id: 8,
            titulo: "Demon Slayer",
            descricao: "Tanjiro Kamado se torna um caçador de demônios para vingar sua família e curar sua irmã, transformada em um demônio.",
            foto: "/catalogo/demonslayer.jpg",
            genero: "Ação"
        },
        {
            id: 9,
            titulo: "Hunter x Hunter",
            descricao: "Gon Freecss embarca em uma jornada para se tornar um Hunter e encontrar seu pai, um lendário Hunter desaparecido.",
            foto: "/catalogo/hxh.jpg",
            genero: "Aventura"
        },
        {
            id: 10,
            titulo: "Bleach",
            descricao: "Ichigo Kurosaki ganha poderes de Ceifeiro de Almas e protege o mundo dos espíritos malignos conhecidos como Hollows.",
            foto: "/catalogo/bleach.webp",
            genero: "Ação"
        },
        {
            id: 11,
            titulo: "Tokyo Ghoul",
            descricao: "Ken Kaneki se torna meio-ghoul após um encontro mortal e luta para sobreviver em um mundo onde humanos e ghouls coexistem.",
            foto: "/catalogo/tokyoghoul.jpg",
            genero: "Drama"
        },
        {
            id: 12,
            titulo: "Jujutsu Kaisen",
            descricao: "Yuji Itadori engole um objeto amaldiçoado e se torna hospedeiro de um poderoso demônio, entrando para uma escola de feiticeiros.",
            foto: "/catalogo/jujutsukaisen.jpg",
            genero: "Ação"
        },
        {
            id: 13,
            titulo: "Sword Art Online",
            descricao: "Kirito e outros jogadores ficam presos em um jogo de realidade virtual onde a morte no jogo significa a morte na vida real.",
            foto: "/catalogo/sao.jpg",
            genero: "Aventura"
        },
        {
            id: 14,
            titulo: "Steins;Gate",
            descricao: "Rintaro Okabe e seus amigos acidentalmente criam uma máquina do tempo e enfrentam as consequências de alterar o passado.",
            foto: "/catalogo/steinsgate.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 15,
            titulo: "Cowboy Bebop",
            descricao: "Spike Spiegel e sua tripulação de caçadores de recompensas viajam pelo espaço em busca de criminosos e fugindo de seus passados.",
            foto: "/catalogo/cowboybebop.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 16,
            titulo: "Neon Genesis Evangelion",
            descricao: "Shinji Ikari pilota um mecha gigante para defender a humanidade de criaturas misteriosas chamadas Anjos.",
            foto: "/catalogo/evangelion.jpg",
            genero: "Mecha"
        },
        {
            id: 17,
            titulo: "Code Geass",
            descricao: "Lelouch Lamperouge ganha um poder sobrenatural e lidera uma rebelião contra o império que domina o Japão.",
            foto: "/catalogo/codegeass.jpg",
            genero: "Mecha"
        },
        {
            id: 18,
            titulo: "Black Clover",
            descricao: "Asta, um garoto sem magia, sonha em se tornar o Rei Mago em um mundo onde a magia é tudo.",
            foto: "/catalogo/blackclover.jpg",
            genero: "Ação"
        },
        {
            id: 19,
            titulo: "Fairy Tail",
            descricao: "Lucy Heartfilia se junta à guilda de magos Fairy Tail e vive aventuras com Natsu e seus amigos.",
            foto: "/catalogo/fairytale.jpg",
            genero: "Aventura"
        },
        {
            id: 20,
            titulo: "Re:Zero",
            descricao: "Subaru Natsuki é transportado para um mundo de fantasia e descobre que pode voltar no tempo toda vez que morre.",
            foto: "/catalogo/rezero.jpg",
            genero: "Drama"
        },
        {
            id: 21,
            titulo: "The Promised Neverland",
            descricao: "Órfãos descobrem que sua casa é uma fazenda de criação para monstros e planejam uma fuga desesperada.",
            foto: "/catalogo/promisedneverland.jpg",
            genero: "Suspense"
        },
        {
            id: 22,
            titulo: "Vinland Saga",
            descricao: "Thorfinn busca vingança contra o assassino de seu pai em uma história épica de vikings e guerra.",
            foto: "/catalogo/vinlandsaga.jpg",
            genero: "Ação"
        },
        {
            id: 23,
            titulo: "Dr. Stone",
            descricao: "Senku Ishigami usa a ciência para reconstruir a civilização após a humanidade ser petrificada por milhares de anos.",
            foto: "/catalogo/drstone.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 24,
            titulo: "Haikyuu!!",
            descricao: "Shoyo Hinata se apaixona pelo vôlei e forma uma rivalidade com Tobio Kageyama enquanto busca se tornar o melhor.",
            foto: "/catalogo/haikyuu.jpg",
            genero: "Esportes"
        },
        {
            id: 25,
            titulo: "One Punch Man",
            descricao: "Saitama é um herói tão forte que derrota qualquer inimigo com um único soco, mas sofre com o tédio de ser invencível.",
            foto: "/catalogo/onepunchman.jpg",
            genero: "Comédia"
        },
        {
            id: 26,
            titulo: "Mob Psycho 100",
            descricao: "Shigeo Kageyama, um poderoso psíquico, tenta viver uma vida normal enquanto lida com suas emoções e poderes.",
            foto: "/catalogo/mobpsycho.webp",
            genero: "Comédia"
        },
        {
            id: 27,
            titulo: "JoJo's Bizarre Adventure",
            descricao: "A saga da família Joestar através das gerações, com batalhas sobrenaturais e poderes únicos chamados Stands.",
            foto: "/catalogo/jojo.avif",
            genero: "Ação"
        },
        {
            id: 28,
            titulo: "Berserk",
            descricao: "Guts, um espadachim marcado por tragédias, busca vingança em um mundo sombrio e repleto de demônios.",
            foto: "/catalogo/berserk.jpg",
            genero: "Ação"
        },
        {
            id: 29,
            titulo: "Parasyte",
            descricao: "Shinichi Izumi tem sua mão substituída por um parasita alienígena e luta para sobreviver em um mundo infestado por essas criaturas.",
            foto: "/catalogo/parasyte.jpg",
            genero: "Horror"
        },
        {
            id: 30,
            titulo: "No Game No Life",
            descricao: "Os irmãos Sora e Shiro são transportados para um mundo onde tudo é decidido por jogos.",
            foto: "/catalogo/ngnl.jpg",
            genero: "Aventura"
        },
        {
            id: 31,
            titulo: "Konosuba",
            descricao: "Kazuma Sato morre e é reencarnado em um mundo de fantasia com uma deusa inútil e um grupo de aventureiros excêntricos.",
            foto: "/catalogo/konosuba.webp",
            genero: "Comédia"
        },
        {
            id: 32,
            titulo: "Overlord",
            descricao: "Um jogador fica preso em um MMORPG como seu personagem esquelético e domina o novo mundo como um poderoso lich.",
            foto: "/catalogo/overlord.jpg",
            genero: "Ação"
        },
        {
            id: 33,
            titulo: "Made in Abyss",
            descricao: "Riko e Reg exploram um abismo misterioso em busca dos segredos e perigos ocultos em suas profundezas.",
            foto: "/catalogo/madeinabyss.jpg",
            genero: "Aventura"
        },
        {
            id: 34,
            titulo: "Your Lie in April",
            descricao: "Um pianista prodígio traumatizado redescobre a música através de uma violinista livre e apaixonada.",
            foto: "/catalogo/yourlieinapril.jpg",
            genero: "Drama"
        },
        {
            id: 35,
            titulo: "Clannad",
            descricao: "Tomoya Okazaki ajuda várias garotas com seus problemas pessoais enquanto enfrenta seu próprio destino.",
            foto: "/catalogo/clannad.webp",
            genero: "Drama"
        },
        {
            id: 36,
            titulo: "Toradora!",
            descricao: "Ryuuji e Taiga formam uma improvável aliança para conquistar as pessoas de quem gostam.",
            foto: "/catalogo/toradora.jpg",
            genero: "Romance"
        },
        {
            id: 37,
            titulo: "Anohana",
            descricao: "Um grupo de amigos se reúne após anos quando o fantasma de uma amiga de infância aparece para um deles.",
            foto: "/catalogo/anohana.webp",
            genero: "Drama"
        },
        {
            id: 38,
            titulo: "Violet Evergarden",
            descricao: "Uma ex-soldado se torna uma escritora de cartas e aprende sobre o amor e as emoções humanas.",
            foto: "/catalogo/violet.webp",
            genero: "Drama"
        },
        {
            id: 39,
            titulo: "A Silent Voice",
            descricao: "Um ex-valentão busca redenção ao se reconectar com uma garota surda que ele assediou no passado.",
            foto: "/catalogo/silentvoice.jpg",
            genero: "Drama"
        },
        {
            id: 40,
            titulo: "Weathering With You",
            descricao: "Um garoto fugitivo conhece uma garota com o poder de controlar o clima, mudando seus destinos para sempre.",
            foto: "/catalogo/weathering.jpg",
            genero: "Romance"
        },
        {
            id: 41,
            titulo: "Spirited Away",
            descricao: "Chihiro entra em um mundo espiritual e trabalha em uma casa de banhos para libertar seus pais, transformados em porcos.",
            foto: "/catalogo/spiritedaway.jpg",
            genero: "Fantasia"
        },
        {
            id: 42,
            titulo: "My Neighbor Totoro",
            descricao: "Duas irmãs se mudam para o campo e fazem amizade com criaturas mágicas da floresta.",
            foto: "/catalogo/totoro.jpg",
            genero: "Fantasia"
        },
        {
            id: 43,
            titulo: "Howl's Moving Castle",
            descricao: "Sophie é transformada em uma idosa e busca a ajuda do misterioso mago Howl para quebrar a maldição.",
            foto: "/catalogo/howl.webp",
            genero: "Fantasia"
        },
        {
            id: 44,
            titulo: "Princess Mononoke",
            descricao: "Ashitaka se envolve na batalha entre os deuses da floresta e os humanos que exploram seus recursos.",
            foto: "/catalogo/mononoke.jpg",
            genero: "Aventura"
        },
        {
            id: 45,
            titulo: "Akira",
            descricao: "Kaneda e Tetsuo se envolvem em um experimento governamental secreto que desencadeia poderes psíquicos catastróficos.",
            foto: "/catalogo/akira.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 46,
            titulo: "Ghost in the Shell",
            descricao: "Major Motoko Kusanagi investiga crimes cibernéticos em um futuro onde humanos e máquinas estão interligados.",
            foto: "/catalogo/ghostintheshell.jpg",
            genero: "Cyberpunk"
        },
        {
            id: 47,
            titulo: "Psycho-Pass",
            descricao: "Inspetores policiais usam um sistema que prevê crimes, mas descobrem falhas sombrias em sua sociedade distópica.",
            foto: "/catalogo/psychopass.jpeg",
            genero: "Ficção Científica"
        },
        {
            id: 48,
            titulo: "Erased",
            descricao: "Satoru Fujinuma volta no tempo para evitar o assassinato de sua colega de classe e desvendar um mistério de seu passado.",
            foto: "/catalogo/erased.webp",
            genero: "Suspense"
        },
        {
            id: 49,
            titulo: "The Rising of the Shield Hero",
            descricao: "Naofumi Iwataki é traído e se torna o herói do escudo, lutando para provar seu valor em um mundo hostil.",
            foto: "/catalogo/shieldhero.jpg",
            genero: "Aventura"
        },
        {
            id: 50,
            titulo: "Darling in the Franxx",
            descricao: "Pilotos adolescentes controlam mechas gigantes para proteger a humanidade de monstros em um futuro pós-apocalíptico.",
            foto: "/catalogo/darlingfranxx.jpg",
            genero: "Mecha"
        }
    ];


    return <Movie genreId={genreId} catalogoAnime={catalogoAnime2} />;
    
    function Movie({ genreId, catalogoAnime }) {
        const elementRef = useRef(null);
        
        const slideLeft = (element) => {
            element.scrollLeft -= 500;
        };
        
        const slideRight = (element) => {
            element.scrollLeft += 500;
        };
        
        
        const filtrado = catalogoAnime2.filter(item => (item.genero == genreId))
        return (
        <>
            <div className="relative">
                <IoChevronBackOutline
                    onClick={() => slideLeft(elementRef.current)}
                    className="text-[60px] p-2 cursor-pointer z-10 absolute left-2 top-1/2 -translate-y-1/2 border hover:scale-110 transition-all  bg-black rounded-full shadow-md"
                    />

                <div
                    ref={elementRef}
                    className="flex  scrollbar-none overflow-hidden pt-5 px-5 pb-5 mt-5 scroll-smooth gap-8"
                >
                    {filtrado.map((anime) => (
                        <div
                        key={anime.id}
                        className="w-[110px] md:w-[200px] flex-shrink-0"
                        >
                            <a href={`/detalhes/${anime.id}`}>
                                <img
                                    src={anime.foto}
                                    alt={anime.titulo}
                                    className="w-full rounded-lg hover:border-[3px] border-gray-400 hover:scale-105 transition-all duration-150 ease-in"
                                    />
                            </a>
                        </div>
                    ))}
                </div>


                <IoChevronForwardOutline
                    onClick={() => slideRight(elementRef.current)}
                    className="text-[40px] p-2 cursor-pointer z-10 absolute right-2 top-1/2 -translate-y-1/2 bg-black rounded-full shadow-md"
                    />
            </div>
        </>
    );
}
}