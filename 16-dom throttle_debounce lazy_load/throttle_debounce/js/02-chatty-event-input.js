/*
 * Input
 */

// _.debounce()
// _.throttle()

let inputRef = document.querySelector(".js-input");
let outputRef = document.querySelector(".js-output");

function handleInput(event) {
    // console.log(event.target.value);
    outputRef.textContent = event.target.value;
}

inputRef.addEventListener("input", _.debounce(handleInput, 2000));
