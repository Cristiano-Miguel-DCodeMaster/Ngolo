const menu = document.getElementById('menu'),
close = document.getElementById('close'),
menuop = document.getElementById('menuop')

/*showing the menu options*/
menu.addEventListener('click', function () {
    menu.style.display = "none"
    Close.style.display = "block"
    menuop.style.display = "block"
    setTimeout(() => {
        menuop.style.marginLeft = "-32px"
    }, 2000);
})

/*Hiding the menu options*/
Close.addEventListener('click', function () {
    Close.style.display = "none"
    menu.style.display = "block"
    setTimeout(() => {
        menuop.style.marginLeft = "100%"
        menuop.style.transition = "All 1s ease"
    }, 1000);
   setTimeout(() => {
    menuop.style.display = "none"
   }, 1200);
})

function whitemode() {
    const HomeSec = document.getElementById('Home'),
    SobreSec = document.getElementById('Sobre'),
    ContatosSec = document.getElementById('Contatos'),
    menuop = document.getElementById('menuop'),
    darkmode = document.getElementById('darkmode'),
    whitemode = document.getElementById('whitemode'),
    paragraph = document.getElementById('paragraph'),
    home = document.getElementById('H'),
    sobre = document.getElementById('S'),
    contatos = document.getElementById('C')
    width = innerWidth
    
    menuop.style.backgroundColor = " rgba(226, 224, 224, 0.527)"
    HomeSec.style.backgroundColor = "aliceblue"
    SobreSec.style.backgroundColor = "aliceblue"
    ContatosSec.style.backgroundColor = "aliceblue"
    whitemode.style.display = "none"
    darkmode.style.display = "block"
    home.style.color = "black"
    sobre.style.color = "black"
    contatos.style.color = "black"
    paragraph.style.color = "black"
    if (width == 167 || width < 679 ) {
        darkmode.style.marginLeft = "44%"
    }else if (width == 680 || width < 1024 ) {
        darkmode.style.marginLeft = "46%"
    }
}

function darkmode() {
    const HomeSec = document.getElementById('Home'),
    SobreSec = document.getElementById('Sobre'),
    ContatosSec = document.getElementById('Contatos'),
    menuop = document.getElementById('menuop'),
    darkmode = document.getElementById('darkmode'),
    whitemode = document.getElementById('whitemode'),
    paragraph = document.getElementById('paragraph'),
    home = document.getElementById('H'),
    sobre = document.getElementById('S'),
    contatos = document.getElementById('C'),
    width = innerWidth

    menuop.style.backgroundColor = "rgba(0, 0, 0, 0.527)"
    HomeSec.style.backgroundColor = "black"
    SobreSec.style.backgroundColor = "black"
    ContatosSec.style.backgroundColor = "black"
    whitemode.style.display = "block"
    darkmode.style.display = "none"
    home.style.color = "aliceblue"
    sobre.style.color = "aliceblue"
    contatos.style.color = "aliceblue"
    paragraph.style.color = "aliceblue"
    if (width == 167 || width < 679 ) {
    whitemode.style.marginLeft = "44%"
}else if (width == 680 || width < 1024 ) {
    whitemode.style.marginLeft = "47%"
}
}
