let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

let shop = {
    title: "ATB",
    adress: "Odessa",

    items,

    // showItems() {
    //     for (let item of this.items) {
    //         console.log(
    //             `id: ${item.id}, name: ${item.name}, price: ${item.price}, qty: ${item.qty}`
    //         );
    //     }
    // },

    showItems() {
        for (let item of this.items) {
            let { id, name, price, qty } = item;
            console.log(
                `id: ${id}, name: ${name}, price: ${price}, qty: ${qty}`
            );
        }
    },

    // addItem(newItem) {
    //     this.items.push(newItem);
    // },

    // addItem({ name, price, qty, category }) {
    //     let newItem = {
    //         id: this.generateID(),
    //         name,
    //         price,
    //         qty,
    //         category,
    //     };

    //     this.items = [...this.items, newItem];
    // },

    addItem({ name, price, qty, category }) {
        let newItem = {
            name,
            price,
            qty,
            category,
        };

        this.items = [...this.items, { ...newItem, id: this.generateID() }];
    },

    updateItem(productName, newName) {
        for (let item of this.items) {
            if (item.name === productName) {
                item.name = newName;
            }
        }
    },

    removeItem(productName) {
        for (let item of this.items) {
            if (item.name === productName) {
                let idx = this.items.indexOf(item);
                this.items.splice(idx, 1);
            }
        }
    },

    generateID() {
        return Math.random().toString().slice(2);
    },
};

let kiwi = { name: "kiwi", price: 35, qty: 80, category: "fruits" };
shop.addItem(kiwi);
// shop.updateItem("apples", "apples gold");
// shop.updateItem("tomatoes", "tomatoes cherry");
// shop.removeItem("potato");
shop.showItems();

// function generateID() {
//     return Math.random().toString().slice(2);
// }

// console.log(generateID());
