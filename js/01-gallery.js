import { galleryItems } from "./gallery-items.js";
// Change code below this line
let href = "";
const gallery = document.querySelector(".gallery");
console.log(galleryItems);

const array = galleryItems.map((item) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </li>`;
});

gallery.insertAdjacentHTML("beforeend", array.join(""));

gallery.addEventListener("click", findHref);

function findHref(evnt) {
  evnt.preventDefault();
  if (evnt.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${evnt.target.dataset.source} width="800" height="600">`);
  instance.show();
  document.addEventListener("keydown", vanish);
  function vanish(evnt) {
    if (evnt.code === "Escape") {
      instance.close();
    }
  }
}
