// ES-5 Constructors or Class

// function Product() {
// 1. {}
// 2. Привязывает this
// 3. Возвращает созданный объект
// }

// new Product();

// ==============================================

function Phone(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;

    this.showInfo = function () {
        console.log(`${this.brand} ${this.price} ${this.discount}`);
    };

    this.discountPtice = function () {
        let price = (this.price * (100 - this.discount)) / 100;
        console.log(price);
    };
}

// Instance
// To instantiate
let samsung = new Phone("Samsung", 1000, 15);

// samsung.ptice = 1000;
// samsung.model = "A6";

// // console.log(samsung.brand);
// // console.log(samsung.price);

// let lg = new Phone("LG", 250, 15);
// let apple = new Phone("Apple", 250, 15);

// console.log(samsung);
// samsung.discountPtice();
// console.log(lg);
// console.log(apple);

// samsung.showInfo();
// lg.showInfo();

// ==============================
// instanceof

// console.log(samsung instanceof Array);
// console.log(samsung instanceof Phone);

// let nums = [1, 2, 3, 4, 5];
// console.log(nums instanceof Array);
// console.log(nums instanceof Phone);

// ====================================
// Add to prototype
// let nums = [1, 2, 3, 4, 5];

// nums.pizza = function () {
//     console.log("Cabonara");
// };

// nums.pizza();

// Array.prototype.pizza = function () {
//     console.log("Cabonara");
// };

// console.log(nums);
// nums.pizza();

// Array.prototype.push = null;
// nums.push(100);
// console.log(nums);

// window.prototype.alert = null;
// alert("hELL");
