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
    lnameInput.classList.contains('is-valid') ? lnameValid = true : lnameValid = false;
});

fnameInput.addEventListener('input', (e) => {
    addCLass(fnameInput, UserRegex, e.target.value, fnameValid);
    fnameInput.classList.contains('is-valid') ? fnameValid = true : fnameValid = false;
});

phoneInput.addEventListener('input', (e) => {
    ;
    let phoneNumber = e.target.value;
    // Supprime les espaces dans le numéro
    phoneNumber = phoneNumber.replace(/ /g, '');
    // Remplace le premier 0 par +33
    phoneNumber = phoneNumber.replace(/^0/, '+33');
    // Execute la fonction addClass
    addCLass(phoneInput, PhoneNumberRegex, phoneNumber, phoneValid);
    phoneInput.classList.contains('is-valid') ? phoneValid = true : phoneValid = false;
})

emailInput.addEventListener('input', (e) => {
    addCLass(emailInput, EmailRegex, e.target.value, emailValid);
    emailInput.classList.contains('is-valid') ? emailValid = true : emailValid = false;
});

subjectInput.addEventListener('input', (e) => {
    addCLass(subjectInput, SubjectRegex, e.target.value, subjectValid);
    subjectInput.classList.contains('is-valid') ? subjectValid = true : subjectValid = false;
});

msgTextArea.addEventListener('input', (e) => {
    addCLass(msgTextArea, MessageRegex, e.target.value, msgValid);
    msgTextArea.classList.contains('is-valid') ? msgValid = true : msgValid = false;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(fnameValid && lnameValid && phoneValid && emailValid && subjectValid && msgValid);

    if (fnameValid && lnameValid && phoneValid && emailValid && subjectValid && msgValid) {
        // Function sendMail
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "maillotjacques13@gmail.com",
            Password : "ABF36EADED0E1127FC735E9DD13AA06EE774",
            To : 'maillotjacques13@gmail.com',
            From : "maillotjacques13@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
})
