const form = document.querySelector('form');
const emailInput = document.querySelector('input[type=email]');
const phoneInput = document.querySelector('input[type=tel]');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');

const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;
const NameRegex = /^[a-z ,.'-]+$/i;

phoneInput.addEventListener('input', (e)=>{
    if (PhoneNumberRegex.test(phoneInput.value)) {
        phoneInput.classList.add('is-valid');
        phoneInput.classList.remove('is-invalid');
    } else {
        phoneInput.classList.add('is-invalid');
        phoneInput.classList.remove('is-valid');
    }
})

emailInput.addEventListener('input', (e)=>{
    if (EmailRegex.test(emailInput.value)) {
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
    } else {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
    }
})

