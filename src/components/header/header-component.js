// Se define la clase HeaderComponent que extiende HTMLElement, lo que permite crear un Web Component
class HeaderComponent extends HTMLElement {
    constructor() {
        super(); // Llama al constructor de HTMLElement para inicializar la funcionalidad base del componente

        // Crea un nodo 'template' que almacenará el HTML interno del componente
        const template = document.createElement('template');

        // Define la estructura HTML del componente dentro del template
        template.innerHTML = `
            <header class="header">
                <!-- Navbar principal -->
                <nav class="navbar" id="activeNav">
                    <div class="navbar__tools">
                        <!-- Buscador -->
                        <div class="navbar__search">
                            <div class="search__icon">
                                <img src="/src/public/iconos/search-min.svg" alt="icono de buscador" class="search__icon-img">
                            </div>
                            <input class="search__input" type="text" placeholder="Buscar">
                        </div>
                        <!-- Menú para dispositivos pequeños -->
                        <div class="navbar__menu-icon" id="#disableNav">
                            <a href="#diableNav">
                                <img src="/src/public/iconos/Menu-min.svg" alt="icono de menu" class="navbar__menu-icon">
                            </a>
                        </div>
                    </div>

                    <!-- Opciones de navegación -->
                    <ul class="navbar__menu">
                        <li class="navbar__menu-item">
                            <a href="/index.html" class="navbar__link">Inicio</a>
                        </li>
                        <li class="navbar__menu-item">
                            <a href="/cines.html" class="navbar__link">Cines</a>
                        </li>
                        <li class="navbar__menu-item">
                            <a href="/contacto.html" class="navbar__link">Contacto</a>
                        </li>
                    </ul>
                </nav>

                <!-- Ícono del menú para activar navegación -->
                <div class="header__menu-icon">
                    <a href="#activeNav">
                        <img src="/src/public/iconos/Menu-min.svg" alt="icono de menu" class="header__img">
                    </a>
                </div>

                <!-- Logo principal -->
                <div class="header__logo">
                    <a href="/index.html">
                        <img src="/src/public/iconos/logo.png" alt="logo" class="header__img">
                    </a>
                </div>

                <!-- Menú de navegación para pantallas grandes -->
                <ul class="navbar__menuPC">
                    <li class="navbar__item">
                        <a class="navbar__item-link" href="/index.html">Inicio</a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__item-link" href="/cines.html">Cines</a>
                    </li>
                    <li class="navbar__item">
                        <a class="navbar__item-link" href="/contacto.html">Contacto</a>
                    </li>
                </ul>

                <!-- Enlace promo -->
                <div class="header__qr">
                    <a href="/promociones.html">
                        <img src="/src/public/iconos/promocion.png" alt="icono de promocion" class="header__img">
                    </a>
                </div>
            </header>
        `;

        // Clona el contenido del template y lo inserta en el componente
        this.appendChild(template.content.cloneNode(true));
    }
}

// Se registra el Web Component con la etiqueta 'header-component' y se asocia a la clase HeaderComponent
customElements.define('header-component', HeaderComponent);
