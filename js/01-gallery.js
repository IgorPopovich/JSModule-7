import { galleryItems } from './gallery-items.js';

//console.log(galleryItems)

const gallery = document.querySelector(".gallery");

const createGallery = (items) => {
    return items.map((item) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
                src="${item.preview}"
                data-sorce="${item.original}"
                alt="${item.description}"">
        </a>
    </div>`).join("");
}
gallery.innerHTML = createGallery(galleryItems)

gallery.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.tagName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.sorce}" width="800" height="600">
    `)
    instance.show();

    gallery.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close()
        }
    })
});