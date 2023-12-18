const navbarToggler = document.querySelector('.navbar-toggler');
const btnClose = document.querySelector('.btn-close');
const offcanvas = document.querySelector('.offcanvas');

// Déclaration menu & newDiv pour l'injection de la div offcanvas-backdrop
const menu = document.querySelector('.navbar .container-fluid');
const newDiv = document.createElement('div');

// Création d'une constante addElement avec une fonction fléchée qui injecte une div pour le backdrop
const addElement = ()=>{
    // Attribue les class à la div newDiv
    newDiv.setAttribute('class', 'offcanvas-backdrop fade show');
    // Créer la newDiv comme enfant du container fluid de la navbar
    menu.appendChild(newDiv);
}

// Lorsqu'on clique sur .navbar-toggler
navbarToggler.addEventListener('click', ()=>{
    // Ajoute la class show à .offcanvas
    offcanvas.classList.add('show');
    // Ajoute la newDiv
    addElement();
})

// Lorsqu'on clique sur le bouton .btn-close
btnClose.addEventListener('click', ()=>{
    // Supprime la class show de .offcanvas
    offcanvas.classList.remove('show');
    // Supprime la div newDiv
    newDiv.remove();
})
