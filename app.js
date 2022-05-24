const botonAgregar = document.getElementById("botonAgregar");
const containerBotones = document.querySelector("#containerBotones");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const body = document.querySelector("#body");

let bandera = 0;

botonAgregar.addEventListener("click", () => {

    if(bandera === 1){
        console.log("Ya agergaste los botones");
        return;
    }

    console.log("Agregaste los botones");
    
    const clone = template.content.firstElementChild.cloneNode(true);
    
    fragment.appendChild(clone);
    
    containerBotones.appendChild(fragment);
    
    const botonColor = document.getElementById("botones");

    const boton = document.querySelector("#boton");
    
    botonColor.addEventListener("click", (e) => {

        const color = e.target.classList[1];

        if(color === "btn-primary"){
            body.className = "btn-primary";
        }else if(color === "btn-secondary"){
            body.className = "btn-secondary";
        }else if(color === "btn-success"){
            body.className = "btn-success";
        }else if(color === "btn-danger"){
            body.className = "btn-danger";
        }else if(color === "btn-warning"){
            body.className = "btn-warning";
        }else if(color === "btn-info"){
            body.className = "btn-info";
        }
    });

    bandera++;
    
});





