import { galleryItems } from "./gallery-items.js";
// Change code below this line

galleryItems.forEach(function (galleryItem, index) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.classList.add("gallery__item");
  const a = document.createElement("a");
  div.appendChild(a);
  a.classList.add("gallery__link");
  a.setAttribute("href", "original");
  const img = document.createElement("img");
  a.appendChild(img);
  img.classList.add("gallery__image");
  img.setAttribute("src", "preview");
  img.setAttribute("data-source", "original");
  img.setAttribute("alt", "description");
});

console.log(galleryItems);
