import React, { Component } from "react";
import Layout from "./Layout";
// import Tasks from "./Tasks";
// import Modal from "./Modal";
// import Clock from "./Clock";
import Tabs from "./Tabs";
import tabs from "../tabs.json";

export default class App extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState((prevState, prevProps) => {
            return {
                showModal: !prevState.showModal,
            };
        });
    };

    render() {
        // const { showModal } = this.state;
        return (
            <Layout>
                {/* <Tasks /> */}

                {/* <button type="button" onClick={this.toggleModal}>
                    {showModal ? "Hide" : "Open"} Clock
                </button> */}

                {/* {showModal && (
                    <Modal onCloseModal={this.toggleModal}>
                        <h1>Modal</h1>

                        <form>
                            <label>
                                Name
                                <input type="text" />
                            </label>
                            <button type="submit">Send</button>
                        </form>

                        <br></br>

                        <button type="button" onClick={this.toggleModal}>
                            Close modal
                        </button>
                    </Modal>
                )} */}

                {/* {showModal && <Clock onClick={this.toggleModal} />} */}

                <Tabs items={tabs} />
            </Layout>
        );
    }
}

// componentDidMount() {
//     console.log("DidMount");
//     // spinners
//     // loaders
//     // http requests
//     // get data from localStorage
//     // addEventListener
// }

// componentDidUpdate(prevProps, prevState) {
//     // console.log("DidUpdate");
//     // Вызывается когда пришли новые пропы или поменялся стейт
// }

// componentWillUnmount() {
//     // remove all
//     // addEventListener
//     // spinners
//     // loaders
//     // http requests
//     // get data from localStorage
// }
