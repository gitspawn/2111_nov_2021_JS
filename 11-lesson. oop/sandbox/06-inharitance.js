// ES5 Inharitance - наследование
// function Phone(brand, price, discount) {
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;

//     this.discountPtice = function () {
//         let price = (this.price * (100 - this.discount)) / 100;
//         console.log(price);
//     };
// }

// Phone.prototype.showInfo = function () {
//     console.log(`${this.brand} ${this.price} ${this.discount}`);
// };

// // Instance
// // To instantiate
// let samsung = new Phone("Samsung", 1000, 15);
// console.log(samsung);

// =============================================

// function User(name, salary, overtime) {
//     this.name = name;
//     this.salary = salary;
//     this.overtime = overtime;
// }

// User.prototype.paySalary = function () {
//     return this.salary + this.overtime + 100;
// };

// let vova = new User("Vova", 1000, 10);
// let sara = new User("Sara", 800, 35);

// console.log(vova);
// console.log(sara);

// console.log(vova.paySalary());
// console.log(sara.paySalary());

//==============================================

function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

User.prototype.getInfo = function () {
    console.log(`Name: ${this.name} LastName: ${this.lastName}`);
};

let vova = new User("Vova", "Smith");
// console.log(vova);

// ================================
// Фунциональное наследование
// function Customer(name, lastName, membership) {
//     this.name = name;
//     this.lastName = lastName;
//     this.membership = membership;
// }

function Customer(name, lastName, membership) {
    User.apply(this, arguments);
    this.membership = membership;
}

// Прототипное наледование
// 1. Передать прототип
Customer.prototype = Object.create(User.prototype);
// 2. Явно указвть конструктор
Customer.prototype.constuctor = Customer;
// 3 Если надо, то я преопределяю методы
Customer.prototype.getInfo = function () {
    console.log(
        `Name: ${this.name} LastName: ${this.lastName} Membership: ${this.membership}`
    );
};
let sara = new Customer("Sara", "Connor", "Basic");
// console.log(sara);
sara.getInfo();

// ================================================
// function Supervizer(name, lastName, membership, region) {
//     User.apply(this, arguments);
//     this.region = membership;
// }
