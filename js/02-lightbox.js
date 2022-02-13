import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryItem = document.querySelector('.gallery');
// galleryItem.addEventListener('click', showCaption);


const galleryMarkup = createGalleryMarkup(galleryItems);
galleryItem.innerHTML = galleryMarkup;

    
function createGalleryMarkup(items) {
    return items.map(item => `<div><a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a></div>`).join('');
}

// var lightbox = new SimpleLightbox('.gallery a');

const gallery = new SimpleLightbox('.gallery a');
gallery.on('next.simplelightbox', () => {
  
    const caption = {        
        captionsData: `${alt}`,
        captionPosition: 'bottom',
        captionDelay: 250,
    
};
 
    return caption;
     
});


