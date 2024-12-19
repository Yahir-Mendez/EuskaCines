// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Array de fechas que se utilizarán para crear los elementos
    let dates = [20, 21, 22, 23, 24, 25, 26, 27];

    // Crea un fragmento de documento para evitar múltiples repintados del DOM
    const fragment = document.createDocumentFragment();
    // Selecciona el contenedor donde se insertarán las tarjetas de fechas
    const container = document.getElementById("fechasCard");

    // Itera sobre cada fecha en el array 'dates'
    dates.forEach(date => {
        // Crea un enlace para cada fecha
        const link = document.createElement('a');
        // Añade un evento 'click' que guarda la fecha seleccionada en el localStorage
        link.addEventListener('click', () => {
            JSON.stringify(localStorage.setItem('Date', date + " " + "Diciembre"));
        });
        // Añade clases CSS para aplicar estilos al enlace
        link.classList.add("billboard__card-item");
        link.classList.add("card-item--itemH");
        // Establece el atributo 'href' para el enlace
        link.setAttribute("href", "#horario");

        // Crea un contenedor 'div' para la información de la fecha
        const dateContainer = document.createElement('div');
        // Añade clases CSS para aplicar estilos al contenedor
        dateContainer.classList.add("tiket");
        dateContainer.classList.add("tiket--hora");

        // Crea un elemento 'span' para mostrar la fecha
        const text = document.createElement('span');
        // Añade una clase CSS para aplicar estilos al texto
        text.classList.add("tiket__info");
        // Establece el texto del 'span' con la fecha y el mes
        text.innerText = date + " " + "Diciembre";

        // Ensambla la estructura del enlace: añade el 'span' al contenedor y el contenedor al enlace
        dateContainer.appendChild(text);
        link.appendChild(dateContainer);
        // Añade el enlace completo al fragmento
        fragment.appendChild(link);
    });

    // Inserta el fragmento completo en el contenedor principal del DOM
    container.appendChild(fragment);
});