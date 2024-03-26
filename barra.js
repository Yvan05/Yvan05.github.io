/* global skills */

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 50) {
    //document.getElementById("html").classList.add("barra-progreso1");
//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades(); };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
   var skills = document.getElementById("skills");
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("php").classList.add("barra-progreso4");
        document.getElementById("css").classList.add("barra-progreso5");
        document.getElementById("bts").classList.add("barra-progreso6");
        document.getElementById("java").classList.add("barra-progreso7");
        document.getElementById("csharp").classList.add("barra-progreso8");
        
    }

}
