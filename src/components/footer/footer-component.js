class FooterComponet extends HTMLElement{
    constructor(){
        super();

        const template = document.createElement('template');
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
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('footer-component', FooterComponet);