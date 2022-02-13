import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItem = document.querySelector('.gallery');
galleryItem.addEventListener('click', onGalleryItemRefClick);


const galleryMarkup = createGalleryMarkup(galleryItems);
galleryItem.innerHTML = galleryMarkup;

    
function createGalleryMarkup(items) {
    return items.map(item => `<div><a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a></div>`).join('');
}

function onGalleryItemRefClick(event) {

    event.preventDefault();

    if (event.target.tagName !== "IMG") {
        return;
    }

  fullScreenGalleryItemShow(event.target.dataset.source);
  
  // console.log(event.target.dataset.source);
}

let instance;
function fullScreenGalleryItemShow(src) {

  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', pressOnEscape);
      },
      onClose: (instance) => {
         window.removeEventListener('keydown', pressOnEscape);
      },
    },
  );
  instance.show();
  // instance.close();

}

function pressOnEscape(event) {
  if (event.code !== 'Escape') {
    return;
  }
  instance.close();
}
