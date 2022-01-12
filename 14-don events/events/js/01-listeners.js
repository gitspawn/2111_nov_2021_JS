/*
  https://devdocs.io/dom_events/
  Event listeners
  Callback identity
  Event Object
*/

// Event - сигнал от браузера что что-то произошло

{
    /* <button type="button" class="js-target-btn">Main button</button>
<button type="button" class="js-add-listener">Add listeners</button>
<button type="button" class="js-remove-listener">Remove listener</button> */
}

let mainBTN = document.querySelector(".js-target-btn");
let addListenerBTN = document.querySelector(".js-add-listener");
let removeListenerBTN = document.querySelector(".js-remove-listener");

// mainBTN.addEventListener("click", () => {
//     console.log("targetBTN");
//     // console.log(2 + 2);
// });

// =============================================
// Ссылочная идентичность колбеков

// addListenerBTN.addEventListener("click", () => {
//     console.log("Повесили обработчик ");
//     mainBTN.addEventListener("click", doOnclick);
// });

// removeListenerBTN.addEventListener("click", () => {
//     console.log("Снять обработчик");
//     mainBTN.removeEventListener("click", doOnclick);
// });

// function doOnclick() {
//     console.log("targetBTN");
// }

// ==============================================
// Event
// event.target - элемент на котором произошло событие
// event.currentTarget - элемент на котором отловили событие

// mainBTN.addEventListener("click", (event) => {
// console.log(event);
// console.log(event.target);
// console.log(event.currentTarget);
// });
