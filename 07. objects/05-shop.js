// CRUD
// Simple shop

let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

// for (const item of items) {
//     // console.log(item.name);
//     console.log(item.price);
// }

let shop = {
    title: "ATB",
    adress: "Odessa",
    // items: items,
    items,

    showItems() {
        // console.log(this.items);
        for (let item of this.items) {
            // console.log(item);
            console.log(
                `id: ${item.id}, name: ${item.name}, price: ${item.price}, qty: ${item.qty}`
            );
        }
    },

    addItem(newItem) {
        this.items.push(newItem);
    },

    updateItem(productName, newName) {
        for (let item of this.items) {
            if (item.name === productName) {
                // console.log("Нашли");
                item.name = newName;
            }
        }
    },

    // removeItem(productName) {
    //     let len = this.items.length;
    //     for (let i = 0; i < len; i++) {
    //         if (productName === this.items[i].name) {
    //             // console.log("Нашли");
    //             this.items.splice(i, 1);
    //             break;
    //         }
    //     }
    // },

    removeItem(productName) {
        for (let item of this.items) {
            if (item.name === productName) {
                let idx = this.items.indexOf(item);
                // console.log(idx);
                this.items.splice(idx, 1);
            }
        }
    },
};

// let kiwi = { id: "5", name: "kiwi", price: 35, qty: 80, category: "fruits" };

// shop.addItem(kiwi);
// shop.updateItem("apples", "apples gold");
// shop.updateItem("tomatoes", "tomatoes cherry");
shop.removeItem("potato");
shop.showItems();
