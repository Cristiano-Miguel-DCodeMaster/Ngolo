const seuicon = document.getElementById('seuicon'),
Estrela = document.getElementById('Estrela'),
Amante = document.getElementById('Amante'),
Anonimo = document.getElementById('Anonimo'),
decepcionado = document.getElementById('decepcionado'),
inputName = document.getElementById('inputName');

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

const paragraph = 
document.getElementById('paragraph1'),
CompleteText = paragraph.textContent,
words = CompleteText.split(''),
wordsToShow = 162,/*220*/
BtnShow = document.getElementById('BtnShow1'),
pbx1 = document.getElementById('pbx1');

paragraph.textContent = 
words.slice(0,wordsToShow).join('');
BtnShow.addEventListener('click',function (){
    paragraph.textContent = CompleteText;
    pbx1.style.display = "none";
    BtnShow.style.display = "none";
});

const paragraph2 = 
document.getElementById('paragraph2'),
CompleteText2 = paragraph2.textContent,
words2 = CompleteText2.split(''),
wordsToShow2 = 180,/*249*/
BtnShow2 = document.getElementById('BtnShow2'),
pbx2 = document.getElementById('pbx2');
paragraph2.textContent = 
words2.slice(0,wordsToShow2).join('');
BtnShow2.addEventListener('click',function (){
    paragraph2.textContent = CompleteText2;
    pbx2.style.display = "none";
    BtnShow2.style.display = "none";
});

const paragraph3 = 
document.getElementById('paragraph3'),
CompleteText3 = paragraph3.textContent,
words3 = CompleteText3.split(''),
wordsToShow3 = 166,/*228*/
BtnShow3 = document.getElementById('BtnShow3'),
pbx3 = document.getElementById('pbx3');
paragraph3.textContent = 
words3.slice(0,wordsToShow3).join('');
BtnShow3.addEventListener('click',function (){
    paragraph3.textContent = CompleteText3;
    pbx3.style.display = "none";
    BtnShow3.style.display = "none";
});

const paragraph4 = 
document.getElementById('paragraph4'),
CompleteText4 = paragraph4.textContent,
words4 = CompleteText4.split(''),
wordsToShow4 = 214,/*301*/
BtnShow4 = document.getElementById('BtnShow4'),
pbx4 = document.getElementById('pbx4');
paragraph4.textContent = 
words4.slice(0,wordsToShow4).join('');
BtnShow4.addEventListener('click',function (){
    paragraph4.textContent = CompleteText4;
    pbx4.style.display = "none";
    BtnShow4.style.display = "none";
});

const paragraph5 = 
document.getElementById('paragraph5'),
CompleteText5 = paragraph5.textContent,
words5 = CompleteText5.split(''),
wordsToShow5 = 169,/*265*/
BtnShow5 = document.getElementById('BtnShow5'),
pbx5 = document.getElementById('pbx5');
paragraph5.textContent = 
words5.slice(0,wordsToShow5).join('');
BtnShow5.addEventListener('click',function (){
    paragraph5.textContent = CompleteText5;
    pbx5.style.display = "none";
    BtnShow5.style.display = "none";
});

const paragraph6 = 
document.getElementById('paragraph6'),
CompleteText6 = paragraph6.textContent,
words6 = CompleteText6.split(''),
wordsToShow6 = 189,/*267*/
BtnShow6 = document.getElementById('BtnShow6'),
pbx6 = document.getElementById('pbx6');
paragraph6.textContent = 
words6.slice(0,wordsToShow6).join('');
BtnShow6.addEventListener('click',function (){
    paragraph6.textContent = CompleteText6;
    pbx6.style.display = "none";
    BtnShow6.style.display = "none";
});

const paragraph7 = 
document.getElementById('paragraph7'),
CompleteText7 = paragraph7.textContent,
words7 = CompleteText7.split(''),
wordsToShow7 = 206,/*275*/
BtnShow7 = document.getElementById('BtnShow7'),
pbx7 = document.getElementById('pbx7');
paragraph7.textContent = 
words7.slice(0,wordsToShow7).join('');
BtnShow7.addEventListener('click',function (){
    paragraph7.textContent = CompleteText7;
    pbx7.style.display = "none";
    BtnShow7.style.display = "none";
});

