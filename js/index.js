const seuicon = document.getElementById('seuicon'),
Estrela = document.getElementById('Estrela'),
Amante = document.getElementById('Amante'),
Anonimo = document.getElementById('Anonimo'),
decepcionado = document.getElementById('decepcionado'),
inputName = document.getElementById('inputName'),
inputLname = document.getElementById('inputLname');


Estrela.onclick = function () {
    seuicon.src = Estrela.src;
    inputName.style.opacity = "1"; 
    inputLname.style.opacity = "1";
}

Amante.onclick = function () {
    seuicon.src = Amante.src;
    inputName.style.opacity = "1"; 
    inputLname.style.opacity = "1";
}

Anonimo.onclick = function () {
    seuicon.src = Anonimo.src;
    inputName.style.opacity = "0"; 
    inputLname.style.opacity = "0"; 
}

decepcionado.onclick = function () {
    seuicon.src = decepcionado.src;
    inputName.style.opacity = "1"; 
    inputLname.style.opacity = "1";
}
