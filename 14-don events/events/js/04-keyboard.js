/**
 * keydown, keypress, keyup
 * keypress - only for symbol buttons (doesn't work for - ctrl, shift, alt, esc, and so on)
 * keydown - all buttons: symbol buttons, ctrl, shift, alt and so on
 *
 * event.key - генерит буквально сивол
 * event.code - физически нажатая клавиша
 *
 * https://keycode.info/
 */

// window.addEventListener("keypress", (event) => {
//     // console.log("key", event.key);
//     // console.log("code", event.code);
//     console.log(event.code);
// });

// window.addEventListener("keydown", (event) => {
//     // console.log("key", event.key);
//     // console.log("code", event.code);
//     console.log(event.code);
// });

// =================================================

{
    /* <button class="js-clear">Clear</button> */
}
{
    /* <p class="output js-output"></p> */
}

let btn = document.querySelector(".js-clear");
let output = document.querySelector(".js-output");

window.addEventListener("keydown", onKeyListen);

btn.addEventListener("click", (event) => {
    output.textContent = "";
    window.removeEventListener("keydown", onKeyListen);
});

function onKeyListen(event) {
    output.textContent += event.key;
}
