/*
 * Event Bubbling
 * event.target - элемент на котором произошло событие
 * event.currentTarget - элемент на котором ловим (слушаем) событие
 * event.stopPropagation() - остановить всплытие событий
 */

{
    /* <div id="parent">
PARENT
<div id="child">
  CHILD
  <div id="inner-child">INNER-CHILD</div>
</div>
</div>
 */
}

let parentRef = document.querySelector("#parent");
let childRef = document.querySelector("#child");
let innerChildRef = document.querySelector("#inner-child");

parentRef.addEventListener("click", (event) => {
    console.log("parentRef click");
    // console.log("event.target", event.target);
    // console.log("event.currentTarget", event.currentTarget);
});

childRef.addEventListener("click", (event) => {
    console.log("childRef click");
    // console.log("event.target", event.target);
    // console.log("event.currentTarget", event.currentTarget);
});

innerChildRef.addEventListener("click", (event) => {
    console.log("innerChildRef click");
    // console.log("event.target", event.target);
    // console.log("event.currentTarget", event.currentTarget);
    event.stopPropagation();
});

// window.addEventListener("click", (event) => {
//     console.log("window event");
// });

const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`В списке ${items.length} категории:`);
items.forEach((node) => {
    const h2 = node.querySelector("h2");
    const nodeItems = node.querySelectorAll("li");
    console.log(
        ` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`
    );
});
