# Raízes & Sabores — Revised Creative and Technical Plan

A digital culinary museum about African and Afro-Brazilian food heritage. School project by Pedro Henrique and Lian da Silva, Turma 2º A, Colégio Estadual Cidade de Candeias (BA). All site content will be in Brazilian Portuguese.

## 1. Concept: "Uma travessia pelo sabor", with many paths

The travessia is not one single route. It is a journey across Africa's culinary diversity and its heritage in Brazil. Each main dish has its own geography and its own story:

| Dish | Region | Story focus |
|---|---|---|
| Arroz de Hauçá | Bahia (Salvador and the Recôncavo); the name refers to the Hausa people of West Africa | An Afro-Bahian dish: rice, carne-seca and a pepper-and-dendê sauce. It connects to the Hausa presence in Bahia in the 19th century. |
| Qumbe | Somalia, East Africa (Indian Ocean coast) | A Somali coconut sweet (coconut, sugar, cardamom). It belongs to a coastal Swahili and Somali food culture, not to the Atlantic crossing. |
| Angu à Baiana | Brazil (Bahia, plus a strong tradition in Rio de Janeiro) | Corn or cassava angu with a stew of offal or meat. It blends African, Indigenous and Portuguese techniques. The section covers Rio's street angu sellers (angu da quitandeira). |

The homepage opens as "Três cozinhas, três caminhos" (three kitchens, three paths), not as one line across the ocean.

**Visual identity (unchanged)**
- Dark roasted-coffee background (#1A120B), dendê orange (#C8551E), ochre (#D9A441), banana-leaf green (#3F5A3A) and paper cream (#F2E8D5).
- Each dish gets its own accent color: dendê for Arroz de Hauçá, the turquoise of the Indian Ocean (#2E7C83) for Qumbe, and corn gold for Angu.
- Typography: Fraunces for headings and Work Sans for body text, with small uppercase museum-style captions.
- Slow, documentary-style motion that respects the device's "reduced motion" setting.

## 2. Site structure

```text
/                         Início
/receitas                 Acervo (3 main dishes + 4 secondary ones)
/receitas/arroz-de-hauca
/receitas/qumbe
/receitas/angu-a-baiana
/receitas/$slug           Acarajé, Vatapá, Caruru, Jollof Rice (West Africa)
/mapa                     Mapa
/linha-do-tempo           Linha do Tempo
/quiz                     Quiz
/sobre                    Project, authors, sources and image credits
```

## 3. Homepage

1. **Abertura**: full-screen real photo, the title appearing slowly, and the subtitle "Uma travessia pela diversidade culinária africana e afro-brasileira."
2. **Um continente, muitas cozinhas**: a short text and a stylized map of Africa that highlights the regions behind the dishes (West Africa and the Somali coast). Brazil appears next.
3. **Três cozinhas, três caminhos**: three large cinematic chapters, one per dish, each with its own color, place and one-line story. These are the protagonists.
4. **Ingredientes**: cards for dendê, coconut, cardamom, corn, okra and black-eyed peas, each with its documented origin.
5. **Mais sabores**: the 4 secondary recipes, in a smaller section.
6. **Explore**: links to the Mapa, Linha do Tempo and Quiz.
7. **Rodapé**: authors, school, class and sources.

## 4. Recipe pages

These sections apply to the 3 main dishes. The secondary recipes use a shorter version.
- Full-screen opening with the dish's name, region and accent color.
- **História**: an essay of 3 to 5 sections with citations shown as footnotes. Each claim is marked as a documented fact or as oral tradition.
  - Arroz de Hauçá: covers the Hausa presence in Bahia and, as separate context, the 1835 Malê Revolt. The page says clearly that no documented direct link exists between the revolt and the dish.
  - Qumbe: covers Somali coastal cuisine, coconut, spices and the Indian Ocean trade (main source: Xawaash).
  - Angu à Baiana: covers the angu of enslaved people and its life as street food in Salvador and Rio.
- A small map of origin.
- **Ingredientes** with a portion calculator (1 to 12 people) and items you can tick off.
- **Modo de preparo** with step cards and a full-screen "modo cozinha" with timers.
- **Você sabia?** curiosity cards, 3 quiz questions and a sources list.

## 5. Features

**Essential**: map, timeline, portion calculator, cooking mode and quiz.

**Optional (later)**: ambient sound, a completion certificate, favorites, a glossary, print-friendly recipes and extra effects.

## 6. Map (Leaflet + free CARTO dark tiles, no key)

Places: Somalia (Mogadishu and the Benadir coast), West Africa (Hausaland in northern Nigeria and Niger, plus Yoruba lands and the Bight of Benin), Salvador and the Recôncavo, and Rio de Janeiro.

Three distinct visual layers, each with a legend and an on/off filter:
- **Movimentos históricos documentados**: solid lines, used only for routes backed by sources (for example, the Bight of Benin to Bahia, based on the Slave Voyages database). Each line shows its citation when clicked.
- **Associações culturais**: dashed lines or soft halos, such as the Hausa name in Arroz de Hauçá. They are labeled "associação", not "rota".
- **Origens culinárias**: dish markers, using each dish's accent color.

Somalia has no line to Brazil. Qumbe stands alone in the Indian Ocean context. No route is drawn without a source.

## 7. Images

- **Real photos first**: Wikimedia Commons, Unsplash, Pexels, Brasiliana Fotográfica and the Biblioteca Nacional Digital. Each one gets a credit and license.
- Every dish photo is checked against its recipe (for example, Qumbe must show the coconut-and-cardamom sweet, not a generic coconut candy).
- **AI fallback**: used only when no good real photo exists. All AI images share one look (natural light, documentary style) and follow the recipe ingredients exactly. Each one carries the visible label "Imagem gerada por IA". Historical scenes are marked "Reconstrução histórica ilustrativa (IA)".
- All image credits are listed on /sobre.

## 8. Sources

- Arroz de Hauçá and Bahia: Manuel Querino, "A Arte Culinária na Bahia" (1928); Raul Lody; Vivaldo da Costa Lima.
- Hausa people and the Malê Revolt: João José Reis, "Rebelião Escrava no Brasil".
- Qumbe: Xawaash (xawaash.com/recipes/coconut-sweets), plus references on Somali food culture.
- Angu: Câmara Cascudo, "História da Alimentação no Brasil", and Debret's prints of the quitandeiras of Rio.
- Routes: SlaveVoyages.org.
- Citations appear on each page and again on /sobre. A teacher review is recommended.

## 9. Responsive design and performance

Mobile first, with compressed and lazily loaded images. The map loads only when it is reached. Accessibility: strong contrast, image descriptions and keyboard navigation.

## 10. Stages and cost

1. Visual identity, navigation and homepage
2. The 3 main recipe pages, with the calculator and cooking mode
3. Map and timeline
4. Quiz, 4 secondary recipes and /sobre
5. Polish and optional extras

Cost: R$ 0 in services. Everything is free and needs no login or database. The only cost is Lovable build credits.

**Limitations**
- Real photos of Qumbe and Arroz de Hauçá are scarce, so AI images will likely be needed (always labeled).
- Sources on Arroz de Hauçá's exact origin are limited, and the text will say so.

## Technical details
- TanStack Start with one route file per page. Dish data, citations and map layers live in typed local files; each image carries `source`, `license` and `aiGenerated` fields.
- framer-motion for animation, react-leaflet loaded only in the browser, and shadcn components.
- localStorage is used only for quiz progress.
