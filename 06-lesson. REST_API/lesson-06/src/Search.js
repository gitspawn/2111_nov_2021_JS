import React, { Component } from "react";

export default class Search extends Component {
    state = {
        inputValue: "",
    };

    handleChange = (evt) => {
        this.setState({ inputValue: evt.target.value });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(this.props);
        // console.log("Submit");

        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="text"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </label>
            </form>
        );
    }
}
