import React, { Component, PureComponent } from "react";

export default class Tabs extends PureComponent {
    state = { activeIndex: 0 };

    setActivIndex = (idx) => {
        this.setState({
            activeIndex: idx,
        });
    };

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    // shouldComponentUpdate(nextPops, nextState) {
    //     // if (nextState.activeIndex !== this.state.activeIndex) {
    //     //     console.log("shouldComponentUpdate");
    //     //     return true;
    //     // } else {
    //     //     return false;
    //     // }

    //     return nextState.activeIndex !== this.state.activeIndex;
    // }

    render() {
        const { items } = this.props;
        const tab = items[this.state.activeIndex];

        return (
            <>
                <div>
                    {items.map((item, idx) => (
                        <button
                            key={item.label}
                            onClick={() => this.setActivIndex(idx)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div>
                    <p>{tab.content}</p>
                </div>
            </>
        );
    }
}
