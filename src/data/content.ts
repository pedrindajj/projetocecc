import arrozImg from "@/assets/arroz-hauca.jpg";
import qumbeImg from "@/assets/qumbe.jpg";
import anguImg from "@/assets/angu.jpg";
import acarajeImg from "@/assets/acaraje.jpg";
import vatapaImg from "@/assets/vatapa.jpg";
import caruruImg from "@/assets/caruru.jpg";
import jollofImg from "@/assets/jollof.jpg";
import historiaSalvador from "@/assets/historia-salvador.jpg";
import historiaHausa from "@/assets/historia-hausa.jpg";
import historiaMales from "@/assets/historia-males.jpg";
import historiaHoje from "@/assets/historia-hoje.jpg";
import historiaIndico from "@/assets/historia-indico.jpg";
import historiaEspeciarias from "@/assets/historia-especiarias.jpg";
import historiaFesta from "@/assets/historia-festa.jpg";
import historiaQuitandeiras from "@/assets/historia-quitandeiras.jpg";
import historiaAnguAfrica from "@/assets/historia-angu-africa.jpg";
import historiaMilho from "@/assets/historia-milho.jpg";
import historiaTemperos from "@/assets/historia-temperos.jpg";

export type ImageInfo = { src: string; alt: string; credit: string; aiGenerated: boolean };
export type Ingredient = { qty: number; unit: string; name: string };
export type Step = { text: string; minutes?: number };
export type StorySection = { title: string; text: string; kind: "fato" | "tradição" | "contexto"; refs: string[]; image?: ImageInfo };
export type QuizQ = { q: string; options: string[]; answer: number; explain: string; image?: ImageInfo };

export type Dish = {
  slug: string;
  name: string;
  main: boolean;
  region: string;
  tagline: string;
  accent: "dende" | "oceano" | "milho" | "folha" | "ocre";
  origin?: { pos: [number, number]; place: string } | undefined;
  image?: ImageInfo;
  intro: string;
  story: StorySection[];
  baseServings: number;
  ingredients: Ingredient[];
  steps: Step[];
  facts: string[];
  quiz: QuizQ[];
  refs: string[];
};

export const sources: Record<string, string> = {
  querino: "QUERINO, Manuel. A arte culinária na Bahia. Salvador, 1928 (reed. Martins Fontes, 2011).",
  reis: "REIS, João José. Rebelião escrava no Brasil: a história do levante dos malês em 1835. São Paulo: Companhia das Letras, 2003.",
  lody: "LODY, Raul. Santo também come. Rio de Janeiro: Pallas, 1998.",
  costalima: "COSTA LIMA, Vivaldo da. A anatomia do acarajé e outros escritos. Salvador: Corrupio, 2010.",
  cascudo: "CASCUDO, Luís da Câmara. História da alimentação no Brasil. São Paulo: Global, 2004.",
  debret: "DEBRET, Jean-Baptiste. Viagem pitoresca e histórica ao Brasil (1834–1839). Prancha \"Negras vendedoras de angu\".",
  xawaash: "XAWAASH. Coconut Sweets (Qumbe). Disponível em: https://xawaash.com/recipes/coconut-sweets/.",
  slavevoyages: "SLAVE VOYAGES. Trans-Atlantic Slave Trade Database. Disponível em: https://www.slavevoyages.org.",
  iphan: "IPHAN. Ofício das Baianas de Acarajé — Dossiê de registro. Brasília, 2004.",
  ufba: "VERGER, Pierre. Fluxo e refluxo do tráfico de escravos entre o Golfo do Benin e a Bahia de Todos os Santos. São Paulo: Corrupio, 1987.",
};

const AI_CREDIT = "Imagem gerada por IA para fins ilustrativos, conferida com os ingredientes da receita.";

