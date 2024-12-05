class HeaderComponent extends HTMLElement {
    constructor(){
        super();

        const template = document.createElement('template');
        template.innerHTML = `
            <header class="header">
                <!-- Navbar -->
                <nav class="navbar" id="activeNav">
                    <div class="navbar__tools">
                        <!-- buscador -->
                        <div class="navbar__search">
                            <div class="search__icon"><img src="/src/public/iconos/search-min.svg" alt="icono de buscador" class="search__icon-img"></img></div>
                            <input class="search__input" type="text" placeholder="Buscar">
                        </div>
                        <!-- menu -->
                        <div class="navbar__menu-icon" id="#disableNav"><a href="#diableNav"><img src="/src/public/iconos/Menu-min.svg" alt="icono de menu" class="navbar__menu-icon"></a></div>
                    </div>
                    <!-- Opciones -->
                    <ul class="navbar__menu">
                        <li class="navbar__menu-item"><a href="index.html" class="navbar__link">Inicio</a></li>
                        <li class="navbar__menu-item"><a href="cines.html" class="navbar__link">Cines</a></li>
                        <li class="navbar__menu-item"><a href="contacto.html" class="navbar__link">Contacto</a></li>
                    </ul>
                </nav>
                <!-- Icono Menu -->
                <div class="header__menu-icon"><a href="#activeNav"><img src="/src/public/iconos/Menu-min.svg" alt="icono de menu" class="header__img"></a></div>
                <!-- Logo -->
                <div class="header__logo"><a href="index.html"><img src="/src/public/iconos/logo.png" alt="logo" class="header__img"></a></div>

                <!-- nav pc -->
                <ul class="navbar__menuPC">
                    <li class="navbar__item"><a class="navbar__item-link" href="index.html">Inicio</a></li>
                    <li class="navbar__item"><a class="navbar__item-link" href="cines.html">Cines</a></li>
                    <li class="navbar__item"><a class="navbar__item-link" href="contacto.html">Contacto</a></li>
                </ul>

                <!-- QR -->
                <div class="header__qr"><a href="promos.html"><img src="/src/public/iconos/QR-min.svg" alt="icono de QR" class="header__img"></a></div>
            </header>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
   
}
customElements.define('header-component',HeaderComponent);