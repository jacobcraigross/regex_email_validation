// pull in all DOM elements 1st
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_two = document.getElementById('password_two');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(username.value === '') {
        showError(username, 'username you must!');
    } else {
        showSuccess(username);
    }
    
    if(email.value === '') {
        showError(email, 'email you must!');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'email not valid fugger!');
    } else {
        showSuccess(email);
    }
    
    if(password.value === '') {
        showError(password, 'password you must!');
    } else {
        showSuccess(password);
    }
    
    if(password_two.value === '') {
        showError(password_two, 'password you must!');
    } else {
        showSuccess(password_two);
    }
});
