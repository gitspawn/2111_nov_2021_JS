{
    /* <ul>
        <li></li>
        <li>Rum</li>
        <li>Vodka</li>
        <li>Beer</li>
    </ul> */
}

document.body.style.background = "gray";

let items = ["Tea", "Coffe", "Juice", "Water", "Milk"];

let rootRef = document.querySelector("#root");
let btn = document.querySelector("#openMenu");

function createLI(text) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    li.classList.add("list_item");
    a.classList.add("list_link");

    a.href = "/" + text.toLowerCase();
    a.target = "_blanck";
    a.textContent = text;

    li.append(a);

    return li;
}

// let li = createLI(items[1]);
// console.log(li);
let menu = items.map((li) => {
    return createLI(li);
});
console.log(menu);

let ul = document.createElement("ul");
ul.classList.add("list");
ul.append(...menu);
ul.classList.add("hide");

// rootRef.append(menu);
rootRef.append(ul);

// buton click
btn.addEventListener("click", (event) => {
    ul.classList.toggle("show");
    ul.classList.toggle("hide");
});

// ========================================================
// document.body.style.background = "gray";

// let items = ["Tea", "Coffe", "Juice", "Water", "Milk"];

// let rootRef = document.querySelector("#root");

// function createLI(text) {
//     let li = document.createElement("li");
//     let a = document.createElement("a");

//     li.classList.add("list_item");
//     a.classList.add("list_link");

//     a.href = "/" + text.toLowerCase();
//     a.target = "_blanck";
//     a.textContent = text;

//     li.append(a);

//     return li;
// }

// function createMenu(donElem, createLI) {
//     let menu = items.map((li) => createLI(li));
//     return donElem.append(...menu);
// }

// createMenu(rootRef, createLI);

// ================================================
