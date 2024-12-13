const Data = JSON.parse(localStorage.getItem("cine"));

document.addEventListener('DOMContentLoaded',()=>{
    cineInfo();
})
const cineInfo = () => {
    descripcionCine(Data.cine,Data.descripcion,Data.contacto);
    horarios(Data.salas); 
}

const descripcionCine = (tit,des,cont) =>{
    const title = document.getElementById("cineTitle");
    title.innerText = tit.toUpperCase();
    const description = document.getElementById("cineParrafo");
    description.innerText = des;
    const contacto = document.getElementById("cineContact");
    contacto.innerText = cont.toUpperCase();
}

const horarios = (salas) =>{
    const fragment = document.createDocumentFragment();

    const container = document.getElementById("horariosGrid");

    salas.forEach(sala => {
        let s = sala.sala;
        let hour = sala.horarios;
        let h =  filterPelis(hour);
        if(h!=null){
            const boxContainer = document.createElement('div');
            boxContainer.classList.add("billboard__card-item");
            const link = document.createElement('a');
            link.setAttribute("href","#");
            const boxCard =  document.createElement('div');
            boxCard.classList.add("tiket");
            const span = document.createElement('span');
            span.classList.add("tiket__info");
            span.innerHTML = `Sala ${s} <br/> ${h.hora}`;
            boxCard.appendChild(span);
            link.appendChild(boxCard);
            boxContainer.appendChild(link);
            fragment.appendChild(boxContainer);
        }

    });
    container.appendChild(fragment);
}

const filterPelis = (horarios) =>{
    const selectedPeli = localStorage.getItem("idmovie") || null;
    let resultado = null;
    horarios.some(item => {
        if(item.pelicula_id==selectedPeli){
            resultado = item;
            return true;   
            
        }
        return false;
    });
    return resultado;
}



