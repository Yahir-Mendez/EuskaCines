// Se define la clase FooterComponent que extiende HTMLElement, lo que permite crear un Web Component
class FooterComponent extends HTMLElement { 
    constructor(){ 
        super(); // Llama al constructor de HTMLElement para asegurarse de que los métodos de la clase base se inicialicen correctamente

        // Crea un nodo de tipo 'template', que almacenará el HTML que se usará en el componente
        const template = document.createElement('template'); 
        
        // Se inserta el HTML dentro del template
        template.innerHTML = ` 
            <article class="footer__policies">
                <div class="footer__policy-links">
                    <p class="policy-links__items"><a href="#" class="policy-links__items-link">Políticas de privacidad</a></p>
                    <p class="policy-links__items"><a href="#" class="policy-links__items-link">Aviso legal</a></p>
                    <p class="policy-links__items"><a href="#" class="policy-links__items-link">Politicas de cookies</a></p>
                </div>
                <div class="footer__social-media">
                    <div class="social-media__icon"><a href="#" class="social-media__icon-link"><img src="/src/public/iconos/instagram-min.svg" alt="icono de instagram" class="social-media__icon-img"></a></div>
                    <div class="social-media__icon"><a href="#" class="social-media__icon-link"><img src="/src/public/iconos/facebook-min.svg" alt="icono de facebook" class="social-media__icon-img"></a></div>
                    <div class="social-media__icon"><a href="#" class="social-media__icon-link"><img src="/src/public/iconos/youtube-min.svg" alt="icono de youtube" class="social-media__icon-img"></a></div>
                </div>
            </article>
            <section class="footer__common">
                <div class="common__image"><a href="https://creativecommons.org/licenses/by/4.0/legalcode.en"><img src="/src/public/footer/com.png" alt="common icon" class="common__image-img"></a></div>   
                <!-- Decorativo -->
                <div class="common__rectangle common__rectangle--one"></div>
                <div class="common__rectangle common__rectangle--two"></div>
            </section>
        `;
        
        // Se clona el contenido del template y se lo inserta en el componente
        this.appendChild(template.content.cloneNode(true)); 
    }
}

// Se define el nombre de la etiqueta personalizada ('footer-component') y se asocia a la clase FooterComponent
customElements.define('footer-component', FooterComponent);
