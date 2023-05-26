
document.getElementById("resultado").style.display = "none";
document.getElementById("copiar").style.display = "none";

var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var copiar = document.getElementById("copiar");

encriptar.onclick = encriptacion;
desencriptar.onclick = desencriptacion;
copiar.onclick = copiarTexto;

var resultado = document.getElementById("resultado");

function encriptacion() {
    
    var texto = document.getElementById("mensaje").value;

    var patron = /[A-Z]|á|é|í|ó|ú/g;
    comprobacion = texto.match(patron);

    if (comprobacion == null) {
        document.getElementById("muneco").style.display = "none";
        document.getElementById("instruccion").style.display = "none";
        document.getElementById("resultado").style.display = "block";
        document.getElementById("copiar").style.display = "block";

        var mapObj = {e:"enter", i:"imes", a:"ai", o:"ober", u:"ufat"};
        var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
        texto = texto.replace(re, function(matched){return mapObj[matched];});

        resultado.value = texto;
    }
    else {
        window.alert("No se puede encriptar letras mayúsculas ni acentos");
    }
    
}

function desencriptacion() {

    var texto = document.getElementById("mensaje").value;

    var patron = /[A-Z]|á|é|í|ó|ú/g;
    comprobacion = texto.match(patron);

    if (comprobacion == null) {
        document.getElementById("muneco").style.display = "none";
        document.getElementById("instruccion").style.display = "none";
        document.getElementById("resultado").style.display = "block";
        document.getElementById("copiar").style.display = "block";

        var mapObj = {enter:"e", imes:"i", ai:"a", ober:"o", ufat:"u"};
        var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
        texto = texto.replace(re, function(matched){return mapObj[matched];});

        resultado.value = texto;
    }
    else {
        window.alert("No se puede encriptar letras mayúsculas ni acentos");
    }
    
}

function copiarTexto() {
    portapapeles = document.getElementById("resultado").value;
    navigator.clipboard.writeText(portapapeles)
}