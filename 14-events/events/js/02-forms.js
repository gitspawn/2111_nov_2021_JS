/*
 Event Submit
 Default browser actions
 Elements property
 Class FormData() - https://developer.mozilla.org/ru/docs/Web/API/FormData
*/

// ==================
// event.preventDefault() - discard default behaviour
// ==================

// let googleLinkRef = document.querySelector("a");

// googleLinkRef.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.preventDefault();
// });

let formRef = document.querySelector(".js-register-form");
// console.log(formRef);
formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("submit");

    // name="name" type="text" autocomplete="off
    // let inputName = document.querySelector('input[name="name"]');
    // let inputEmail = document.querySelector('input[name="email"]');
    // console.log(inputEmail);
    // console.log(inputName.name);
    // console.log(inputName.type);
    // console.log(inputName.autocomplete);
    // console.log(inputName.value);

    // ============================
    // Elements
    // console.log(event.target);
    // console.log(event.target.elements);
    // console.log(event.target.elements.password.value);
    // console.log(event.target.elements.name.value);

    // let formRef = event.target.elements;
    // console.log(formRef.password.value);
    // let data = {
    //     name: formRef.name.value,
    //     password: formRef.password.value,
    // };
    // ============================
    // FromData

    let formRef = event.target;
    let formData = new FormData(formRef);

    let sendFormData = {};
    formData.forEach((value, key) => {
        sendFormData[key] = value;
    });

    console.log(sendFormData);
});
