let tools = ["hammer", "screwdriver", "knife", "saw", "axe"];

let list = document.querySelector(".list");

// tools.forEach((tool) => {
//     list.innerHTML += `<li class="list_item">${tool}</li>`;
// });

let markup = tools
    .map((tool) => {
        return `<li class="list_item">${tool}</li>`;
    })
    .join("");

list.insertAdjacentHTML("beforeend", markup);
