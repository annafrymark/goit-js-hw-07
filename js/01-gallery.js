import { galleryItems } from "./gallery-items.js";
// Change code below this line

galleryItems.forEach(function (galleryItem) {
  const div = document.createElement("div");
  div.classList.add("gallery__item");
  const a = document.createElement("a");
  div.appendChild(a);
  a.classList.add("gallery__link");
  a.setAttribute("href", galleryItem.original);
  const img = document.createElement("img");
  a.appendChild(img);
  img.classList.add("gallery__image");
  img.setAttribute("src", galleryItem.preview);
  img.setAttribute("data-source", galleryItem.original);
  img.setAttribute("alt", galleryItem.description);
  document.querySelector("div.gallery").appendChild(div);
});

console.log(galleryItems);

document.querySelector("div.gallery").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target.getAttribute("data-source"));
  const instance = basicLightbox.create(`
  <img src = ${event.target.dataset.source}>
 
`);
  console.log(event.target.alt);
  instance.show();
});


