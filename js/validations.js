const form = document.querySelector('form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const phoneInput = document.querySelector('input[type=tel]');
const emailInput = document.querySelector('input[type=email]');
const subjectInput = document.querySelector('#subject');
const msgTextArea = document.querySelector('#message');

let fnameValid = false;
let lnameValid = false;
let phoneValid = false;
let emailValid = false;
let subjectValid = false;
let msgValid = false;

let fnameValue = "";
let lnameValue = "";
let phoneValue = "";
let emailValue = "";
let subjectValue = "";
let msgValue = "";

// Regex
const UserRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/u;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/;
const SubjectRegex = /^[^<>{}$]{3,200}$/;
const MessageRegex = /^[^<>{}$]{24,}$/;

// Fonction addClass ajoute ou supprime is-valid ou is-invalid
function addCLass(element, regex, value, valid) {
    if (regex.test(value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        valid = true;
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        valid = false;
    }
}

// Execute la fonction addClass(element, regex, value)
lnameInput.addEventListener('input', (e) => {
    addCLass(lnameInput, UserRegex, e.target.value, lnameValid);
    if (lnameInput.classList.contains('is-valid')){
        lnameValid = true;
        lnameValue = e.target.value;
    } else{
        lnameValid = false;
        lnameValue = "";
    } 
});

fnameInput.addEventListener('input', (e) => {
    addCLass(fnameInput, UserRegex, e.target.value, fnameValid);
    if (fnameInput.classList.contains('is-valid')){
        fnameValid = true;
        fnameValue = e.target.value;
    } else {
        fnameValid = false;
        fnameValue = "";
    } 
});

phoneInput.addEventListener('input', (e) => {
    let phoneNumber = e.target.value;
    // Supprime les espaces dans le numéro
    phoneNumber = phoneNumber.replace(/ /g, '');
    // Remplace le premier 0 par +33
    phoneNumber = phoneNumber.replace(/^0/, '+33');
    // Execute la fonction addClass
    addCLass(phoneInput, PhoneNumberRegex, phoneNumber, phoneValid);
    if (phoneInput.classList.contains('is-valid')) {
        phoneValid = true;
        phoneValue = e.target.value;
    } else {
        phoneValid = false;
        phoneValid = "";    
    }
})

emailInput.addEventListener('input', (e) => {
    addCLass(emailInput, EmailRegex, e.target.value, emailValid);
    if (emailInput.classList.contains('is-valid')) {
        emailValid = true;
        emailValue = e.target.value;
    } else {
        emailValid = false;
        emailValue = "";
    }
});

subjectInput.addEventListener('input', (e) => {
    addCLass(subjectInput, SubjectRegex, e.target.value, subjectValid);
    if (subjectInput.classList.contains('is-valid')) {
        subjectValid = true;
        subjectValue = e.target.value;
    } else {
        subjectValid = false;
        subjectValue = "";
    } 
});

msgTextArea.addEventListener('input', (e) => {
    addCLass(msgTextArea, MessageRegex, e.target.value, msgValid);
    if (msgTextArea.classList.contains('is-valid')) {
        msgValid = true;
        msgValue = e.target.value;
    } else {
        msgValid = false;
        msgValue = "";
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (fnameValid && lnameValid && phoneValid && emailValid && subjectValid && msgValid) {
        // Function sendMail
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "maillotjacques13@gmail.com",
            Password : "ABF36EADED0E1127FC735E9DD13AA06EE774",
            To : "hilltractors@yopmail.com",
            From : emailValue,
            Subject : subjectValue,
            Body : `Prénom : ${fnameValue} <br>
                    Nom : ${lnameValue} <br>
                    Téléphone : ${phoneValue}<br>
                    Message : ${msgValue}`
        }).then(message => message == 'OK' && location.reload()); // Si Formulaire valide, recharge la page
    }
})
