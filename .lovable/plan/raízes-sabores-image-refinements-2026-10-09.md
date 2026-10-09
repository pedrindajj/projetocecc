# Raízes & Sabores — Image refinements

Four changes to the already-built site, all about images.

## 1. Remove the "Imagem gerada por IA" labels

- Delete the visible AI badge from every dish and hero image.
- Keep the credit information on the /sobre page (source and license list), but without the on-image AI label.

## 2. Images in "Marcos de uma história" (history chapters)

- Each chapter/section of the history essay on the 3 main recipe pages gets its own image, placed alongside or above the text.
- Images match the chapter's subject (e.g. 19th-century Bahia scene for Arroz de Hauçá, Somali coast / Indian Ocean trade for Qumbe, street quitandeiras of Rio for Angu).
- Same documentary look as the existing dish images.

## 3. Image on the Quiz

- Add a visual to the quiz: an image per question (or a header image per question card) related to the dish being asked about, reusing existing dish/ingredient images where they fit.

## 4. Small images on "Outros sabores"

- The 4 secondary recipe cards (Acarajé, Vatapá, Caruru, Jollof) get small thumbnail images — clearly smaller than the large main-dish images, keeping the visual hierarchy: big chapters for the 3 main dishes, small cards for the extras.

## Technical details

- New images generated with the same style as the existing ones (natural light, documentary look, matching each recipe's ingredients), saved under src/assets and imported.
- No changes to text, routes, or data structure beyond adding image fields where needed.
