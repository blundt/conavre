function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Array de imágenes para cada galería
const galleryImages = {
    gallery1: ["img/gallery1-1.jpg", "img/gallery1-2.jpg", "img/gallery1-3.jpg", "img/gallery1-4.jpg", "img/gallery1-5.jpg", "img/gallery1-6.jpg", "img/gallery1-7.jpg", "img/gallery1-8.jpg", "img/gallery1-9.jpg", "img/gallery1-10.jpg", "img/gallery1-11.jpg", "img/gallery1-12.jpg", "img/gallery1-13.jpg"],
    gallery2: ["img/gallery2-1.jpg", "img/gallery2-2.jpg", "img/gallery2-3.jpg", "img/gallery2-4.jpg", "img/gallery2-5.jpg", "img/gallery2-6.jpg", "img/gallery2-7.jpg", "img/gallery2-8.jpg", "img/gallery2-9.jpg"],
    gallery3: ["img/gallery3-1.jpg", "img/gallery3-2.jpg", "img/gallery3-3.jpg", "img/gallery3-4.jpg", "img/gallery3-5.jpg", "img/gallery3-6.jpg", "img/gallery3-7.jpg", "img/gallery3-8.jpg", "img/gallery3-9.jpg"]
};

// Índice actual de la imagen mostrada
const currentIndex = {
    gallery1: 0,
    gallery2: 0,
    gallery3: 0
};

// Función para mostrar la imagen anterior
function prevImage(galleryId) {
    currentIndex[galleryId] = (currentIndex[galleryId] - 1 + galleryImages[galleryId].length) % galleryImages[galleryId].length;
    document.getElementById(galleryId).src = galleryImages[galleryId][currentIndex[galleryId]];
}

// Función para mostrar la imagen siguiente
function nextImage(galleryId) {
    currentIndex[galleryId] = (currentIndex[galleryId] + 1) % galleryImages[galleryId].length;
    document.getElementById(galleryId).src = galleryImages[galleryId][currentIndex[galleryId]];
}
