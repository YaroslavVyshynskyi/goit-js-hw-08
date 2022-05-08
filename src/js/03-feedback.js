var throttle = require('lodash.throttle');
const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector(".feedback-form input");
const textareaInput = document.querySelector(".feedback-form textarea");
const formInputs = [emailInput, textareaInput];
const feedbackFormState = {};
// const currentMail = localStorage.getItem('email');
// const currentMessage = localStorage.getItem('message');

// localStorage.setItem('email', "mail");
// localStorage.setItem('message', "");


// if (currentMail !== "" || currentMessage !== "") {
//     emailInput.value = currentMail;
//     textareaInput.value = currentMessage;
//     console.log(emailInput.value);
// };

formInputs.forEach((elem) => {
    const savedState = JSON.parse(localStorage.getItem("feedback-form-state") || {});
    elem.value = savedState[elem.name] || "";
});

formInputs.forEach((elem) => elem.addEventListener("input", throttle((event) => {
    event.preventDefault();
    feedbackFormState[elem.name] = elem.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
    }, 500)));

form.addEventListener("submit", (event) => { 
    event.preventDefault();
    form.reset();
    localStorage.clear();
});

// formInputs.addEventListener("input", throttle((event) => {
//     event.preventDefault();
    

//     const formElements = event.currentTarget.elements;
//     localStorage.setItem('email', formElements.email.value);
//     localStorage.setItem('message', formElements.message.value);
//     // console.log(formElements.email.value, formElements.message.value);
//     console.log(formElements);


    // if (localStorage.getItem('email') !== "" || localStorage.getItem('message') !== "") {
    //     emailInput.value = localStorage.getItem('email');
    //     textareaInput.value = localStorage.getItem('message');
    //     console.log(emailInput.value);
    // } else { 
    //     const formElements = event.currentTarget.elements;
    //     localStorage.setItem('email', formElements.email.value);
    //     localStorage.setItem('message', formElements.message.value);
        
// }, 500));


// 
    
// function OnFormSubmit(event) {
//     event.preventDefault();
//     const formElements = event.currentTarget.elements;
//     const currentMail = localStorage.getItem('email');
//     const currentMessage = localStorage.getItem('message');

//     if (currentMail !== '' || currentMessage !== '') {
        


//     // const mail = formElements.email.value;
//     // const message = formElements.message.value;
//     localStorage.setItem('email', formElements.email.value);
//     localStorage.setItem('message', formElements.message.value);
//     const currentMail = localStorage.getItem('email');
//     const currentMessage = localStorage.getItem('message');
//     console.log(currentMail);
//     console.log(currentMessage);
 
//     if (currentMail === '' || currentMessage === '') {
//         console.log("foo");
//     } else {
//         mail = localStorage.email;
//         text = localStorage.message;
//         const formObj = { currentMail, currentMessage };
//         console.log(formObj);
//     };
//     form.reset();
    // localStorage.clear();
// };
