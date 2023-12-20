const form = document.querySelector('form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const phoneInput = document.querySelector('input[type=tel]');
const emailInput = document.querySelector('input[type=email]');
const subjectInput = document.querySelector('#subject');
const msgTextArea = document.querySelector('#message');

// Regex
const UserRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/u;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/;
const SubjectRegex = /^[^<>{}$]{3,200}$/;
const MessageRegex = /^[^<>{}$]{24,}$/;

// Fonction addClass ajoute ou supprime is-valid ou is-invalid
function addCLass(element, regex, value) {
    if (regex.test(value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    }
}

// Execute la fonction addClass(element, regex, value)
lnameInput.addEventListener('input', (e) => { addCLass(lnameInput, UserRegex, e.target.value) });
fnameInput.addEventListener('input', (e) => { addCLass(fnameInput, UserRegex, e.target.value) });

phoneInput.addEventListener('input', (e) => {
    let phoneNumber = e.target.value;
    // Supprime les espaces dans le numéro
    phoneNumber = phoneNumber.replace(/ /g, '');
    // Remplace le premier 0 par +33
    phoneNumber = phoneNumber.replace(/^0/, '+33');
    // Execute la fonction addClass
    addCLass(phoneInput, PhoneNumberRegex, phoneNumber);
})

emailInput.addEventListener('input', (e) => { addCLass(emailInput, EmailRegex, e.target.value) });
subjectInput.addEventListener('input', (e) => { addCLass(subjectInput, SubjectRegex, e.target.value) });
msgTextArea.addEventListener('input', (e) => { addCLass(msgTextArea, MessageRegex, e.target.value) });

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
