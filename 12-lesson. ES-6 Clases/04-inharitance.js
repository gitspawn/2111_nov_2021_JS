// Inharitance

class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getInfo() {
        console.log(`Name: ${this.name} LastName: ${this.lastName}`);
    }
}

let vova = new User("Vova", "Smith");

//================================================

// class Survizer {}

class Customer extends User {
    constructor(name, lastName, membership) {
        // super(name, lastName)
        super(...arguments);
        this.membership = membership;
    }

    getInfo() {
        // console.log("Sara");
        super.getInfo();
    }
}

let sara = new Customer("Sara", "Connor", "Basic");

// console.log(sara);
sara.getInfo();
