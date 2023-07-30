// le js de la page index.html

let popup = document.querySelector('#popup')
let usernameInput = document.querySelector('#name')
let creation = document.querySelector('#creation')
let connect = document.querySelector('#connect')

function openpopup() {
    popup.classList.add("open-popup");
}

function closepopup(event) {
    event.preventDefault()
    popup.classList.remove("open-popup")
    creation.style.display="none"
    let username= usernameInput.value
    connect.innerHTML="welcome "+ username
}

let popupp = document.querySelector('#popupp');

function openpopupp(event) {
    event.preventDefault();
    popupp.classList.add("open-popupp");
}

function closepopupp() {
    popupp.classList.remove("open-popupp");
}


let poopup = document.querySelector('#poopup');

function openpoopup(event) {
    event.preventDefault();
    poopup.classList.add("open-poopup");
}

function closepoopup() {
    poopup.classList.remove("open-poopup");
}


let ppopup = document.getElementById('ppopup');

function openppopup(event) {
    event.preventDefault();
    ppopup.classList.add("open-ppopup");
}

function closeppopup() {
    ppopup.classList.remove("open-ppopup");
}


let btn= document.querySelector("#more")
let page8 = document.querySelector("#page8")

btn.addEventListener("click" , function(){
    if (page8.style.display === "block"){
        page8.style.display = "none"
    }else{
        page8.style.display = "block"
        btn.style.display="none"
    }
})


