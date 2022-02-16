import React from "react";
import PropTypes from "prop-types";

let Product = (props) => {
    const { title, imageUrl, price, qty } = props;

    return (
        <div>
            <h3>{title}</h3>
            <img src={imageUrl} alt={imageUrl} width="450" />
            <p>Price {price}$</p>
            <p>
                Avialable:
                <b> {qty <= 5 ? "Few Left" : "In Stock"}</b>
            </p>

            <button>Order now!</button>
            <br />
        </div>
    );
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
