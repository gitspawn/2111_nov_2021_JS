let list = document.querySelector(".list");
let h1 = document.querySelector("h1");

function addClass(event) {
    // console.log(event.target.nodeName);
    if (event.target.nodeName !== "LI") {
        return;
    }
    // console.log(event.target.nodeName);
    // let li = event.target;
    // li.classList.add("big");
    // h1.innerText = li.innerText;
    //======================================================

    // dataset
    // console.log(event.target.dataset);
    // console.log(event.target.dataset.value);
    // console.log(event.target.dataset.word);

    let li = event.target;
    li.classList.add("big");
    h1.innerText = li.dataset.value;
}

list.addEventListener("click", addClass);