export const dishes: Dish[] = [
  {
    slug: "arroz-de-hauca",
    name: "Arroz de Hauçá",
    main: true,
    region: "Salvador e Recôncavo, Bahia",
    tagline: "Um prato baiano cujo nome guarda a memória do povo hauçá.",
    accent: "dende",
    origin: { pos: [-12.97, -38.5], place: "Salvador, Bahia" },
    image: { src: arrozImg, alt: "Arroz branco coberto com carne-seca desfiada e molho de camarão com dendê, em tigela de barro", credit: AI_CREDIT, aiGenerated: true },
    intro:
      "Arroz cozido bem mole, coberto com carne-seca frita e um molho de camarão seco, pimenta e azeite de dendê. Um clássico da cozinha afro-baiana, registrado por Manuel Querino no início do século XX.",
    story: [
      { title: "Um nome que é memória", kind: "fato", refs: ["querino"], image: { src: historiaSalvador, alt: "Rua de Salvador no século XIX, com casario colonial e moradores", credit: AI_CREDIT, aiGenerated: true }, text: "Manuel Querino, primeiro grande estudioso da culinária baiana, já listava o arroz de hauçá entre os pratos de origem africana preparados em Salvador. O nome faz referência aos hauçás, povo do norte da atual Nigéria e do Níger." },
      { title: "Os hauçás na Bahia", kind: "fato", refs: ["reis", "ufba"], image: { src: historiaHausa, alt: "Cidade hauçá de arquitetura de barro no norte da Nigéria, com mercado", credit: AI_CREDIT, aiGenerated: true }, text: "No século XIX, muitos africanos escravizados levados à Bahia eram hauçás, em sua maioria muçulmanos e frequentemente alfabetizados em árabe. Eles formaram uma comunidade marcante em Salvador." },
      { title: "Contexto: a Revolta dos Malês (1835)", kind: "contexto", refs: ["reis"], image: { src: historiaMales, alt: "Rua colonial de Salvador à noite, iluminada por lampiões, em 1835", credit: AI_CREDIT, aiGenerated: true }, text: "Em janeiro de 1835, africanos muçulmanos, sobretudo nagôs e também hauçás, organizaram em Salvador uma das maiores revoltas urbanas de escravizados das Américas. Atenção: não há documentação que ligue diretamente a revolta ao prato. Ela aparece aqui apenas como contexto da presença hauçá na cidade." },
      { title: "Hoje", kind: "tradição", refs: ["lody"], image: { src: historiaHoje, alt: "Família baiana servindo arroz de hauçá em panelas de barro", credit: AI_CREDIT, aiGenerated: true }, text: "O prato é preparado em casas baianas e restaurantes de comida típica. Cada família tem sua versão: com mais ou menos leite de coco, com ou sem camarão fresco." },
    ],
    baseServings: 4,
    ingredients: [
      { qty: 2, unit: "xícaras", name: "arroz branco" },
      { qty: 300, unit: "g", name: "carne-seca dessalgada" },
      { qty: 100, unit: "g", name: "camarão seco defumado" },
      { qty: 1, unit: "", name: "cebola grande" },
      { qty: 2, unit: "", name: "pimentas-malagueta" },
      { qty: 3, unit: "colheres (sopa)", name: "azeite de dendê" },
      { qty: 200, unit: "ml", name: "leite de coco" },
      { qty: 5, unit: "xícaras", name: "água" },
    ],
    steps: [
      { text: "Deixe a carne-seca de molho na véspera, trocando a água algumas vezes. Cozinhe até ficar macia.", minutes: 40 },
      { text: "Cozinhe o arroz em bastante água, sem refogar, até ficar bem mole e úmido.", minutes: 25 },
      { text: "Desfie a carne e frite-a em um pouco de dendê até dourar.", minutes: 8 },
      { text: "Bata no pilão ou liquidificador o camarão seco, a cebola e a pimenta.", },
      { text: "Refogue essa pasta no dendê restante, junte o leite de coco e deixe engrossar.", minutes: 10 },
      { text: "Sirva o arroz, cubra com a carne frita e regue com o molho." },
    ],
    facts: [
      "O arroz é cozido com mais água que o comum, quase como um mingau firme.",
      "O camarão seco defumado é um ingrediente-chave da cozinha baiana de matriz africana.",
      "Manuel Querino (1851–1923) era negro, baiano e um dos primeiros a escrever sobre a contribuição africana à cultura brasileira.",
    ],
    quiz: [
      { q: "A que povo o nome do prato faz referência?", options: ["Iorubás", "Hauçás", "Bantos"], answer: 1, explain: "Os hauçás vivem no norte da Nigéria e no Níger." },
      { q: "Quem registrou o prato em 1928?", options: ["Manuel Querino", "Jorge Amado", "Gilberto Freyre"], answer: 0, explain: "Em 'A arte culinária na Bahia'." },
      { q: "Existe ligação documentada entre o prato e a Revolta dos Malês?", options: ["Sim", "Não"], answer: 1, explain: "A revolta é só contexto histórico da presença hauçá em Salvador." },
    ],
    refs: ["querino", "reis", "ufba", "lody"],
  },
  {
    slug: "qumbe",
    name: "Qumbe",
    main: true,
    region: "Somália, costa do Oceano Índico",
    tagline: "Um doce de coco e cardamomo da costa somali.",
    accent: "oceano",
    origin: { pos: [2.05, 45.32], place: "Mogadíscio, Somália" },
    image: { src: qumbeImg, alt: "Quadrados de doce de coco somali com cardamomo em prato de latão", credit: AI_CREDIT, aiGenerated: true },
    intro:
      "Qumbe significa “coco” em somali. O doce é feito com coco ralado cozido em calda de açúcar perfumada com cardamomo e cortado em pedaços. Pertence à África Oriental e ao mundo do Oceano Índico, uma história diferente da travessia atlântica.",
    story: [
      { title: "Outro oceano, outra história", kind: "contexto", refs: ["xawaash"], image: { src: historiaIndico, alt: "Cidade portuária da costa somali com barcos de vela triangular no Oceano Índico", credit: AI_CREDIT, aiGenerated: true }, text: "Este prato não chegou ao Brasil pela rota atlântica. Ele vem da costa da Somália, voltada para o Oceano Índico, onde cidades portuárias como Mogadíscio e Merca trocaram mercadorias com a Arábia, a Índia e a costa suaíli por séculos." },
      { title: "Coco e especiarias", kind: "fato", refs: ["xawaash"], image: { src: historiaEspeciarias, alt: "Mercado de especiarias na costa suaíli, com cardamomo, canela e coco seco", credit: AI_CREDIT, aiGenerated: true }, text: "O coqueiro é abundante no litoral somali. O cardamomo, especiaria comum no comércio do Índico, perfuma doces, chás e o arroz somali." },
      { title: "Um doce de festa", kind: "tradição", refs: ["xawaash"], image: { src: historiaFesta, alt: "Família somali servindo chá e quadrados de qumbe em celebração", credit: AI_CREDIT, aiGenerated: true }, text: "Segundo a tradição culinária somali registrada pelo Xawaash, os doces de coco são servidos com chá em visitas, festas e no Eid, celebração ao fim do Ramadã." },
    ],
    baseServings: 12,
    ingredients: [
      { qty: 2, unit: "xícaras", name: "coco ralado sem açúcar" },
      { qty: 1, unit: "xícara", name: "açúcar" },
      { qty: 0.5, unit: "xícara", name: "água" },
      { qty: 0.5, unit: "colher (chá)", name: "cardamomo moído" },
      { qty: 1, unit: "colher (sopa)", name: "manteiga ou ghee" },
    ],
    steps: [
      { text: "Unte uma forma pequena com manteiga e reserve." },
      { text: "Leve o açúcar e a água ao fogo médio até formar uma calda em ponto de fio.", minutes: 8 },
      { text: "Junte o coco e o cardamomo e mexa sem parar até a massa se soltar do fundo da panela.", minutes: 10 },
      { text: "Espalhe na forma, alise e deixe esfriar um pouco.", minutes: 15 },
      { text: "Corte em quadrados enquanto ainda está morno e espere firmar." },
    ],
    facts: [
      "“Qumbe” é a palavra somali para coco.",
      "Algumas versões levam corante para fazer camadas coloridas.",
      "A Somália tem o litoral mais extenso da África continental.",
    ],
    quiz: [
      { q: "De que região vem o Qumbe?", options: ["África Ocidental", "Somália, África Oriental", "Bahia"], answer: 1, explain: "Ele vem da costa somali do Oceano Índico." },
      { q: "Qual especiaria perfuma o doce?", options: ["Cardamomo", "Cravo", "Pimenta-malagueta"], answer: 0, explain: "O cardamomo é comum na culinária somali." },
      { q: "O Qumbe veio ao Brasil pela rota atlântica?", options: ["Sim", "Não"], answer: 1, explain: "Sua história pertence ao mundo do Oceano Índico." },
    ],
    refs: ["xawaash"],
  },
  {
    slug: "angu-a-baiana",
    name: "Angu à Baiana",
    main: true,
    region: "Bahia e Rio de Janeiro, Brasil",
    tagline: "O angu das quitandeiras, com miúdos temperados.",
    accent: "milho",
    origin: { pos: [-22.9, -43.2], place: "Rio de Janeiro" },
    image: { src: anguImg, alt: "Angu de fubá amarelo coberto com ensopado de miúdos e cheiro-verde em prato de barro", credit: AI_CREDIT, aiGenerated: true },
    intro:
      "Uma massa firme de fubá coberta por um ensopado de miúdos bem temperado. Prato brasileiro nascido do encontro de técnicas africanas, indígenas e portuguesas, e famoso nas ruas do Rio de Janeiro do século XIX.",
    story: [
      { title: "Uma palavra africana", kind: "fato", refs: ["cascudo"], image: { src: historiaAnguAfrica, alt: "Cozinheira africana socando massa de mandioca em pilão de madeira", credit: AI_CREDIT, aiGenerated: true }, text: "Câmara Cascudo associa a palavra “angu” a línguas da África Ocidental e Central. No Brasil, ela passou a nomear a massa cozida de fubá ou mandioca." },
      { title: "As vendedoras de angu", kind: "fato", refs: ["debret", "cascudo"], image: { src: historiaQuitandeiras, alt: "Quitandeiras negras com panelas e tabuleiros na cabeça em praça do Rio de Janeiro do século XIX", credit: AI_CREDIT, aiGenerated: true }, text: "No Rio de Janeiro do século XIX, mulheres negras, escravizadas ou libertas, vendiam angu com miúdos em grandes panelas nas ruas e praças. Debret retratou essa cena em suas pranchas." },
      { title: "Um encontro de cozinhas", kind: "contexto", refs: ["cascudo"], image: { src: historiaMilho, alt: "Espigas de milho, mandioca e fubá em cesto de palha", credit: AI_CREDIT, aiGenerated: true }, text: "O milho é americano, e o costume de comer uma massa cozida acompanhada de molho lembra os pirões africanos. Os temperos refogados vêm da cozinha portuguesa." },
      { title: "“À baiana”", kind: "tradição", refs: ["querino"], image: { src: historiaTemperos, alt: "Azeite de dendê, coentro, cheiro-verde e pimentas-malagueta sobre mesa de madeira", credit: AI_CREDIT, aiGenerated: true }, text: "O nome “à baiana” costuma indicar o uso de pimenta, coentro e, em algumas versões, dendê, temperos associados à Bahia." },
    ],
    baseServings: 6,
    ingredients: [
      { qty: 2, unit: "xícaras", name: "fubá" },
      { qty: 6, unit: "xícaras", name: "água" },
      { qty: 500, unit: "g", name: "miúdos de boi (coração, fígado e bucho limpos)" },
      { qty: 2, unit: "", name: "tomates" },
      { qty: 1, unit: "", name: "cebola" },
      { qty: 3, unit: "dentes", name: "alho" },
      { qty: 2, unit: "colheres (sopa)", name: "azeite de dendê" },
      { qty: 1, unit: "maço", name: "cheiro-verde e coentro" },
      { qty: 1, unit: "", name: "pimenta a gosto" },
    ],
    steps: [
      { text: "Lave bem os miúdos com limão e corte-os em cubos.", },
      { text: "Refogue alho e cebola, junte os miúdos e doure.", minutes: 10 },
      { text: "Acrescente tomate, pimenta e um pouco de água. Cozinhe até ficarem macios.", minutes: 45 },
      { text: "Dissolva o fubá em parte da água fria, junte ao restante fervente e mexa sem parar.", minutes: 20 },
      { text: "Finalize o ensopado com dendê e cheiro-verde." },
      { text: "Coloque o angu no prato e cubra com o ensopado." },
    ],
    facts: [
      "Debret pintou vendedoras de angu no Rio entre 1816 e 1831.",
      "O angu era uma refeição barata e nutritiva para trabalhadores urbanos.",
      "Existem versões de angu feitas com farinha de mandioca.",
    ],
    quiz: [
      { q: "Quem vendia angu nas ruas do Rio no século XIX?", options: ["Mulheres negras quitandeiras", "Marinheiros portugueses", "Padres jesuítas"], answer: 0, explain: "Muitas eram escravizadas de ganho ou libertas." },
      { q: "De que é feito o angu?", options: ["Arroz", "Fubá ou mandioca", "Trigo"], answer: 1, explain: "Ele é uma massa cozida de fubá ou de mandioca." },
      { q: "Que artista retratou as vendedoras de angu?", options: ["Debret", "Portinari", "Tarsila"], answer: 0, explain: "Em 'Viagem pitoresca e histórica ao Brasil'." },
    ],
    refs: ["cascudo", "debret", "querino"],
  },
  ...(function () {
    const secondaryImages: Record<string, ImageInfo> = {
      acaraje: { src: acarajeImg, alt: "Acarajés dourados abertos com vatapá e camarão, em folha de bananeira", credit: AI_CREDIT, aiGenerated: true },
      vatapa: { src: vatapaImg, alt: "Vatapá cremoso em tigela de barro com fio de dendê", credit: AI_CREDIT, aiGenerated: true },
      caruru: { src: caruruImg, alt: "Caruru de quiabo com camarão seco em panela de barro", credit: AI_CREDIT, aiGenerated: true },
      jollof: { src: jollofImg, alt: "Arroz jollof avermelhado com fatias de banana-da-terra frita", credit: AI_CREDIT, aiGenerated: true },
    };
    return ([
      ["acaraje", "Acarajé", "Salvador, Bahia", "Bolinho de feijão-fradinho frito no dendê, patrimônio imaterial do Brasil.", "dende", ["iphan", "costalima"]],
      ["vataPa", "Vatapá", "Bahia", "Creme de pão, camarão seco, amendoim, castanha e leite de coco.", "ocre", ["querino"]],
      ["caruru", "Caruru", "Recôncavo Baiano", "Quiabo cortado miúdo com camarão seco e dendê, comida de festa.", "folha", ["lody"]],
      ["jollof", "Arroz Jollof", "África Ocidental (Senegal, Gana, Nigéria)", "Arroz cozido em molho de tomate e pimenta, orgulho da África Ocidental.", "milho", []],
    ] as const
  ).map(([slug, name, region, tagline, accent, refs]) => ({
    slug: slug.toLowerCase(),
    origin: ({ acaraje: { pos: [-12.97, -38.5], place: "Salvador, Bahia" }, vatapa: { pos: [-12.97, -38.5], place: "Salvador, Bahia" }, caruru: { pos: [-12.6, -38.9], place: "Recôncavo Baiano" }, jollof: { pos: [14.7, -17.45], place: "Senegal, África Ocidental" } } as Record<string, Dish["origin"]>)[slug.toLowerCase()],
    name,
    main: false,
    region,
    tagline,
    accent,
    image: secondaryImages[slug.toLowerCase()],
    intro: tagline,
    story: [],
    baseServings: 4,
    ingredients: [],
    steps: [],
    facts: [],
    quiz: [],
    refs: [...refs],
  } as Dish));
  })(),
];

