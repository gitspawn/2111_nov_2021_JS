import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items";
import galleryTemplate from "../templates/galleryTpl.handlebars";

import "simplelightbox/dist/simple-lightbox.min.css";

let galleryRefContaitner = document.querySelector(".gallery");

// function createGalleryMarkup(items) {
//     return items
//         .map(({ preview, original, description }) => {
//             return `<a href="${original}" class="gallety__image">
//         <img src="${original}" alt="${description}"/>
//     </a>`;
//         })
//         .join("");
// }

// const galleryItemsMarkup = createGalleryMarkup(galleryItems);

const galleryItemsMarkup = galleryTemplate(galleryItems);

galleryRefContaitner.insertAdjacentHTML("beforeend", galleryItemsMarkup);

new SimpleLightbox(".gallery a", {
    captions: true,
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 300,
});
