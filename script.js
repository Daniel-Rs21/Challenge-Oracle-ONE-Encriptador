
document.getElementById("resultado").style.display = "none";
document.getElementById("copiar").style.display = "none";

var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var copiar = document.getElementById("copiar");
var borrar = document.getElementById("borrar");
var texto = document.getElementById("mensaje");
var resultado = document.getElementById("resultado");

borrar.style.display = "none";

function mostrar() {
        borrar.style.display = "block";
}

function ocultar() {
        borrar.style.display = "none";
}


encriptar.onclick = encriptacion;
desencriptar.onclick = desencriptacion;
copiar.onclick = copiarTexto;
borrar.onclick = borrando
  
function borrando(){
  texto.value = "";
  borrar.style.display = "none";
  texto.focus();
}

function encriptacion() {
    
    var mensaje = texto.value;

    if(mensaje == "") {
        Swal.fire('No se puede encriptar un mensaje vacío')
    }
    else {  
        var patron = /[A-Z]|á|é|í|ó|ú/g;
        comprobacion = mensaje.match(patron);

        if (comprobacion == null) {
            document.getElementById("muneco").style.display = "none";
            document.getElementById("instruccion").style.display = "none";
            document.getElementById("resultado").style.display = "block";
            document.getElementById("copiar").style.display = "block";

            var mapObj = {e:"enter", i:"imes", a:"ai", o:"ober", u:"ufat"};
            var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
            mensaje = mensaje.replace(re, function(matched){return mapObj[matched];});

            resultado.value = mensaje;
        }
        else {
            Swal.fire("No se puede encriptar letras mayúsculas ni acentos");
        }
    }
}

function desencriptacion() {

    var mensaje = texto.value;

    if (mensaje == "") {
        Swal.fire('No se puede desencriptar un mensaje vacío')
    }
    else {
        var patron = /[A-Z]|á|é|í|ó|ú/g;
        comprobacion = mensaje.match(patron);

        if (comprobacion == null) {
            document.getElementById("muneco").style.display = "none";
            document.getElementById("instruccion").style.display = "none";
            document.getElementById("resultado").style.display = "block";
            document.getElementById("copiar").style.display = "block";

            var mapObj = {enter:"e", imes:"i", ai:"a", ober:"o", ufat:"u"};
            var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
            mensaje = mensaje.replace(re, function(matched){return mapObj[matched];});

            resultado.value = mensaje;
        }
        else {
            Swal.fire("No se puede encriptar letras mayúsculas ni acentos");
        }
    }
}

function copiarTexto() {
    portapapeles = document.getElementById("resultado").value;
    navigator.clipboard.writeText(portapapeles)
}