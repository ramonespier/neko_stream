"use client";

import { use, useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";



export default function Filtro({ genreId }) {
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
        },


        {
            id: 51,
            titulo: "Monster",
            descricao: "Um neurocirurgião persegue um ex-paciente psicopata que ele salvou na infância e que agora é um assassino em série.",
            foto: "/catalogo/monster.png",
            genero: "Suspense"
        },
        {
            id: 52,
            titulo: "Paranoia Agent",
            descricao: "Detetives investigam uma série de ataques cometidos por um jovem misterioso chamado Shounen Bat.",
            foto: "/catalogo/paranoiaagent.jpg",
            genero: "Suspense"
        },
        {
            id: 53,
            titulo: "Perfect Blue",
            descricao: "Uma ex-idol pop se torna atriz e começa a perder a noção da realidade enquanto é perseguida por um stalker.",
            foto: "/catalogo/perfectblue.jpg",
            genero: "Suspense"
        },
        {
            id: 54,
            titulo: "Another",
            descricao: "Um estudante transfere-se para uma classe amaldiçoada onde os alunos morrem misteriosamente um por um.",
            foto: "/catalogo/another.jpg",
            genero: "Suspense"
        },
        {
            id: 55,
            titulo: "Higurashi no Naku Koro ni",
            descricao: "Um grupo de amigos em uma vila rural vive um ciclo de assassinatos e mistérios sobrenaturais que se repetem.",
            foto: "/catalogo/higurashi.jpg",
            genero: "Suspense"
        },
        {
            id: 56,
            titulo: "Shiki",
            descricao: "Os moradores de uma pequena vila começam a morrer misteriosamente, e alguns suspeitam que vampiros estão envolvidos.",
            foto: "/catalogo/shiki.jpg",
            genero: "Suspense"
        },
        {
            id: 57,
            titulo: "Psycho-Pass: Sinners of the System",
            descricao: "Três histórias que expandem o universo de Psycho-Pass, explorando mais casos do Sistema Sibyl.",
            foto: "/catalogo/psychopass.jpeg",
            genero: "Suspense"
        },
        {
            id: 58,
            titulo: "Babylon",
            descricao: "Um promotor público investiga uma misteriosa mulher envolvida em uma série de suicídios e conspirações políticas.",
            foto: "/catalogo/babylon.jpg",
            genero: "Suspense"
        },
        {
            id: 59,
            titulo: "ID: Invaded",
            descricao: "Detetives entram na mente de assassinos através de um sistema que reconstrói seus pensamentos para resolver crimes.",
            foto: "/catalogo/idinvaded.jpg",
            genero: "Suspense"
        },
        {
            id: 60,
            titulo: "Boogiepop Phantom",
            descricao: "Uma série de assassinatos bizarros ocorre após o aparecimento de uma entidade conhecida como Boogiepop.",
            foto: "/catalogo/boogiepop.jpg",
            genero: "Suspense"
        },

        // Romance (10 adicionais)
        {
            id: 61,
            titulo: "Kaguya-sama: Love is War",
            descricao: "Dois estudantes brilhantes tentam fazer o outro confessar seus sentimentos em uma batalha de estratégias românticas.",
            foto: "/catalogo/kaguyasama.jpg",
            genero: "Romance"
        },
        {
            id: 62,
            titulo: "Your Name",
            descricao: "Dois adolescentes inexplicavelmente trocam de corpos e desenvolvem uma conexão que transcende o tempo e espaço.",
            foto: "/catalogo/yourname.jpg",
            genero: "Romance"
        },
        {
            id: 63,
            titulo: "Horimiya",
            descricao: "Hori e Miyamura mantêm segredos um do outro na escola, mas descobrem suas verdadeiras personalidades fora dela.",
            foto: "/catalogo/horimiya.jpg",
            genero: "Romance"
        },
        {
            id: 64,
            titulo: "Fruits Basket",
            descricao: "Tohru Honda descobre que a família Sohma é amaldiçoada a se transformar em animais do zodíaco chinês quando abraçados.",
            foto: "/catalogo/fruitsbasket.jpg",
            genero: "Romance"
        },
        {
            id: 65,
            titulo: "Golden Time",
            descricao: "Um estudante com amnésia se apaixona por uma garota excêntrica enquanto tenta reconstruir sua vida na faculdade de direito.",
            foto: "/catalogo/goldentime.jpg",
            genero: "Romance"
        },
        {
            id: 66,
            titulo: "Nana",
            descricao: "Duas jovens com o mesmo nome mas personalidades opostas se tornam amigas e enfrentam desafios no amor e na vida adulta.",
            foto: "/catalogo/nana.jpg",
            genero: "Romance"
        },
        {
            id: 67,
            titulo: "Lovely Complex",
            descricao: "Um casal improvável - ela muito alta, ele muito baixo - desenvolve sentimentos após anos de amizade e brincadeiras.",
            foto: "/catalogo/lovelycomplex.jpg",
            genero: "Romance"
        },
        {
            id: 68,
            titulo: "Ao Haru Ride",
            descricao: "Futaba reencontra seu primeiro amor do ensino médio, mas ele não é mais o mesmo garoto que ela conheceu no passado.",
            foto: "/catalogo/aoharuride.jpg",
            genero: "Romance"
        },
        {
            id: 69,
            titulo: "Sukitte Ii na yo",
            descricao: "Mei Tachibana, que nunca teve amigos, acaba namorando o garoto popular da escola após um incidente inesperado.",
            foto: "/catalogo/sukitteiinayo.jpg",
            genero: "Romance"
        },
        {
            id: 70,
            titulo: "Kimi ni Todoke",
            descricao: "Sawako, chamada de Sadako por sua semelhança com a garota do filme de terror, tenta fazer amigos e conquistar seu crush.",
            foto: "/catalogo/kiminitodoke.jpg",
            genero: "Romance"
        },

        // Esportes (10 adicionais)
        {
            id: 71,
            titulo: "Kuroko no Basket",
            descricao: "Um time de basquete escolar tenta chegar ao topo do Japão com a ajuda do misterioso sexto membro da Geração dos Milagres.",
            foto: "/catalogo/kurokonobasket.jpg",
            genero: "Esportes"
        },
        {
            id: 72,
            titulo: "Yuri!!! on Ice",
            descricao: "Um patinador artístico em crise encontra nova inspiração quando um campeão russo se oferece para ser seu treinador.",
            foto: "/catalogo/yurionice.jpg",
            genero: "Esportes"
        },
        {
            id: 73,
            titulo: "Run with the Wind",
            descricao: "Dez estudantes universitários com diferentes níveis de habilidade se unem para correr o lendário revezamento Hakone Ekiden.",
            foto: "/catalogo/runwiththewind.jpg",
            genero: "Esportes"
        },
        {
            id: 74,
            titulo: "Eyeshield 21",
            descricao: "Um garoto tímido se torna um corredor lendário no futebol americano escolar usando um escudo facial para esconder sua identidade.",
            foto: "/catalogo/eyeshield21.jpg",
            genero: "Esportes"
        },
        {
            id: 75,
            titulo: "Ace of Diamond",
            descricao: "Eijun Sawamura se junta a uma prestigiada escola de beisebol e luta para se tornar o melhor arremessador do Japão.",
            foto: "/catalogo/aceofdiamond.jpg",
            genero: "Esportes"
        },
        {
            id: 76,
            titulo: "Hajime no Ippo",
            descricao: "Ippo Makunouchi, um garoto tímido, descobre seu talento para o boxe e começa sua jornada para se tornar um campeão.",
            foto: "/catalogo/hajimenoippo.jpg",
            genero: "Esportes"
        },
        {
            id: 77,
            titulo: "Slam Dunk",
            descricao: "Hanamichi Sakuragi, um delinquente, se junta ao time de basquete para impressionar uma garota e descobre seu talento para o esporte.",
            foto: "/catalogo/slamdunk.jpg",
            genero: "Esportes"
        },
        {
            id: 78,
            titulo: "Free!",
            descricao: "Um grupo de amigos que nadavam juntos na infância se reúne no ensino médio e revive sua paixão pela natação competitiva.",
            foto: "/catalogo/free.jpg",
            genero: "Esportes"
        },
        {
            id: 79,
            titulo: "Baby Steps",
            descricao: "Um estudante metódico descobre o tênis e usa suas habilidades analíticas para se tornar um jogador profissional.",
            foto: "/catalogo/babylon.jpg",
            genero: "Esportes"
        },
        {
            id: 80,
            titulo: "Major",
            descricao: "A jornada de Goro Shigeno desde a infância até se tornar um jogador profissional de beisebol, enfrentando muitos desafios.",
            foto: "/catalogo/major.jpg",
            genero: "Esportes"
        },

        // Ficção Científica (10 adicionais)
        {
            id: 81,
            titulo: "Legend of the Galactic Heroes",
            descricao: "Uma épica guerra espacial entre duas facções galácticas, seguindo estratégias militares e intrigas políticas.",
            foto: "/catalogo/logh.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 82,
            titulo: "Planetes",
            descricao: "No ano 2075, uma equipe de coletores de lixo espacial lida com os perigos da órbita terrestre enquanto perseguem seus sonhos.",
            foto: "/catalogo/planetes.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 83,
            titulo: "Knights of Sidonia",
            descricao: "Humanos a bordo de uma nave espacial lutam contra criaturas alienígenas em uma batalha pela sobrevivência da espécie.",
            foto: "/catalogo/sidonia.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 84,
            titulo: "Space Battleship Yamato 2199",
            descricao: "A tripulação da Yamato embarca em uma jornada interestelar para salvar a Terra da radiação mortal causada por alienígenas.",
            foto: "/catalogo/yamato2199.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 85,
            titulo: "The Orbital Children",
            descricao: "Crianças presas em uma estação espacial em 2045 descobrem que possuem habilidades especiais e um destino interplanetário.",
            foto: "/catalogo/orbitalchildren.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 86,
            titulo: "Terraformars",
            descricao: "Humanos geneticamente modificados são enviados a Marte para combater baratas humanoides que evoluíram no planeta vermelho.",
            foto: "/catalogo/terraformars.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 87,
            titulo: "Gantz",
            descricao: "Pessoas que morrem são recrutadas para caçar alienígenas em uma série de missões mortais com tecnologia avançada.",
            foto: "/catalogo/gantz.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 88,
            titulo: "Blame!",
            descricao: "Em um futuro distópico, um homem percorre uma imensa estrutura urbana em busca do gene humano puro para salvar a humanidade.",
            foto: "/catalogo/blame.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 89,
            titulo: "Dennou Coil",
            descricao: "Crianças exploram uma realidade aumentada onde objetos virtuais e segredos sombrios se misturam com o mundo real.",
            foto: "/catalogo/dennoucoil.jpg",
            genero: "Ficção Científica"
        },
        {
            id: 90,
            titulo: "Time of Eve",
            descricao: "Em um futuro onde androides são comuns, humanos descobrem um café onde as regras entre humanos e máquinas são relaxadas.",
            foto: "/catalogo/timeofeve.jpg",
            genero: "Ficção Científica"
        },

        // Mecha (10 adicionais)
        {
            id: 91,
            titulo: "Gurren Lagann",
            descricao: "Simon e Kamina pilotam mechas para libertar a humanidade de vilas subterrâneas e enfrentar o tirânico Lordgenome.",
            foto: "/catalogo/gurrenlagann.jpg",
            genero: "Mecha"
        },
        {
            id: 92,
            titulo: "Eureka Seven",
            descricao: "Renton Thurston se junta a um grupo de rebeldes e pilota um mecha misterioso ligado a uma garota chamada Eureka.",
            foto: "/catalogo/eurekaseven.jpg",
            genero: "Mecha"
        },
        {
            id: 93,
            titulo: "Aldnoah.Zero",
            descricao: "Terra e Marte entram em guerra quando um incidente diplomático desencadeia um conflito entre tecnologias desiguais.",
            foto: "/catalogo/aldnoahzero.jpg",
            genero: "Mecha"
        },
        {
            id: 94,
            titulo: "Macross Frontier",
            descricao: "Pilotos de mechas transformáveis defendem uma frota de naves coloniais contra ataques de alienígenas misteriosos.",
            foto: "/catalogo/macrossf.jpg",
            genero: "Mecha"
        },
        {
            id: 95,
            titulo: "The Big O",
            descricao: "Em uma cidade sem memória, um negociador pilotando um mecha gigante busca respostas sobre o passado desaparecido.",
            foto: "/catalogo/bigo.jpg",
            genero: "Mecha"
        },
        {
            id: 96,
            titulo: "Full Metal Panic!",
            descricao: "Um soldado mercenário é designado para proteger uma estudante com conhecimento militar secreto em seu subconsciente.",
            foto: "/catalogo/fullmetalpanic.jpg",
            genero: "Mecha"
        },
        {
            id: 97,
            titulo: "Valvrave the Liberator",
            descricao: "Estudantes descobrem e pilotam mechas avançados para defender sua nação escolar de uma superpotência espacial.",
            foto: "/catalogo/valvrave.jpg",
            genero: "Mecha"
        },
        {
            id: 98,
            titulo: "Knights & Magic",
            descricao: "Um programador reencarnado em um mundo de magia e mechas usa seu conhecimento para revolucionar o design dos mechas.",
            foto: "/catalogo/knightsandmagic.jpg",
            genero: "Mecha"
        },
        {
            id: 99,
            titulo: "Gargantia on the Verdurous Planet",
            descricao: "Um soldado espacial cai na Terra pós-apocalíptica e aprende a viver em harmonia com os habitantes locais.",
            foto: "/catalogo/gargantia.jpg",
            genero: "Mecha"
        },
        {
            id: 100,
            titulo: "Suisei no Gargantia",
            descricao: "Um piloto de mecha militar é transportado para um futuro distante onde a humanidade vive em cidades flutuantes na Terra.",
            foto: "/catalogo/suisei.jpg",
            genero: "Mecha"
        },

        // Cyberpunk (10 adicionais)
        {
            id: 101,
            titulo: "Serial Experiments Lain",
            descricao: "Uma garota introvertida se envolve em eventos bizarros quando descobre a realidade virtual chamada The Wired.",
            foto: "/catalogo/lain.jpg",
            genero: "Cyberpunk"
        },
        {
            id: 102,
            titulo: "Ergo Proxy",
            descricao: "Em uma cidade-domo distópica, uma investigadora descobre segredos sobre androides Autoreivs e seres chamados Proxies.",
            foto: "/catalogo/ergoproxy.jpg",
            genero: "Cyberpunk"
        },
        {
            id: 103,
            titulo: "Texhnolyze",
            descricao: "Em uma cidade subterrânea decadente, um lutador ganha membros cibernéticos e se envolve em uma guerra de facções.",
            foto: "/catalogo/texhnolyze.jpg",
            genero: "Cyberpunk"
        },
        
        {
            id: 105,
            titulo: "No Guns Life",
            descricao: "Um ex-soldado cibernético com uma cabeça de arma trabalha como detetive resolvendo casos envolvendo outros modificados.",
            foto: "/catalogo/nogunslife.jpg",
            genero: "Cyberpunk"
        },
        {
            id: 106,
            titulo: "Battle Angel Alita",
            descricao: "Um cientista encontra os restos de uma ciborgue e a reconstrói, revelando que ela possui habilidades de luta excepcionais.",
            foto: "/catalogo/alita.jpg",
            genero: "Cyberpunk"
        },
        {
            id: 107,
            titulo: "Mardock Scramble",
            descricao: "Uma prostituta é salva da morte e transformada em ciborgue para testemunhar contra seu assassino em um futuro distópico.",
            foto: "/catalogo/mardock.jpg",
            genero: "Cyberpunk"
        },
        {
            id: 109,
            titulo: "Cyber City Oedo 808",
            descricao: "Três criminosos recebem a chance de reduzir suas sentenças trabalhando como agentes especiais em uma cidade futurista.",
            foto: "/catalogo/oedo808.jpg",
            genero: "Cyberpunk"
        },
        {
            id: 110,
            titulo: "Armitage III",
            descricao: "Um detetive e uma androide investigam uma série de assassinatos de robôs humanoides em uma colônia marciana.",
            foto: "/catalogo/armitage.jpg",
            genero: "Cyberpunk"
        },

        // Comédia (10 adicionais)
        {
            id: 111,
            titulo: "Gintama",
            descricao: "Em um Japão feudal ocupado por alienígenas, um samurai preguiçoso e seus amigos aceitam trabalhos estranhos para sobreviver.",
            foto: "/catalogo/gintama.jpg",
            genero: "Comédia"
        },
        {
            id: 112,
            titulo: "Nichijou",
            descricao: "A vida cotidiana absurdamente exagerada de um grupo de estudantes do ensino médio e suas interações hilárias.",
            foto: "/catalogo/nichijou..jpg",
            genero: "Comédia"
        },
        {
            id: 113,
            titulo: "Daily Lives of High School Boys",
            descricao: "As travessuras e situações engraçadas de um grupo de garotos do ensino médio em sua vida escolar e familiar.",
            foto: "/catalogo/danshikoukousei.jpg",
            genero: "Comédia"
        },
        {
            id: 114,
            titulo: "Saiki Kusuo no Psi-nan",
            descricao: "Um estudante com poderes psíquicos tenta viver uma vida normal, mas suas habilidades sempre causam situações caóticas.",
            foto: "/catalogo/saiki.jpg",
            genero: "Comédia"
        },
        {
            id: 115,
            titulo: "Asobi Asobase",
            descricao: "Três garotas do ensino médio formam um clube de jogos que rapidamente se transforma em uma série de situações absurdas.",
            foto: "/catalogo/asobiasobase.jpg",
            genero: "Comédia"
        },
        {
            id: 116,
            titulo: "Hinamatsuri",
            descricao: "Um yakuza se torna o guardião de uma garota com poderes psíquicos, levando a situações hilárias e emocionantes.",
            foto: "/catalogo/hinamatsuri.jpg",
            genero: "Comédia"
        },
        {
            id: 117,
            titulo: "Grand Blue",
            descricao: "Um universitário se junta a um clube de mergulho que na verdade passa mais tempo bebendo do que na água.",
            foto: "/catalogo/grandblue.jpg",
            genero: "Comédia"
        },
        {
            id: 118,
            titulo: "Prison School",
            descricao: "Cinco garotos são os primeiros estudantes homens em uma escola feminina e acabam presos em uma prisão escolar.",
            foto: "/catalogo/prisonschool.jpg",
            genero: "Comédia"
        },
        {
            id: 119,
            titulo: "Detroit Metal City",
            descricao: "Um jovem que sonha em ser músico pop acaba como vocalista de uma banda de death metal extremo contra sua vontade.",
            foto: "/catalogo/dmc.jpg",
            genero: "Comédia"
        },
        {
            id: 120,
            titulo: "Cromartie High School",
            descricao: "Uma escola cheia de delinquentes excêntricos, incluindo um gorila e um roboto, e um estudante normal que tenta entender tudo.",
            foto: "/catalogo/cromartie.jpg",
            genero: "Comédia"
        },

        // Horror (10 adicionais)
        {
            id: 121,
            titulo: "Corpse Party",
            descricao: "Estudantes presos em uma escola amaldiçoada tentam escapar enquanto são perseguidos por espíritos vingativos.",
            foto: "/catalogo/corpseparty.jpg",
            genero: "Horror"
        },
        {
            id: 122,
            titulo: "When They Cry",
            descricao: "Um garoto se muda para uma vila rural onde ocorrem assassinatos misteriosos que parecem repetir-se em um ciclo temporal.",
            foto: "/catalogo/higurashi.jpg",
            genero: "Horror"
        },
        {
            id: 123,
            titulo: "Hell Girl",
            descricao: "Uma garota misteriosa oferece vingança através de um site que envia os alvos direto para o inferno - mas com um preço.",
            foto: "/catalogo/hellgirl.jpg",
            genero: "Horror"
        },
        {
            id: 124,
            titulo: "Ghost Hunt",
            descricao: "Um grupo de investigadores paranormais resolve casos de fantasmas e maldições usando métodos científicos e espirituais.",
            foto: "/catalogo/ghosthunt.jpg",
            genero: "Horror"
        },
        {
            id: 125,
            titulo: "Devilman Crybaby",
            descricao: "Akira Fudo se funde com um demônio para combater uma invasão demoníaca, mas mantém sua compaixão humana.",
            foto: "/catalogo/devilman.jpg",
            genero: "Horror"
        },
        {
            id: 126,
            titulo: "Junji Ito Collection",
            descricao: "Adaptação de várias histórias de horror do mestre do mangá de terror Junji Ito, com contos surrealistas e aterrorizantes.",
            foto: "/catalogo/junjiito.jpg",
            genero: "Horror"
        },
        {
            id: 127,
            titulo: "Another",
            descricao: "Estudantes de uma classe amaldiçoada morrem misteriosamente enquanto tentam quebrar a maldição que os assombra.",
            foto: "/catalogo/another.jpg",
            genero: "Horror"
        },
        {
            id: 128,
            titulo: "Yami Shibai",
            descricao: "Uma série de contos de terror tradicionais japoneses narrados por um misterioso contador de histórias em um playground.",
            foto: "/catalogo/yamishibai.jpg",
            genero: "Horror"
        },
        {
            id: 129,
            titulo: "Petshop of Horrors",
            descricao: "Um misterioso petshop chinês vende animais exóticos que cumprem os desejos de seus donos - com consequências terríveis.",
            foto: "/catalogo/petshop.jpg",
            genero: "Horror"
        },
        {
            id: 130,
            titulo: "Gyo",
            descricao: "Peixes mortos começam a andar em terra usando pernas mecânicas, espalhando um odor mortal e causando o caos.",
            foto: "/catalogo/gyo.jpg",
            genero: "Horror"
        },

        // Drama (10 adicionais)
        {
            id: 131,
            titulo: "March Comes in Like a Lion",
            descricao: "Um jovem profissional de shogi luta contra a depressão enquanto encontra calor humano em uma família acolhedora.",
            foto: "/catalogo/sangatsu.jpg",
            genero: "Drama"
        },
        {
            id: 132,
            titulo: "Nana",
            descricao: "Duas jovens com o mesmo nome mas personalidades opostas se tornam amigas e enfrentam desafios no amor e na vida adulta.",
            foto: "/catalogo/nana.jpg",
            genero: "Drama"
        },
        {
            id: 133,
            titulo: "Shouwa Genroku Rakugo Shinjuu",
            descricao: "A vida e carreira de um contador de histórias rakugo, explorando tradição, rivalidade e redenção no Japão do século 20.",
            foto: "/catalogo/rakugo.jpg",
            genero: "Drama"
        },
        {
            id: 134,
            titulo: "Banana Fish",
            descricao: "Um jovem líder de gangue investiga uma misteriosa droga chamada Banana Fish enquanto desenvolve um vínculo com um fotógrafo japonês.",
            foto: "/catalogo/bananafish.jpg",
            genero: "Drama"
        },
        {
            id: 135,
            titulo: "Orange",
            descricao: "Um grupo de amigos recebe cartas de seus futuros eus, tentando evitar que um colega cometa suicídio.",
            foto: "/catalogo/orange.jpg",
            genero: "Drama"
        },
        {
            id: 136,
            titulo: "Plastic Memories",
            descricao: "Em um futuro onde androides têm vida útil limitada, um funcionário de recuperação ajuda a coletar unidades que expiraram.",
            foto: "/catalogo/plasticmemories.jpg",
            genero: "Drama"
        },
        {
            id: 137,
            titulo: "I Want to Eat Your Pancreas",
            descricao: "Um estudante solitário descobre que sua colega de classe popular está morrendo de uma doença no pâncreas e se aproxima dela.",
            foto: "/catalogo/pancreas.jpg",
            genero: "Drama"
        },
        {
            id: 138,
            titulo: "Anthem of the Heart",
            descricao: "Uma garota incapaz de falar devido a um trauma infantil se expressa através da música em um projeto escolar.",
            foto: "/catalogo/anthem.jpg",
            genero: "Drama"
        },
        {
            id: 139,
            titulo: "Scum's Wish",
            descricao: "Estudantes envolvidos em relacionamentos não correspondidos formam um vínculo complexo baseado em desejo e solidão.",
            foto: "/catalogo/scumswish.jpg",
            genero: "Drama"
        },
        {
            id: 140,
            titulo: "5 Centimeters per Second",
            descricao: "A história de um amor de infância que se desfaz com o tempo e a distância, mostrado em três atos emocionais.",
            foto: "/catalogo/5cm.jpg",
            genero: "Drama"
        },

        // Fantasia (10 adicionais)
        {
            id: 141,
            titulo: "Mushishi",
            descricao: "Ginko viaja pelo Japão feudal investigando criaturas espirituais chamadas Mushi e ajudando pessoas afetadas por elas.",
            foto: "/catalogo/mushishi.jpg",
            genero: "Fantasia"
        },
        {
            id: 142,
            titulo: "The Ancient Magus' Bride",
            descricao: "Uma jovem vendida como escrava se torna aprendiz e noiva de um misterioso mago com cabeça de lobo em um mundo de magia.",
            foto: "/catalogo/magusbride..jpg",
            genero: "Fantasia"
        },
        {
            id: 143,
            titulo: "Little Witch Academia",
            descricao: "Akomi Kagari entra em uma academia de magia inspirada por sua bruxa favorita e vive aventuras mágicas com suas amigas.",
            foto: "/catalogo/littlewitch.jpg",
            genero: "Fantasia"
        },
        {
            id: 144,
            titulo: "The Twelve Kingdoms",
            descricao: "Uma estudante é transportada para um mundo fantástico onde descobre ser a legítima governante de um dos doze reinos.",
            foto: "/catalogo/12kingdoms.jpg",
            genero: "Fantasia"
        },
        {
            id: 145,
            titulo: "Spice and Wolf",
            descricao: "Um comerciante viaja com uma deusa lobo em forma humana, misturando economia medieval e romance sobrenatural.",
            foto: "/catalogo/spiceandwolf.jpg",
            genero: "Fantasia"
        },
        {
            id: 146,
            titulo: "Maquia: When the Promised Flower Blooms",
            descricao: "Uma jovem imortal adota um bebê humano e aprende sobre amor materno enquanto o vê crescer e envelhecer.",
            foto: "/catalogo/maquia.jpg",
            genero: "Fantasia"
        },
        
        {
            id: 148,
            titulo: "Moribito: Guardian of the Spirit",
            descricao: "Uma guerreira é contratada para proteger um príncipe possuído por um espírito aquático que pode causar secas ou inundações.",
            foto: "/catalogo/moribito..jpg",
            genero: "Fantasia"
        },
        {
            id: 149,
            titulo: "Somali and the Forest Spirit",
            descricao: "Um golem protetor e uma pequena humana viajam por um mundo mágico em busca dos parentes desaparecidos da garota.",
            foto: "/catalogo/somali.jpg",
            genero: "Fantasia"
        },
        {
            id: 150,
            titulo: "The Dragon Prince",
            descricao: "Dois príncipes humanos e uma elfa assassina se unem para devolver um filhote de dragão e evitar uma guerra entre seus povos.",
            foto: "/catalogo/dragonprince.jpg",
            genero: "Fantasia"
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
                <div className="relative select-none">
                    <IoChevronBackOutline
                        onClick={() => slideLeft(elementRef.current)}
                        className="text-[60px] p-2 cursor-pointer z-10 absolute left-2 top-1/2 -translate-y-1/2 border hover:scale-110 transition-all bg-rose-600 hover:bg-rose-800 rounded-full shadow-md"
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
                                <a href={`/filmes/${anime.id}`}>
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
                        className="text-[60px] p-2 cursor-pointer z-10 absolute right-2 top-1/2 -translate-y-1/2 border hover:scale-110 transition-all bg-rose-600 hover:bg-rose-800 rounded-full shadow-md"
                    />
                </div>
            </>
        );
    }
}