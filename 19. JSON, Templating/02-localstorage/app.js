// Localstorage

// Add
// Get
// Remove
// Clear
localStorage;

// CRUD
// create  localStorage.setItem()
// read localStorage.getItem()
// update  setItem + getItem
// delete localStorage.removeItem()

let vova = {
    name: "Vova",
    age: 25,
};

//  CREATE
let vovaToStr = JSON.stringify(vova);
const user = localStorage.setItem("user", vovaToStr);

let cart = [
    { id: 1, product: "Apple", price: 1200, qty: 2 },
    { id: 2, product: "Samsung", price: 800, qty: 1 },
    { id: 3, product: "LG", price: 1000, qty: 3 },
];

let cartToLS = localStorage.setItem("cart", JSON.stringify(cart));

// ==================================================
// READ
// let cartFROMLS = localStorage.getItem("cart");
// let persedCart = JSON.parse(cartFROMLS);

// console.log(persedCart);
// console.log(typeof persedCart);
// console.log(cartFROMLS);
// console.log(typeof cartFROMLS);

// let pizzaFromLS = localStorage.getItem("pizza");
// console.log(pizzaFromLS);

// ================================

// REMOVE
// localStorage.removeItem("user");

// ========================
// CLEAR ALL
// localStorage.clear();

// ==============================
// SESSION STORAGE

sessionStorage.setItem();
sessionStorage.getItem();
sessionStorage.removeItem();
sessionStorage.clear();
