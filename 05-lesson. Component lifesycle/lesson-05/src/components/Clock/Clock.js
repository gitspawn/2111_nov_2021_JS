import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
    state = { time: new Date().toLocaleTimeString() };

    intervalID = "";

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Clock Unmount");
        clearInterval(this.intervalID);
    }

    render() {
        const { time } = this.state;
        return <div className="Clockface">{time}</div>;
    }
}
