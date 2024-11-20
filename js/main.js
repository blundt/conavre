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
    gallery1: ["img/gallery1-1.jpg", "img/gallery1-2.jpg", "img/gallery1-3.jpg", "img/gallery1-4.jpg", "img/gallery1-5.jpg", "img/gallery1-6.jpg", "img/gallery1-7.jpg", "img/gallery1-8.jpg", "img/gallery1-9.jpg", "img/gallery1-10.jpg", "img/gallery1-11.jpg", "img/gallery1-12.jpg", "img/gallery1-13.jpg", "img/gallery1-14.jpg"],
    gallery2: ["img/gallery2-1.jpg", "img/gallery2-2.jpg", "img/gallery2-3.jpg", "img/gallery2-4.jpg", "img/gallery2-5.jpg", "img/gallery2-6.jpg", "img/gallery2-7.jpg", "img/gallery2-8.jpg", "img/gallery2-9.jpg"],
    gallery3: ["img/gallery3-1.jpg", "img/gallery3-2.jpg", "img/gallery3-3.jpg", "img/gallery3-4.jpg", "img/gallery3-5.jpg", "img/gallery3-6.jpg", "img/gallery3-7.jpg", "img/gallery3-8.jpg", "img/gallery3-9.jpg"],
    gallery4: ["img/service1-1.jpg", "img/service1-2.jpg", "img/service1-3.jpg", "img/service1-4.jpg", "img/service1-5.jpg", "img/service1-6.jpg", "img/service1-7.jpg"],
    gallery5: ["img/service2-1.jpg", "img/service2-2.jpg", "img/service2-3.jpg", "img/service2-4.jpg", "img/service2-5.jpg", "img/service2-6.jpg"],
    gallery6: ["img/service3-1.jpg", "img/service3-2.jpg", "img/service3-3.jpg", "img/service3-4.jpg", "img/service3-5.jpg", "img/service3-6.jpg", "img/service3-7.jpg"],
    gallery7: ["img/service4-1.jpg", "img/service4-2.jpg", "img/service4-3.jpg", "img/service4-4.jpg", "img/service4-5.jpg", "img/service4-6.jpg", "img/service4-7.jpg"],
    gallery8: ["img/service5-1.jpg", "img/service5-2.jpg", "img/service5-3.jpg", "img/service5-4.jpg", "img/service5-5.jpg", "img/service5-6.jpg", "img/service5-7.jpg", "img/service5-8.jpg"],
    gallery9: ["img/service6-1.jpg", "img/service6-2.jpg", "img/service6-3.jpg", "img/service6-4.jpg"]
};

// Índice actual de la imagen mostrada
const currentIndex = {
    gallery1: 0,
    gallery2: 0,
    gallery3: 0,
    gallery4: 0,
    gallery5: 0,
    gallery6: 0,
    gallery7: 0,
    gallery8: 0,
    gallery9: 0
};

// Variable para los intervalos automáticos
let autoSwitchInterval = null;

// Función para mostrar la imagen anterior
function prevImage(galleryId) {
    currentIndex[galleryId] = (currentIndex[galleryId] - 1 + galleryImages[galleryId].length) % galleryImages[galleryId].length;
    document.getElementById(galleryId).src = galleryImages[galleryId][currentIndex[galleryId]];
    resetAutoSwitch(galleryId);
}

// Función para mostrar la imagen siguiente
function nextImage(galleryId) {
    currentIndex[galleryId] = (currentIndex[galleryId] + 1) % galleryImages[galleryId].length;
    document.getElementById(galleryId).src = galleryImages[galleryId][currentIndex[galleryId]];
    resetAutoSwitch(galleryId);
}

// Función para reiniciar el cambio automático de imágenes
function resetAutoSwitch(galleryId) {
    if (autoSwitchInterval) {
        clearInterval(autoSwitchInterval);
    }
    autoSwitchInterval = setInterval(() => {
        nextImage(galleryId);
    }, 3000);
}

// Asegurar que el evento click funcione correctamente en dispositivos móviles
document.querySelectorAll('.prev, .next').forEach(button => {
    button.addEventListener('touchstart', function(event) {
        event.preventDefault();
        const galleryId = this.getAttribute('onclick').match(/'(.*)'/)[1];
        if (this.classList.contains('prev')) {
            prevImage(galleryId);
        } else {
            nextImage(galleryId);
        }
    });
});

// Código para el menú tipo "hamburguesa" en dispositivos móviles
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('main-nav').getElementsByTagName('ul')[0];
    nav.classList.toggle('show');
});

// Iniciar el cambio automático de imágenes al cargar la página
Object.keys(galleryImages).forEach(galleryId => {
    resetAutoSwitch(galleryId);
});

// Mostrar y ocultar el reproductor de video con cambio de texto del botón
const videoButton = document.getElementById('open-btn');
const videoContainer = document.getElementById('video-container');
const videoPlayer = document.getElementById('video-player');

// Asegurar que el video esté oculto al cargar la página
window.addEventListener('load', function() {
    videoContainer.style.display = "none";
    videoButton.textContent = "Ver Video";
});

videoButton.addEventListener('click', function() {
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "flex";
        videoButton.textContent = "Ocultar Video";
        videoPlayer.play(); // Reproducir el video automáticamente
    } else {
        videoContainer.style.display = "none";
        videoButton.textContent = "Ver Video";
        videoPlayer.pause(); // Pausar el video cuando se oculta el contenedor
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    videoContainer.style.display = "none";
    videoButton.textContent = "Ver Video";
    videoPlayer.pause(); // Pausar el video cuando se cierra el contenedor
});
