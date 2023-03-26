import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector(".gallery");
const cardsImg = makeImagesGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", cardsImg);
galleryList.addEventListener("click", onModalImgClick);

function makeImagesGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join(``);
}

function onModalImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
  gallery.on("show.simplelightbox");
}