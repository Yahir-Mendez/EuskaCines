document.addEventListener("DOMContentLoaded",(()=>{const e=document.createDocumentFragment(),t=document.getElementById("fechasCard");[20,21,22,23,24,25,26,27].forEach((t=>{const d=document.createElement("a");d.addEventListener("click",(()=>{JSON.stringify(localStorage.setItem("Date",t+" Diciembre"))})),d.classList.add("billboard__card-item"),d.classList.add("card-item--itemH"),d.setAttribute("href","#horario");const a=document.createElement("div");a.classList.add("tiket"),a.classList.add("tiket--hora");const n=document.createElement("span");n.classList.add("tiket__info"),n.innerText=t+" Diciembre",a.appendChild(n),d.appendChild(a),e.appendChild(d)})),t.appendChild(e)}));