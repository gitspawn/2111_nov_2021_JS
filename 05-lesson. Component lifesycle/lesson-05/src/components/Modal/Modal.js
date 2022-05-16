import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
    componentDidMount() {
        console.log("Modal did mount");
        window.addEventListener("keydown", this.handleEscape);
    }

    handleEscape = (evt) => {
        if (evt.code === "Escape") {
            console.log("Закрываю модалку по Escape");
            this.props.onCloseModal();
        }
    };

    componentWillUnmount() {
        console.log("Modal  unmount");

        window.removeEventListener("keydown", this.handleEscape);
    }

    render() {
        return (
            <div className="Backdrop">
                <div className="Modal">{this.props.children}</div>
            </div>
        );
    }
}
