// ES6

// class Phone {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }

//     showInfo() {
//         console.log(`${this.brand} ${this.price} ${this.discount}`);
//     }

//     discountPtice() {
//         let price = (this.price * (100 - this.discount)) / 100;
//         console.log(price);
//     }
// }

// let samsung = new Phone("Samsung", 600, 15);
// let lg = new Phone("LG", 250, 25);
// let apple = new Phone("Apple", 1000, 5);

// console.log(lg);
// console.log(apple);
// console.log(samsung);
// console.log(samsung instanceof Phone);

// console.log(samsung.brand);
// console.log(samsung.price);

// samsung.showInfo();
// samsung.showInfo();

// =========================================
// Class public field

class Phone {
    constructor(brand, price, discount) {
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }

    // Class public field
    user = "Vova";
    pizza = "Carbonara";
    nums = [1, 2, 3, 4, 5];
    fruit = { title: "banana", price: 27 };

    // Class public field
    showInfo = () => {
        console.log(`${this.brand} ${this.price} ${this.discount}`);
    };

    // Class public field
    discountPtice = () => {
        let price = (this.price * (100 - this.discount)) / 100;
        console.log(price);
    };
}

let samsung = new Phone("Samsung", 600, 15);

// console.log(samsung);
// console.log(samsung.user);
// console.log(samsung.pizza);
// console.log(samsung.nums);
// console.log(samsung.fruit);
samsung.showInfo();
samsung.discountPtice();