export const secondaryDetails: Record<string, { ingredients: Ingredient[]; steps: Step[]; note: string }> = {
  acaraje: {
    note: "Registrado pelo IPHAN em 2004 como parte do Ofício das Baianas de Acarajé. Tem ligação com o akará iorubá e com o candomblé.",
    ingredients: [
      { qty: 500, unit: "g", name: "feijão-fradinho" },
      { qty: 1, unit: "", name: "cebola" },
      { qty: 1, unit: "colher (chá)", name: "sal" },
      { qty: 500, unit: "ml", name: "azeite de dendê para fritar" },
    ],
    steps: [
      { text: "Deixe o feijão de molho e retire as cascas.", minutes: 480 },
      { text: "Moa o feijão com a cebola e o sal." },
      { text: "Bata a massa com colher de pau até ficar aerada.", minutes: 10 },
      { text: "Frite colheradas no dendê quente até dourar.", minutes: 5 },
    ],
  },
  vatapa: {
    note: "Querino descreveu o vatapá como um dos pratos centrais da cozinha baiana.",
    ingredients: [
      { qty: 4, unit: "", name: "pães amanhecidos" },
      { qty: 200, unit: "g", name: "camarão seco" },
      { qty: 100, unit: "g", name: "amendoim torrado" },
      { qty: 400, unit: "ml", name: "leite de coco" },
      { qty: 3, unit: "colheres (sopa)", name: "dendê" },
    ],
    steps: [
      { text: "Amoleça o pão no leite de coco." },
      { text: "Bata com camarão e amendoim." },
      { text: "Cozinhe mexendo, finalizando com dendê.", minutes: 20 },
    ],
  },
  caruru: {
    note: "Servido na festa de Cosme e Damião, no dia 27 de setembro, na Bahia.",
    ingredients: [
      { qty: 1, unit: "kg", name: "quiabo" },
      { qty: 200, unit: "g", name: "camarão seco" },
      { qty: 1, unit: "", name: "cebola" },
      { qty: 4, unit: "colheres (sopa)", name: "dendê" },
    ],
    steps: [
      { text: "Corte o quiabo em rodelas bem pequenas." },
      { text: "Refogue cebola e camarão moído no dendê." },
      { text: "Junte o quiabo e cozinhe mexendo até perder a baba.", minutes: 30 },
    ],
  },
  jollof: {
    note: "Disputado com orgulho entre Gana, Nigéria e Senegal. Muitos pesquisadores associam sua origem ao antigo Império Jolof, no atual Senegal.",
    ingredients: [
      { qty: 2, unit: "xícaras", name: "arroz parboilizado" },
      { qty: 4, unit: "", name: "tomates" },
      { qty: 1, unit: "", name: "pimentão vermelho" },
      { qty: 1, unit: "", name: "cebola" },
      { qty: 2, unit: "colheres (sopa)", name: "extrato de tomate" },
      { qty: 3, unit: "xícaras", name: "caldo" },
    ],
    steps: [
      { text: "Bata tomate, pimentão e cebola." },
      { text: "Frite o extrato, junte o molho e reduza.", minutes: 20 },
      { text: "Acrescente o arroz e o caldo, tampe e cozinhe em fogo baixo.", minutes: 30 },
    ],
  },
};

