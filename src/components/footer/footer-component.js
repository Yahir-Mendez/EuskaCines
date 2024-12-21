// Se define la clase FooterComponent que extiende HTMLElement, lo que permite crear un Web Component
class FooterComponent extends HTMLElement { 
    constructor() { 
        super(); // Llama al constructor de HTMLElement para inicializar correctamente la funcionalidad base del elemento

        // Crea un nodo 'template' para definir el HTML interno del componente
        const template = document.createElement('template'); 
        
        // Define la estructura HTML dentro del template
        template.innerHTML = ` 
            <!-- Sección de políticas -->
            <article class="footer__policies">
                <div class="footer__policy-links">
                    <p class="policy-links__items">
                        <a href="https://www.aepd.es/" target="_blank" class="policy-links__items-link">Políticas de privacidad</a>
                    </p>
                    <p class="policy-links__items">
                        <a href="https://datos.gob.es/" target="_blank" class="policy-links__items-link">Aviso legal</a>
                    </p>
                    <p class="policy-links__items">
                        <a href="https://cookies.com/" target="_blank" class="policy-links__items-link">Políticas de cookies</a>
                    </p>
                </div>

                <!-- Sección de redes sociales -->
                <div class="footer__social-media">
                    <div class="social-media__icon">
                        <a href="https://instagram.com/" target="_blank" class="social-media__icon-link">
                            <img src="/src/public/iconos/instagram-min.svg" width="30" height="auto" alt="icono de instagram" class="social-media__icon-img">
                        </a>
                    </div>
                    <div class="social-media__icon">
                        <a href="https://facebook.com/" target="_blank" class="social-media__icon-link">
                            <img src="/src/public/iconos/facebook-min.svg" width="30" height="auto" alt="icono de facebook" class="social-media__icon-img">
                        </a>
                    </div>
                    <div class="social-media__icon">
                        <a href="https://youtube.com/" target="_blank" class="social-media__icon-link">
                            <img src="/src/public/iconos/youtube-min.svg" width="30" height="auto" alt="icono de youtube" class="social-media__icon-img">
                        </a>
                    </div>
                </div>
            </article>

            <!-- Sección adicional del footer -->
            <section class="footer__common">
                <!-- Imagen de licencia creative commons -->
                <div class="common__image">
                    <a href="https://creativecommons.org/licenses/by/4.0/legalcode.en" target="_blank"> 
                        <img src="/src/public/footer/com.webp" width="30" height="auto" alt="common icon" class="common__image-img">
                    </a>
                </div>   
                <!-- Rectángulos decorativos -->
                <div class="common__rectangle common__rectangle--one"></div>
                <div class="common__rectangle common__rectangle--two"></div>
            </section>
        `;
        
        // Clona el contenido del template y lo inserta en el DOM del componente
        this.appendChild(template.content.cloneNode(true)); 
    }
}

// Registra el Web Component con la etiqueta 'footer-component' en el navegador
customElements.define('footer-component', FooterComponent);
