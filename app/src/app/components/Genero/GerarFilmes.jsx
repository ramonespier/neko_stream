"use client";

import { Imprima } from "next/font/google";
import { use, useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Catalogo({ genreId }) {
    const catalogoAnime = [
        {
            id: 1,
            titulo: "One Piece",
            descricao: "One Piece conta a jornada de Luffy, um pirata elástico, em busca do tesouro lendário para se tornar o Rei dos Piratas.",
            foto: "/catalogo/onepiece.jpg",
            generos: ["Ação", "Aventura", "Fantasia", "Shounen"]
        },
        {
            id: 2,
            titulo: "Naruto",
            descricao: "Naruto Uzumaki é um jovem ninja que sonha em se tornar Hokage, o líder de sua vila, e conquistar o respeito de todos.",
            foto: "/catalogo/naruto.jpg",
            generos: ["Ação", "Aventura", "Fantasia", "Shounen"]
        },
        {
            id: 4,
            titulo: "Attack on Titan",
            descricao: "Humanos lutam pela sobrevivência contra Titãs gigantes que devoram pessoas, enquanto descobrem segredos sombrios sobre seu mundo.",
            foto: "/catalogo/aot.jpg",
            generos: ["Ação", "Drama", "Fantasia Sombria", "Suspense"]
        },
        {
            id: 5,
            titulo: "Death Note",
            descricao: "Light Yagami encontra um caderno sobrenatural que permite matar qualquer pessoa cujo nome seja escrito nele.",
            foto: "/catalogo/deathnote.jpg",
            generos: ["Mistério", "Suspense", "Psicológico", "Sobrenatural"]
        },
        {
            id: 6,
            titulo: "Fullmetal Alchemist: Brotherhood",
            descricao: "Os irmãos Edward e Alphonse Elric buscam a Pedra Filosofal para recuperar seus corpos após uma transmutação falha.",
            foto: "/catalogo/fma.jpg",
            generos: ["Ação", "Aventura", "Drama", "Fantasia", "Shounen"]
        },
        {
            id: 7,
            titulo: "My Hero Academia",
            descricao: "Izuku Midoriya, um garoto sem poderes em um mundo de super-heróis, herda uma poderosa habilidade e entra em uma academia de heróis.",
            foto: "/catalogo/mha.jpg",
            generos: ["Ação", "Superpoderes", "Shounen"]
        },
        {
            id: 8,
            titulo: "Demon Slayer",
            descricao: "Tanjiro Kamado se torna um caçador de demônios para vingar sua família e curar sua irmã, transformada em um demônio.",
            foto: "/catalogo/demonslayer.jpg",
            generos: ["Ação", "Fantasia Sombria", "Shounen"]
        },
        {
            id: 9,
            titulo: "Hunter x Hunter",
            descricao: "Gon Freecss embarca em uma jornada para se tornar um Hunter e encontrar seu pai, um lendário Hunter desaparecido.",
            foto: "/catalogo/hxh.jpg",
            generos: ["Ação", "Aventura", "Fantasia", "Shounen"]
        },
        {
            id: 10,
            titulo: "Bleach",
            descricao: "Ichigo Kurosaki ganha poderes de Ceifeiro de Almas e protege o mundo dos espíritos malignos conhecidos como Hollows.",
            foto: "/catalogo/bleach.webp",
            generos: ["Ação", "Aventura", "Shounen", "Sobrenatural"]
        },
        {
            id: 11,
            titulo: "Tokyo Ghoul",
            descricao: "Ken Kaneki se torna meio-ghoul após um encontro mortal e luta para sobreviver em um mundo onde humanos e ghouls coexistem.",
            foto: "/catalogo/tokyoghoul.jpg",
            generos: ["Ação", "Drama", "Horror", "Psicológico", "Sobrenatural"]
        },
        {
            id: 12,
            titulo: "Jujutsu Kaisen",
            descricao: "Yuji Itadori engole um objeto amaldiçoado e se torna hospedeiro de um poderoso demônio, entrando para uma escola de feiticeiros.",
            foto: "/catalogo/jujutsukaisen.jpg",
            generos: ["Ação", "Fantasia Sombria", "Horror", "Shounen"]
        },
        {
            id: 13,
            titulo: "Sword Art Online",
            descricao: "Kirito e outros jogadores ficam presos em um jogo de realidade virtual onde a morte no jogo significa a morte na vida real.",
            foto: "/catalogo/sao.jpg",
            generos: ["Ação", "Aventura", "Ficção Científica", "Romance"]
        },
        {
            id: 14,
            titulo: "Steins;Gate",
            descricao: "Rintaro Okabe e seus amigos acidentalmente criam uma máquina do tempo e enfrentam as consequências de alterar o passado.",
            foto: "/catalogo/steinsgate.jpg",
            generos: ["Ficção Científica", "Suspense", "Drama", "Psicológico"]
        },
        {
            id: 15,
            titulo: "Cowboy Bebop",
            descricao: "Spike Spiegel e sua tripulação de caçadores de recompensas viajam pelo espaço em busca de criminosos e fugindo de seus passados.",
            foto: "/catalogo/cowboybebop.jpg",
            generos: ["Ação", "Aventura", "Ficção Científica", "Noir"]
        },
        {
            id: 16,
            titulo: "Neon Genesis Evangelion",
            descricao: "Shinji Ikari pilota um mecha gigante para defender a humanidade de criaturas misteriosas chamadas Anjos.",
            foto: "/catalogo/evangelion.jpg",
            generos: ["Mecha", "Psicológico", "Drama", "Ficção Científica"]
        },
        {
            id: 17,
            titulo: "Code Geass",
            descricao: "Lelouch Lamperouge ganha um poder sobrenatural e lidera uma rebelião contra o império que domina o Japão.",
            foto: "/catalogo/codegeass.jpg",
            generos: ["Mecha", "Drama", "Ficção Científica", "Estratégia"]
        },
        {
            id: 18,
            titulo: "Black Clover",
            descricao: "Asta, um garoto sem magia, sonha em se tornar o Rei Mago em um mundo onde a magia é tudo.",
            foto: "/catalogo/blackclover.jpg",
            generos: ["Ação", "Aventura", "Fantasia", "Shounen"]
        },
        {
            id: 19,
            titulo: "Fairy Tail",
            descricao: "Lucy Heartfilia se junta à guilda de magos Fairy Tail e vive aventuras com Natsu e seus amigos.",
            foto: "/catalogo/fairytale.jpg",
            generos: ["Ação", "Aventura", "Fantasia", "Shounen"]
        },
        {
            id: 20,
            titulo: "Re:Zero",
            descricao: "Subaru Natsuki é transportado para um mundo de fantasia e descobre que pode voltar no tempo toda vez que morre.",
            foto: "/catalogo/rezero.jpg",
            generos: ["Drama", "Fantasia", "Psicológico", "Suspense"]
        },
        {
            id: 21,
            titulo: "The Promised Neverland",
            descricao: "Órfãos descobrem que sua casa é uma fazenda de criação para monstros e planejam uma fuga desesperada.",
            foto: "/catalogo/promisedneverland.jpg",
            generos: ["Mistério", "Suspense", "Fantasia Sombria", "Psicológico"]
        },
        {
            id: 22,
            titulo: "Vinland Saga",
            descricao: "Thorfinn busca vingança contra o assassino de seu pai em uma história épica de vikings e guerra.",
            foto: "/catalogo/vinlandsaga.jpg",
            generos: ["Ação", "Drama", "Histórico", "Seinen"]
        },
        {
            id: 23,
            titulo: "Dr. Stone",
            descricao: "Senku Ishigami usa a ciência para reconstruir a civilização após a humanidade ser petrificada por milhares de anos.",
            foto: "/catalogo/drstone.jpg",
            generos: ["Aventura", "Comédia", "Ficção Científica", "Shounen"]
        },
        {
            id: 24,
            titulo: "Haikyuu!!",
            descricao: "Shoyo Hinata se apaixona pelo vôlei e forma uma rivalidade com Tobio Kageyama enquanto busca se tornar o melhor.",
            foto: "/catalogo/haikyuu.jpg",
            generos: ["Esportes", "Comédia", "Drama"]
        },
        {
            id: 25,
            titulo: "One Punch Man",
            descricao: "Saitama é um herói tão forte que derrota qualquer inimigo com um único soco, mas sofre com o tédio de ser invencível.",
            foto: "/catalogo/onepunchman.jpg",
            generos: ["Ação", "Comédia", "Paródia", "Superpoderes"]
        },
        {
            id: 26,
            titulo: "Mob Psycho 100",
            descricao: "Shigeo Kageyama, um poderoso psíquico, tenta viver uma vida normal enquanto lida com suas emoções e poderes.",
            foto: "/catalogo/mobpsycho.webp",
            generos: ["Ação", "Comédia", "Sobrenatural", "Psicológico"]
        },
        {
            id: 27,
            titulo: "JoJo's Bizarre Adventure",
            descricao: "A saga da família Joestar através das gerações, com batalhas sobrenaturais e poderes únicos chamados Stands.",
            foto: "/catalogo/jojo.avif",
            generos: ["Ação", "Aventura", "Sobrenatural", "Shounen"]
        },
        {
            id: 28,
            titulo: "Berserk",
            descricao: "Guts, um espadachim marcado por tragédias, busca vingança em um mundo sombrio e repleto de demônios.",
            foto: "/catalogo/berserk.jpg",
            generos: ["Ação", "Fantasia Sombria", "Horror", "Seinen"]
        },
        {
            id: 29,
            titulo: "Parasyte",
            descricao: "Shinichi Izumi tem sua mão substituída por um parasita alienígena e luta para sobreviver em um mundo infestado por essas criaturas.",
            foto: "/catalogo/parasyte.jpg",
            generos: ["Ação", "Horror", "Psicológico", "Sobrenatural"]
        },
        {
            id: 30,
            titulo: "No Game No Life",
            descricao: "Os irmãos Sora e Shiro são transportados para um mundo onde tudo é decidido por jogos.",
            foto: "/catalogo/ngnl.jpg",
            generos: ["Aventura", "Comédia", "Fantasia", "Ecchi"]
        },
        {
            id: 31,
            titulo: "Konosuba",
            descricao: "Kazuma Sato morre e é reencarnado em um mundo de fantasia com uma deusa inútil e um grupo de aventureiros excêntricos.",
            foto: "/catalogo/konosuba.webp",
            generos: ["Aventura", "Comédia", "Fantasia", "Paródia"]
        },
        {
            id: 32,
            titulo: "Overlord",
            descricao: "Um jogador fica preso em um MMORPG como seu personagem esquelético e domina o novo mundo como um poderoso lich.",
            foto: "/catalogo/overlord.jpg",
            generos: ["Ação", "Fantasia", "Isekai"]
        },
        {
            id: 33,
            titulo: "Made in Abyss",
            descricao: "Riko e Reg exploram um abismo misterioso em busca dos segredos e perigos ocultos em suas profundezas.",
            foto: "/catalogo/madeinabyss.jpg",
            generos: ["Aventura", "Fantasia Sombria", "Mistério"]
        },
        {
            id: 34,
            titulo: "Your Lie in April",
            descricao: "Um pianista prodígio traumatizado redescobre a música através de uma violinista livre e apaixonada.",
            foto: "/catalogo/yourlieinapril.jpg",
            generos: ["Drama", "Música", "Romance", "Slice of Life"]
        },
        {
            id: 35,
            titulo: "Clannad",
            descricao: "Tomoya Okazaki ajuda várias garotas com seus problemas pessoais enquanto enfrenta seu próprio destino.",
            foto: "/catalogo/clannad.webp",
            generos: ["Drama", "Romance", "Slice of Life", "Sobrenatural"]
        },
        {
            id: 36,
            titulo: "Toradora!",
            descricao: "Ryuuji e Taiga formam uma improvável aliança para conquistar as pessoas de quem gostam.",
            foto: "/catalogo/toradora.jpg",
            generos: ["Comédia", "Drama", "Romance", "Slice of Life"]
        },
        {
            id: 37,
            titulo: "Anohana",
            descricao: "Um grupo de amigos se reúne após anos quando o fantasma de uma amiga de infância aparece para um deles.",
            foto: "/catalogo/anohana.webp",
            generos: ["Drama", "Sobrenatural", "Slice of Life"]
        },
        {
            id: 38,
            titulo: "Violet Evergarden",
            descricao: "Uma ex-soldado se torna uma escritora de cartas e aprende sobre o amor e as emoções humanas.",
            foto: "/catalogo/violet.webp",
            generos: ["Drama", "Slice of Life"]
        },
        {
            id: 39,
            titulo: "A Silent Voice",
            descricao: "Um ex-valentão busca redenção ao se reconectar com uma garota surda que ele assediou no passado.",
            foto: "/catalogo/silentvoice.jpg",
            generos: ["Drama", "Slice of Life"]
        },
        {
            id: 40,
            titulo: "Weathering With You",
            descricao: "Um garoto fugitivo conhece uma garota com o poder de controlar o clima, mudando seus destinos para sempre.",
            foto: "/catalogo/weathering.jpg",
            generos: ["Drama", "Fantasia", "Romance"]
        },
        {
            id: 41,
            titulo: "Spirited Away",
            descricao: "Chihiro entra em um mundo espiritual e trabalha em uma casa de banhos para libertar seus pais, transformados em porcos.",
            foto: "/catalogo/spiritedaway.jpg",
            generos: ["Aventura", "Fantasia", "Sobrenatural"]
        },
        {
            id: 42,
            titulo: "My Neighbor Totoro",
            descricao: "Duas irmãs se mudam para o campo e fazem amizade com criaturas mágicas da floresta.",
            foto: "/catalogo/totoro.jpg",
            generos: ["Aventura", "Fantasia", "Slice of Life"]
        },
        {
            id: 43,
            titulo: "Howl's Moving Castle",
            descricao: "Sophie é transformada em uma idosa e busca a ajuda do misterioso mago Howl para quebrar a maldição.",
            foto: "/catalogo/howl.webp",
            generos: ["Aventura", "Fantasia", "Romance"]
        },
        {
            id: 44,
            titulo: "Princess Mononoke",
            descricao: "Ashitaka se envolve na batalha entre os deuses da floresta e os humanos que exploram seus recursos.",
            foto: "/catalogo/mononoke.jpg",
            generos: ["Ação", "Aventura", "Fantasia"]
        },
        {
            id: 45,
            titulo: "Akira",
            descricao: "Kaneda e Tetsuo se envolvem em um experimento governamental secreto que desencadeia poderes psíquicos catastróficos.",
            foto: "/catalogo/akira.jpg",
            generos: ["Ação", "Cyberpunk", "Ficção Científica", "Psicológico"]
        },
        {
            id: 46,
            titulo: "Ghost in the Shell",
            descricao: "Major Motoko Kusanagi investiga crimes cibernéticos em um futuro onde humanos e máquinas estão interligados.",
            foto: "/catalogo/ghostintheshell.jpg",
            generos: ["Cyberpunk", "Ficção Científica", "Policial"]
        },
        {
            id: 47,
            titulo: "Psycho-Pass",
            descricao: "Inspetores policiais usam um sistema que prevê crimes, mas descobrem falhas sombrias em sua sociedade distópica.",
            foto: "/catalogo/psychopass.jpeg",
            generos: ["Cyberpunk", "Ficção Científica", "Policial", "Psicológico"]
        },
        {
            id: 48,
            titulo: "Erased",
            descricao: "Satoru Fujinuma volta no tempo para evitar o assassinato de sua colega de classe e desvendar um mistério de seu passado.",
            foto: "/catalogo/erased.webp",
            generos: ["Mistério", "Suspense", "Sobrenatural"]
        },
        {
            id: 49,
            titulo: "The Rising of the Shield Hero",
            descricao: "Naofumi Iwataki é traído e se torna o herói do escudo, lutando para provar seu valor em um mundo hostil.",
            foto: "/catalogo/shieldhero.jpg",
            generos: ["Ação", "Aventura", "Drama", "Fantasia", "Isekai"]
        },
        {
            id: 50,
            titulo: "Darling in the Franxx",
            descricao: "Pilotos adolescentes controlam mechas gigantes para proteger a humanidade de monstros em um futuro pós-apocalíptico.",
            foto: "/catalogo/darlingfranxx.jpg",
            generos: ["Ação", "Drama", "Mecha", "Romance", "Ficção Científica"]
        }
    ];
    


    return <Movie genreId={genreId} catalogoAnime={catalogoAnime} />;
}

function Movie({ genreId, catalogoAnime }) {
    const elementRef = useRef(null);

    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    };

    const slideRight = (element) => {
        element.scrollLeft += 500;
    };


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
                    {catalogoAnime.map((anime) => (
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