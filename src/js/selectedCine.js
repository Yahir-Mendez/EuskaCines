import { connectedCines } from "./connected.js";

export default function activeCine(){
    const cines = document.getElementsByClassName("cines__container-item");

    Array.from(cines).forEach(cine =>{
        cine.addEventListener('click', async function(){
            Array.from(cine).forEach(item =>{
                item.classList.remove("selected")
            });
            this.classList.add("selected");
            const cineId = this.getAttribute("id");
            const Data = await cinesDatos(cineId);
        localStorage.setItem('cine', JSON.stringify(Data));                                                                                                         
        });                                                                                                               
    });
}

const cinesDatos = async (keyCine) => {
    const data = await connectedCines();
    let DataCines = null;
    for(let key in data){
        if(key === keyCine){
            DataCines = data[key];
            break;
        }
    }
    return DataCines;
}