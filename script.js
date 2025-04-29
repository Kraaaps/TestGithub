


function tituloPrincipal() {    
const titulo = document.querySelector("#miTitulo");
titulo.textContent = "Título cambiado con JavaScript";
titulo.style.color = "red";
}



function tituloSecundario() {
const nuevoTitulo = document.createElement("h2")
nuevoTitulo.textContent = "Hola soy el nuevo titulo"
nuevoTitulo.classList.add("titulo-creado")
document.body.appendChild(nuevoTitulo);
}


function crearImg(){
const img = document.createElement("img")
img.src = "img/Mariposas.png"
img.classList.add("img")
document.body.appendChild(img)
}



function crearBotones(){

const boton = document.createElement("button");
boton.classList.add("btn")
boton.style.backgroundColor = "red";
boton.textContent = "¡Haz clic si quieres rojo!";

document.body.appendChild(boton);

boton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});


const boton2 = document.createElement("button2");
boton2.classList.add("btn")
boton2.style.backgroundColor = "green";
boton2.textContent = "¡Haz clic si quieres rojo!";

document.body.appendChild(boton2);

boton2.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});

const btnReturn = document.querySelector(".btn-return");

btnReturn.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});
}


tituloPrincipal();
tituloSecundario();
crearImg();
crearBotones();


