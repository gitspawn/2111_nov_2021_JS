//  Shop Class

// class Shop {
//     constructor(items, title, adress) {
//         this.items = items;
//         this.title = title;
//         this.adress = adress;
//     }

//     showItems() {
//         for (let item of this.items) {
//             let { id, name, price, qty } = item;
//             console.log(
//                 `id: ${id}, name: ${name}, price: ${price}, qty: ${qty}`
//             );
//         }
//     }

//     addItem({ name, price, qty, category }) {
//         let newItem = {
//             name,
//             price,
//             qty,
//             category,
//         };

//         this.items = [...this.items, { ...newItem, id: this.generateID() }];
//     }

//     updateItem(productName, newName) {
//         for (let item of this.items) {
//             if (item.name === productName) {
//                 item.name = newName;
//             }
//         }
//     }

//     removeItem(productName) {
//         for (let item of this.items) {
//             if (item.name === productName) {
//                 let idx = this.items.indexOf(item);
//                 this.items.splice(idx, 1);
//             }
//         }
//     }

//     generateID() {
//         return Math.random().toString().slice(2);
//     }
// }

// let items = [
//     { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
//     { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
//     { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
//     { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
// ];

// let atb = new Shop(items, "ATB", "Odessa");
// let silpo = new Shop(items, "Silpo", "Kyiv");

// let kiwi = { name: "kiwi", price: 35, qty: 80, category: "fruits" };
// atb.addItem(kiwi);
// atb.updateItem("apples", "apples gold");
// atb.removeItem("apples");

// atb.items = null;
// console.log(atb.generateID());
// atb.showItems();

////////////////////////////////////////////////////////////

class Shop {
    #items; //private field

    constructor(items, title, adress) {
        this.#items = items;
        this.title = title;
        this.adress = adress;
    }

    showItems() {
        for (let item of this.#items) {
            let { id, name, price, qty } = item;
            console.log(
                `id: ${id}, name: ${name}, price: ${price}, qty: ${qty}`
            );
        }
    }

    addItem({ name, price, qty, category }) {
        let newItem = {
            name,
            price,
            qty,
            category,
        };

        this.#items = [...this.#items, { ...newItem, id: this.#generateID() }];
    }

    updateItem(productName, newName) {
        for (let item of this.#items) {
            if (item.name === productName) {
                item.name = newName;
            }
        }
    }

    removeItem(productName) {
        for (let item of this.#items) {
            if (item.name === productName) {
                let idx = this.#items.indexOf(item);
                this.#items.splice(idx, 1);
            }
        }
    }

    #generateID() {
        return Math.random().toString().slice(2);
    }
}

let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

let atb = new Shop(items, "ATB", "Odessa");

// let kiwi = { name: "kiwi", price: 35, qty: 80, category: "fruits" };
// atb.addItem(kiwi);
// atb.updateItem("apples", "apples gold");
// atb.removeItem("apples");

// atb.items = null;
// console.log(atb.#items);
// console.log(atb.items);

// console.log(atb.generateID());
// console.log(atb.#generateID());
atb.showItems();
