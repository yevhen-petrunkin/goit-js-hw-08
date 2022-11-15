import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
let galleryMarkup = '';
const galleryRef = document.querySelector('.gallery');

createGalleryMarkup(galleryItems);

createGalleryFromMarkup(galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryMarkup(items) {
  return (galleryMarkup = items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join(''));
}

function createGalleryFromMarkup(markup) {
  galleryRef.innerHTML = markup;
}

gallery.on('show.simplelightbox', function (evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
});
console.log(galleryItems);
