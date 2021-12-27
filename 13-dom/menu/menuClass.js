class Menu {
    constructor(items, rootRef) {
        this.items = items;
        this.rootRef = rootRef;
    }

    createLI(text) {
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

    createMenu(domElem, createLI) {
        let menu = this.items.map((li) => createLI(li));
        return domElem.append(...menu);
    }

    init() {
        this.createMenu(this.rootRef, this.createLI);
    }
}

let items = ["Tea", "Coffe", "Juice", "Water", "Milk"];
let rootRef = document.querySelector("#root");

new Menu(items, rootRef).init();
