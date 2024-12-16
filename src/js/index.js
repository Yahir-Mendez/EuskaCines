// Verifica si la URL actual incluye "/index.html" o "/contacto.html"
if ((window.location.href.includes("/index.html")) || (window.location.href.includes("/contacto.html"))) {
    // Si la URL coincide, limpia el localStorage
    localStorage.clear();
}