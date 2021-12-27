// innerHeight
// innerWidth
// innerText
// innerHtml
// textContent

// let h1Ref = document.querySelector("#title");

// console.log(h1Ref.innerText);
// h1Ref.innerText = "Hello world";

// let ulRef = document.querySelectorAll(".list")[2];
// let li = ulRef.querySelectorAll("li")[0];
// console.log(li);
// li.innerText = "Pizza Carbonara";
// li.textContent = "Dominos Pizza";
// ============================
// let h1Ref = document.querySelector("#title");
// h1Ref.innerHTML =
//     "<span style='color: magenta'class='span__class'>Some text</span>";

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// let html = "";

// friends.forEach(({ name }) => {
//     html += `<li class="list_item">${name}</li>`;
// });

// console.log(html);

// let ulRef = document.querySelectorAll(".list")[1];

// ulRef.innerHTML = html;

//=================================
// Modern

let h1Ref = document.querySelector("#title");
// h1Ref.innerHTML = "";

// h1Ref.insertAdjacentElement
// h1Ref.insertAdjacentHTML
// h1Ref.insertAdjacentText

// h1Ref.insertAdjacentHTML('afterbegin')
// h1Ref.insertAdjacentHTML('afterend')
// h1Ref.insertAdjacentHTML('beforebegin')
// h1Ref.insertAdjacentHTML('beforeend')

// h1Ref.insertAdjacentHTML(
//     "beforeend",
//     "<span style='color: magenta'class='span__class'>Some text</span>"
// );
