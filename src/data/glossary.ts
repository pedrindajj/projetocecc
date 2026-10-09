import { dishes, type ImageInfo } from "./content";

export type GlossEntry = { term: string; def: string; refs: string[]; image?: ImageInfo | undefined };

const img = (slug: string) => dishes.find((d) => d.slug === slug)?.image;
const storyImg = (slug: string, i: number) => dishes.find((d) => d.slug === slug)?.story[i]?.image;

export const glossary: GlossEntry[] = [
  { term: "Dendê", def: "Óleo avermelhado extraído da palmeira Elaeis guineensis, nativa da África Ocidental e trazida ao Brasil. É a base de cor e sabor da cozinha baiana de matriz africana, presente no acarajé, no vatapá e no arroz de hauçá.", refs: ["cascudo", "querino"], image: img("arroz-de-hauca") },
  { term: "Quitandeira", def: "Mulher que vendia quitutes — comidas prontas — nas ruas das cidades brasileiras dos séculos XVIII e XIX. No Rio de Janeiro, as quitandeiras negras vendiam angu e foram retratadas pelo pintor Jean-Baptiste Debret.", refs: ["debret", "cascudo"], image: storyImg("angu-a-baiana", 0) },
  { term: "Hauçá", def: "Povo do norte da atual Nigéria e do Níger, em sua maioria muçulmano. Muitos hauçás escravizados foram levados à Bahia no século XIX, e o nome do arroz de hauçá guarda essa memória.", refs: ["querino", "reis"], image: storyImg("arroz-de-hauca", 1) },
  { term: "Qumbe", def: "Palavra somali para “coco”. Nomeia também o doce de coco cozido em calda de açúcar com cardamomo, típico da costa da Somália, servido com chá em festas e no Eid.", refs: ["xawaash"], image: img("qumbe") },
  { term: "Acarajé", def: "Bolinho de feijão-fradinho frito no azeite de dendê, associado ao akará iorubá. Em Salvador, o ofício das baianas de acarajé é patrimônio cultural registrado pelo IPHAN.", refs: ["costalima", "iphan"], image: img("acaraje") },
  { term: "Angu", def: "Papas grossas de fubá (ou de outros grãos) cozidas em água ou caldo. O angu à baiana do Rio de Janeiro era coberto com molho de miúdos, pimenta e camarão seco.", refs: ["debret", "cascudo"], image: img("angu-a-baiana") },
  { term: "Malês", def: "Nome dado aos africanos muçulmanos na Bahia do século XIX (do iorubá “imalê”). Em 1835, lideraram em Salvador uma das maiores revoltas urbanas de escravizados das Américas.", refs: ["reis"], image: storyImg("arroz-de-hauca", 2) },
  { term: "Vatapá", def: "Creme de pão, camarão seco, leite de coco e dendê, servido com arroz ou dentro do acarajé. Um dos pratos centrais da cozinha baiana de origem africana.", refs: ["querino", "lody"], image: img("vatapa") },
  { term: "Caruru", def: "Prato de quiabo refogado com camarão seco e temperos. O quiabo é uma hortaliça de origem africana, e o caruru tem papel importante em festas e rituais do candomblé.", refs: ["lody", "cascudo"], image: img("caruru") },
  { term: "Jollof", def: "Arroz vermelho cozido com tomate e pimenta, prato celebrado na África Ocidental — Senegal, Gana e Nigéria disputam a autoria da melhor versão.", refs: ["cascudo"], image: img("jollof") },
  { term: "Cardamomo", def: "Especiaria que circulava nas rotas do Oceano Índico e perfuma a cozinha somali: doces como o qumbe, chás e o arroz de festa.", refs: ["xawaash"], image: storyImg("qumbe", 1) },
  { term: "Feijão-fradinho", def: "Também chamado feijão-de-corda ou caupi. Foi domesticado na África Ocidental e é a base do acarajé baiano.", refs: ["costalima"], image: img("acaraje") },
];
