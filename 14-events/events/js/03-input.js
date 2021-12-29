/**
 * 
 * Change Event
 * Input Event
 *
 * Focus Event
 * Blur Event
 *

 * Checkboxes
 * Checked property
 * */

let inputRef = document.querySelector(".js-input");
let licenseRef = document.querySelector(".js-license");
let btnRef = document.querySelector(".js-button");
let spanRef = document.querySelector(".js-button > span");

// inputRef.addEventListener("input", (event) => {
//     console.log(event.target.value);
// });

// inputRef.addEventListener("change", (event) => {
//     console.log(event.target.value);
// });

// ===============================
// Check box
// licenseRef.addEventListener("change", (event) => {
//     // console.log(event.target.value);
//     console.log(event.target.checked);
// });

// ====================================

// inputRef.addEventListener("input", (event) => {
//     let inputValue = event.target.value;

//     licenseRef.addEventListener("change", (event) => {
//         btnRef.disabled = !event.target.checked;
//         btnRef.textContent = "Register as" + " " + inputValue;
//     });

// });

// =======================
// Focus
inputRef.addEventListener("focus", (event) => {
    event.target.style.border = "2px solid green";
    event.target.style.background = "gray";
    event.target.style.outline = "none";
});

// Blur
inputRef.addEventListener("blur", (event) => {
    event.target.style.border = "2px solid red";
    event.target.style.background = "magenta";
    event.target.style.outline = "none";
});
