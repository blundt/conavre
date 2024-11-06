/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

/* Header Styles */
header {
    background: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

header img.logo {
    height: 60px;
    margin-left: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

nav ul li {
    margin-right: 10px;
}

nav ul li a {
    color: #fff; /* Asegura que el texto del menú sea blanco */
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}

/* Estilos para el botón de menú */
.menu-toggle {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: #fff; /* Cambia el color del ícono de la hamburguesa a blanco */
}

/* Media Query para Pantallas Pequeñas */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    #main-nav ul {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: #333; /* Fondo oscuro para el menú desplegable */
    }
    
    #main-nav ul.show {
        display: flex;
    }

    #main-nav ul li {
        margin: 10px 0;
    }

    #main-nav ul li a {
        color: #fff; /* Asegura que el texto sea blanco en el menú desplegable */
    }
}

/* Services Section Styles */
#services {
    background: #fff;
    padding: 40px 20px;
    text-align: center;
}

#services h2 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
}

.service-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.service {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background: #fff;
}

.gallery-item {
    position: relative;
}

.gallery-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.gallery-item button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.gallery-item .prev {
    left: 10px;
}

.gallery-item .next {
    right: 10px;
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
    .service-list {
        grid-template-columns: 1fr; /* Cambia a una columna en pantallas más pequeñas */
    }
}