export const getDish = (slug: string) => dishes.find((d) => d.slug === slug);

export type TimelineEvent = { year: string; title: string; text: string; region: "Atlântico" | "Índico" | "Brasil"; ref?: string };
export const timeline: TimelineEvent[] = [
  { year: "séc. X–XV", title: "Comércio no Índico", text: "Cidades da costa somali e suaíli comerciam com a Arábia e a Índia, e especiarias como o cardamomo circulam pela região.", region: "Índico", ref: "xawaash" },
  { year: "séc. XIV–XIX", title: "Cidades-estado hauçás", text: "Kano, Katsina e Zaria florescem como centros comerciais e islâmicos no norte da atual Nigéria.", region: "Atlântico", ref: "reis" },
  { year: "1550–1850", title: "Tráfico atlântico para a Bahia", text: "Milhões de africanos são levados à força ao Brasil. O Golfo do Benin é uma das principais origens dos que chegam à Bahia.", region: "Atlântico", ref: "slavevoyages" },
  { year: "1816–1831", title: "Debret no Rio", text: "Jean-Baptiste Debret retrata as vendedoras de angu nas ruas do Rio de Janeiro.", region: "Brasil", ref: "debret" },
  { year: "1835", title: "Revolta dos Malês", text: "Africanos muçulmanos se rebelam em Salvador. A revolta não tem ligação documentada com o Arroz de Hauçá.", region: "Brasil", ref: "reis" },
  { year: "1850", title: "Lei Eusébio de Queirós", text: "O tráfico atlântico de escravizados para o Brasil é proibido.", region: "Brasil" },
  { year: "1888", title: "Abolição", text: "A Lei Áurea encerra a escravidão legal no Brasil.", region: "Brasil" },
  { year: "1928", title: "A arte culinária na Bahia", text: "Publicação póstuma do estudo de Manuel Querino, que registra pratos como o arroz de hauçá.", region: "Brasil", ref: "querino" },
  { year: "2004", title: "Acarajé, patrimônio", text: "O IPHAN registra o Ofício das Baianas de Acarajé como patrimônio imaterial.", region: "Brasil", ref: "iphan" },
];

export const generalQuiz: QuizQ[] = dishes.filter((d) => d.main).flatMap((d) => d.quiz.map((q): QuizQ => (d.image ? { ...q, image: d.image } : q))).concat([
  { q: "Qual ingrediente aparece no Acarajé, no Vatapá e no Caruru?", options: ["Azeite de dendê", "Azeite de oliva", "Manteiga"], answer: 0, explain: "O dendê vem da palmeira africana Elaeis guineensis." },
  { q: "Em que ano o Ofício das Baianas de Acarajé virou patrimônio?", options: ["1988", "2004", "2015"], answer: 1, explain: "Ele foi registrado pelo IPHAN em 2004." },
]);
