import React, { createElement } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

// document.createElement()
// React.createElement(type, [props], [...children]);

// {
//   props:
//   children: "https://httpstatuses.com"
// }

// const link = React.createElement("a", {}, "https://httpstatuses.com");

// let props = {
//     href: "https://httpstatuses.com",
//     target: "_blank",
// };

// // const link = React.createElement("a", props, "httpstatuses");
// const link = React.createElement("a", {
//     href: "https://httpstatuses.com",
//     target: "_blank",
//     children: '"httpstatuses"',
// });

// console.log(link);

// let title = React.createElement("h3", {}, "Kebab");
// let price = React.createElement("p", null, "Price 5$");
// let image = React.createElement("img", {
//     src: "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     alt: "Kebab",
//     width: 450,
// });

// let button = React.createElement("button", null, "Order now!");

// // let product = React.createElement("div", null, title, price, image, button);
// let product = React.createElement("div", {
//     children: [title, price, image, button],
// });

// =====================================================
// JSX

// let Product = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h3>Kebab</h3>
//             <p>Price 5$</p>
//             <img
//                 src="https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//                 alt="Kebab"
//                 width="450"
//             />
//             <br />
//             <button>Order now!</button>
//         </div>
//     );
// };

// let productImage =
//     "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

// let productPrice = 4.5;

// let Product = (props) => {
//     console.log(props);
//     console.log(props.vova);
//     return (
//         <div>
//             <h3>Kebab</h3>
//             <p>Price {productPrice}$</p>
//             <img src={productImage} alt="Kebab" width="450" />
//             <br />
//             <button>Order now!</button>
//         </div>
//     );
// };

let Product = (props) => {
    console.log(props);

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.imageUrl} alt={props.imageUrl} width="450" />
            <p>Price {props.price}$</p>
            <button>Order now!</button>
            <br />
        </div>
    );
};

let App = (props) => {
    return (
        <>
            <Product
                title="Kebab Kazan"
                imageUrl="https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                price="6.25"
            />

            <Product
                title="Pizza"
                imageUrl="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                price="12.35"
            />
        </>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
