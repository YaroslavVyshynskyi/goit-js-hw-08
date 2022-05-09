var throttle = require('lodash.throttle');
const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector(".feedback-form input");
const textareaInput = document.querySelector(".feedback-form textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";
const objKeysFields = {};

updateInputs();

form.addEventListener("input", throttle(saveLocalValues, 500));
form.addEventListener("submit", onSubmit);


function saveLocalValues(evt) { 
    evt.preventDefault();
    
    objKeysFields.email = emailInput.value;
    objKeysFields.message = textareaInput.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objKeysFields));
};

function onSubmit(evt) { 
    evt.preventDefault();

    const input = getLocalStorageItem(LOCALSTORAGE_KEY);

    console.log(input);
    updateInputs();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
};

function updateInputs() {
    const input = getLocalStorageItem(LOCALSTORAGE_KEY);

    const { email = "", message = ""} = input || {};
    emailInput.value = email;
    textareaInput.value = message;
};

function getLocalStorageItem(key) {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};
