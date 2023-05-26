var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");

encriptar.onclick = encriptacion;

document.getElementById("resultado").style.display = "none";
document.getElementById("copiar").style.display = "none";

function encriptacion() {
    document.getElementById("muneco").style.display = "none";
    document.getElementById("instruccion").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("copiar").style.display = "block";

    var texto = document.getElementById("mensaje").value;

    var resultado = document.getElementById("resultado");

    var tamanoDeTexto = texto.length;

    for (var i = 0; i < tamanoDeTexto; i++) {
        if (texto[i] == "e") {
            texto = texto.substring(0, i) + "enter" + texto.substring(i + 1, tamanoDeTexto);
            tamanoDeTexto = texto.length;
            i += 4;
        }
        else if (texto[i] == "i") {
            texto = texto.substring(0, i) + "imes" + texto.substring(i + 1, tamanoDeTexto); 
            tamanoDeTexto = texto.length;
            i += 3;
        }
        else if (texto[i] == "a") {
            texto = texto.substring(0, i) + "ai" + texto.substring(i + 1, tamanoDeTexto);
            tamanoDeTexto = texto.length;
            i += 1;
        }
        else if (texto[i] == "o") {
            texto = texto.substring(0, i) + "ober" + texto.substring(i + 1, tamanoDeTexto);  
            tamanoDeTexto = texto.length;
            i += 3;
        }
        else if (texto[i] == "u") {
            texto = texto.substring(0, i) + "ufat" + texto.substring(i + 1, tamanoDeTexto);
            tamanoDeTexto = texto.length;
            i += 3;
        }

    }

    resultado.value = texto;
}