// import React, { Component } from 'react';
// // Controlled element pattrn

// export default class Form extends Component {
//     state = {
//         value: '',
//     };

//     handleInput = event => {
//         // console.log(event.target.value);
//         this.setState({
//             value: event.target.value,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <input
//                     onChange={this.handleInput}
//                     type="text"
//                     value={this.state.value}
//                 />
//             </div>
//         );
//     }
// }

// =====================================
// Form
import React, { Component } from 'react';
// Controlled element pattrn
// onChange это бразерно событие Input

const Subscription = {
    FREE: 'free',
    BASIC: 'basic',
    PRO: 'pro',
};

export default class Form extends Component {
    state = {
        license: false,
        email: '',
        password: '',
        subscription: '',
        age: null,
    };

    // handleEmail = event => {
    //     this.setState({
    //         email: event.target.value,
    //     });
    // };

    // handlePassword = event => {
    //     this.setState({
    //         password: event.target.value,
    //     });
    // };

    handleChange = evt => {
        // console.log('value', evt.target.value);
        // console.log('name', evt.target.name);

        const { name, value } = evt.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubscription = event => {
        console.log(event.target.value);

        this.setState({
            subscription: event.target.value,
        });
    };

    handleAge = evt => {
        this.setState({
            age: evt.target.value,
        });
    };

    handleLicenseChange = event => {
        // console.log(event.target.checked);
        this.setState({
            license: event.target.checked,
        });
    };

    render() {
        const { license, email, password, subscription, age } = this.state;

        return (
            <div>
                <form>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br></br>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <div role="group">
                        <label>
                            Free
                            <input
                                onChange={this.handleSubscription}
                                type="radio"
                                checked={Subscription.FREE === subscription}
                                value={Subscription.FREE}
                            />
                        </label>
                        <label>
                            Basic
                            <input
                                onChange={this.handleSubscription}
                                type="radio"
                                checked={Subscription.BASIC === subscription}
                                value={Subscription.BASIC}
                            />
                        </label>
                        <label>
                            Pro
                            <input
                                onChange={this.handleSubscription}
                                type="radio"
                                checked={Subscription.PRO === subscription}
                                value={Subscription.PRO}
                            />
                        </label>
                    </div>

                    <br></br>
                    <label>
                        Select Age
                        <select
                            name="age"
                            value={age}
                            onChange={this.handleAge}
                        >
                            <option value="...">Chosa an option</option>
                            <option value="6...14">6...14</option>
                            <option value="14...18">14...18</option>
                            <option value="18...28">18...28</option>
                            <option value="28+">18...28</option>
                        </select>
                    </label>
                    <br></br>

                    <label>
                        <input
                            type="checkbox"
                            checked={license}
                            onChange={this.handleLicenseChange}
                        />{' '}
                        Я принимаю лиценионное соглашение
                    </label>

                    <br />

                    <button type="submit" disabled={!license}>
                        Send
                    </button>
                </form>
            </div>
        );
    }
}
