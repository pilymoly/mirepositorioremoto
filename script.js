function showAlert() { 
    alert("hola esto es una alerta de javascript");
}

const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    alert("haz hecho click en el boton");
});

