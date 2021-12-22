// getters / setters

class Phone {
    constructor(brand, price, discount) {
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }

    // Gettres
    get brandName() {
        return this.brand;
    }

    // Settrer
    set brandName(newBrand) {
        this.brand = newBrand;
    }

    // showInfo() {
    //     console.log(this);
    //     // console.log(`${this.brand} ${this.price} ${this.discount}`);
    // }

    //  Old school setter
    // setPrice(newPrice) {
    //     this.price = newPrice;
    // }

    //  Old school getter
    // getPrice() {
    //     return this.price;
    // }

    // discountPtice() {
    //     let price = (this.price * (100 - this.discount)) / 100;
    //     console.log(price);
    // }
}

let samsung = new Phone("Samsung", 600, 15);

// samsung.price = 650;
// samsung.setPrice(700);
// samsung.showInfo();

// Getters
console.log(samsung.brandName);
// Setter
samsung.brandName = "Samsung gold";

console.log(samsung);
