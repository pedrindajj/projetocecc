# Raízes & Sabores — Creative and Technical Plan

A digital culinary museum about African and Afro-Brazilian food heritage. School project by Pedro Henrique and Lian da Silva, Turma 2º A, Colégio Estadual Cidade de Candeias (BA). All site content will be in Brazilian Portuguese.

## 1. Creative concept: "Uma travessia pelo sabor"

The site tells one story: ingredients, people and knowledge crossing the Atlântico, from West and Central Africa to the Recôncavo Baiano. Visitors move through it like rooms in a museum. Each dish is an "exhibition room" with its own chapter.

**Visual identity**
- Palette: earth and fire. Very dark roasted-coffee backgrounds (#1A120B), dendê orange (#C8551E), turmeric/ochre gold (#D9A441), banana-leaf green (#3F5A3A) and handmade-paper cream (#F2E8D5) for reading sections.
- Typography: a high-contrast editorial serif for headings (Fraunces or Cormorant Garamond) with a clear humanist sans for body text (Work Sans). Small uppercase labels for "museum captions".
- Textures: subtle paper grain, film grain on photos, and geometric patterns drawn as thin lines, inspired by Adinkra symbols and Bahian tiles (used sparingly, with cultural notes explaining what they mean).
- Motion: slow, documentary-style. Fades, gentle parallax, text revealed line by line, images that "develop" like film. No flashy effects.

## 2. Site structure

```text
/                      Início (cinematic homepage)
/receitas              Acervo de receitas (all dishes)
/receitas/arroz-de-hauca
/receitas/qumbe
/receitas/angu-a-baiana
/receitas/$slug        Secondary recipes (acarajé, vatapá, caruru, moqueca, abará, mungunzá, jollof)
/mapa                  Mapa das Travessias (interactive map)
/linha-do-tempo        Linha do Tempo
/quiz                  Desafio dos Sabores
/sobre                 Sobre o projeto, autores, fontes e créditos de imagem
```

Navigation: a minimal fixed top bar (logo plus 5 links) that becomes a full-screen menu on mobile. Each recipe page links to the next dish, like walking to the next room.

## 3. Homepage, told in scenes

1. **Abertura**: full-screen photo of a wood stove or dendê being poured, with slow zoom. Title "Raízes & Sabores" appears letter by letter. Subtitle: "Uma travessia pela herança culinária africana e afro-brasileira."
2. **O Atlântico**: as you scroll, a stylized map draws a line from the African coast to Salvador, with short text about the forced crossing and the knowledge enslaved people kept alive.
3. **Os três pratos principais**: three large cinematic panels (Arroz de Hauçá, Qumbe, Angu à Baiana), each with a photo, a one-line story and a link to its page.
4. **Ingredientes que atravessaram o mar**: horizontal row of ingredient cards (dendê, quiabo, inhame, feijão-fradinho, pimenta, coco). Tap a card to see where it came from.
5. **Mais sabores**: grid of the secondary recipes.
6. **Convites**: three doors to the Mapa, Linha do Tempo and Quiz.
7. **Rodapé**: authors, school, class, and sources.

## 4. Recipe pages (template shared by all, richer for the 3 main dishes)

- **Abertura do prato**: full-screen photo, name, origin and a key quote.
- **A história**: an editorial essay of 3 to 5 sections with archival images and captions, covering origin, the people connected to it (for example the Hausa people and the Malê Revolt of 1835 for Arroz de Hauçá) and its place in Bahia today.
- **Mapa de origem**: a small map of where the dish comes from.
- **Ingredientes**: a portion selector (1 to 12 people) that recalculates quantities, with checkboxes to tick off items.
- **Modo de preparo**: step cards, a "modo cozinha" (full-screen, large text, one step at a time, with a screen-on option where supported) and timers built into the steps.
- **Você sabia?**: curiosity cards.
- **Mini quiz**: 3 questions about the dish.
- **Fontes**: references for that page.

A note about Qumbe: it is hard to find documented sources for this dish. Before writing its content, I need to confirm which recipe and tradition you mean (see the open questions).

## 5. Interactive features

**Essential**
- Ingredient quantity calculator
- Step-by-step cooking mode with timers
- Interactive cultural map
- Historical timeline
- Quiz with score and a final "certificate" screen

**Optional enhancements**
- "Ambient sound" button (wood fire, market sounds) using royalty-free audio
- Interactive spice/ingredient "pantry" explorer
- Glossary of Yoruba, Hausa and Kimbundu words used in Bahian cooking, shown as pop-ups
- Print-friendly recipe version
- Light/dark reading mode
- Favorites saved on the device

## 6. Map

- **Leaflet + OpenStreetMap / CARTO** tiles: free, with no account or key needed. A dark map style that matches the site.
- Markers for regions (Hausaland/Northern Nigeria, Yoruba lands, Benin, Angola/Congo, Salvador, Recôncavo), animated curved routes across the Atlantic, and filters by dish and by period.
- Clicking a marker opens a panel with a photo, text and links to related recipes.
- Google Maps is left optional. It needs a key and a billing account, so it is not recommended for this project.

## 7. Images

- **Real photos first**: Wikimedia Commons (free licenses, with credits), Unsplash and Pexels for food and landscapes. Public archival images: Biblioteca Nacional Digital, Arquivo Público da Bahia, and Brasiliana Fotográfica (for example, Marc Ferrez and Rugendas or Debret prints).
- **AI fallback**: only where good real photos do not exist, such as the plated finished dishes or historical scenes. These images use one consistent style (warm documentary photography) and always show an "Imagem gerada por IA, reconstrução ilustrativa" label.
- Every image appears in a credits list on the Sobre page.

## 8. Historical accuracy

- Base the content on recognized authors and sources: Manuel Querino ("A Arte Culinária na Bahia", 1928), Câmara Cascudo ("História da Alimentação no Brasil"), Raul Lody, Vivaldo da Costa Lima, João José Reis ("Rebelião Escrava no Brasil", on the Malês), IPHAN (the Ofício das Baianas de Acarajé registry) and the Slave Voyages database for routes.
- Clearly separate documented facts from oral tradition ("segundo a tradição...").
- Each page lists its sources. Pedro and Lian should review the texts with a teacher.

## 9. Responsive design and performance

- Mobile first, since most students and teachers will use phones. Effects get lighter on small screens and are turned off when "reduced motion" is enabled on the device.
- Compressed, lazily loaded images. The map loads only when it appears on screen.
- Accessibility: good contrast, text descriptions for every image, keyboard navigation.

## 10. Stages and costs

1. Foundation: visual identity, navigation, homepage
2. The three main recipe pages, with the calculator and cooking mode
3. Map and timeline
4. Quiz, secondary recipes, Sobre/credits
5. Polish: animations, sound (optional), accessibility review

**Costs**: R$ 0 in services. The map, photo sources and libraries are free. The only costs are the Lovable credits used to build. No database or login is needed, because everything (quiz score, favorites) is stored on the visitor's device.

**Limitations**
- Real photos of Qumbe and Arroz de Hauçá are scarce, so AI images will likely be needed.
- Archival images vary in quality and license.
- I cannot fact-check every historical claim, so a human review is recommended.

## Open questions before building
- Qumbe: what is the recipe or source you are using? (Ingredients, origin)
- Do you have your own photos (for example, the dishes cooked by you) to include?

## Technical details
- TanStack Start routes, one file per page. Recipe data lives in typed local files (no backend).
- Libraries: framer-motion (animations), Lenis (smooth scrolling), react-leaflet loaded only in the browser, and shadcn components.
- Images: real photos are added as hosted assets with credit metadata. AI images are made with the image generator and include an `aiGenerated` flag that shows the label.
- localStorage is used for quiz scores and favorites.
