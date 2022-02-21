import React from "react";
import PropTypes from "prop-types";

// import "./Poduct.css";
// import "./Product.scss";

// import styles from "./Product.module.css";

import styled from "styled-components";

// console.log(styles);

// let styles = {
//     color: "magenta",
//     outline: "1px solid blue",
// };

let QuantityValue = styled.span`
    font-weight: 600;
    color: ${(props) => (props.inStock ? "green" : "red")};
`;

let Product = (props) => {
    const { title, imageUrl, price, qty } = props;

    let isInstock = qty >= 5;
    // let quantityClases = ["Product__qty"];

    // 1. if...else
    // if (isInstock) {
    //     quantityClases.push("awailable");
    // } else {
    //     quantityClases.push("not-awailable");
    // }

    // 2. ternary-operator
    // quantityClases = ["Product__qty"];
    // quantityClases.push(isInstock ? "awailable" : "not-awailable");

    // 3 ternary +  join()
    // quantityClases = [
    //     "Product__qty",
    //     isInstock ? "awailable" : "not-awailable",
    // ].join(" ");

    // 4. CSS MODULES
    // let quantityClases = isInstock ? styles.awailable : styles["not-awailable"];
    // let quantityClases = isInstock ? styles.awailable : styles.notAwailable;

    // console.log(quantityClases);

    // Styled components
    return (
        <div>
            <h3>{title}</h3>
            <img src={imageUrl} alt={imageUrl} width="450" />
            <p className="Product__price">Price {price}$</p>
            <p>
                Avialable:
                <QuantityValue inStock={isInstock}>
                    {" "}
                    {isInstock ? "Few Left" : "In Stock"}
                </QuantityValue>
            </p>

            {/* <button style={{ backgroundColor: "black", color: "white" }}>
                Order now!
            </button> */}
            <button>Order now!</button>
            <br />
        </div>
    );

    // CSS Modules
    // return (
    //     <div className={styles.container}>
    //         <h3 className={styles.name}>{title}</h3>
    //         <img src={imageUrl} alt={imageUrl} width="450" />
    //         <p className="Product__price">Price {price}$</p>
    //         <p>
    //             Avialable:
    //             {/* <span className={quantityClases.join(" ")}> */}
    //             <span className={quantityClases}>
    //                 {" "}
    //                 {qty <= 5 ? "Few Left" : "In Stock"}
    //             </span>
    //         </p>

    //         {/* <button style={{ backgroundColor: "black", color: "white" }}>
    //             Order now!
    //         </button> */}
    //         <button className={styles.button}>Order now!</button>
    //         <br />
    //     </div>
    // );

    // CSS
    // return (
    //     <div className="Product">
    //         <h3 className="Product__name">{title}</h3>
    //         <img src={imageUrl} alt={imageUrl} width="450" />
    //         <p className="Product__price">Price {price}$</p>
    //         <p>
    //             Avialable:
    //             {/* <span className={quantityClases.join(" ")}> */}
    //             <span className={quantityClases}>
    //                 {" "}
    //                 {qty <= 5 ? "Few Left" : "In Stock"}
    //             </span>
    //         </p>

    //         {/* <button style={{ backgroundColor: "black", color: "white" }}>
    //             Order now!
    //         </button> */}
    //         <button className="Product__button">Order now!</button>
    //         <br />
    //     </div>
    // );
};

Product.defaultProps = {
    imageUrl:
        "https://media.istockphoto.com/photos/internet-page-not-found-hand-with-magnifier-concept-picture-picture-id1207750534?k=20&m=1207750534&s=612x612&w=0&h=O9Q_OkqPqeDUooOM8SGIr0NzaT-efCZ_0ja8L2udLWM=",
};

Product.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number,
};

export default Product;
