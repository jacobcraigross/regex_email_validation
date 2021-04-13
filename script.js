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

function checkPassMatch(pass_one, pass_two) {
    if(pass_one.value !== pass_two.value) {
        showError(pass_two, 'Passwords do not match.')
    }
}

function checkEmail(inputItem) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(inputItem.value.trim())) {
        showSuccess(inputItem);
    } else {
        showError(inputItem, 'Email is not valid.');
    }
}

function checkReq(inputArray) {
    inputArray.forEach(function(inputItem) {
        if(inputItem.value.trim() === '') {
            showError(inputItem, `${getFieldName(inputItem)} is required`);
        } else {
            showSuccess(inputItem);
        }
    });
}

function getFieldName(inputItem) {
    return inputItem.id.charAt(0).toUpperCase() + inputItem.id.slice(1);
}

function checkLen(inputItem, min, max) {
    if(inputItem.value.length < min) {
        showError(inputItem, `${getFieldName(inputItem)} must be at least ${min} characters.`);
    } else if(inputItem.value.length > max) {
        showError(inputItem, `${getFieldName(inputItem)} cannot be more than ${max} characters.`);
    } else {
        showSuccess(inputItem);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkReq([username, email, password, confirm_password]);
    checkLen(username, 6, 15);
    checkLen(password, 8, 25);
    checkEmail(email);
    checkPassMatch(password, confirm_password);
});
