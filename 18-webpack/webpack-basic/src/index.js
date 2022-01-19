import obj from "./js/a";
import template from "./templates/main.handlebars";

// import "./css/styles.css";
import "./scss/main.scss";

console.log(obj);

class Calculator {
    static PI = 3.14;

    static min(a, b) {
        return a > b ? b : a;
    }

    static sum(a, b) {
        return a + b;
    }

    static mult(a, b) {
        return a * b;
    }
}

console.log(Calculator.PI);

console.log("Hello from webpack");
