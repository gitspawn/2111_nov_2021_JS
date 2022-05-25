import React, { useEffect, useState, useRef } from "react";

export default function Clock() {
    let [time, setTime] = useState(new Date());

    let intervalID = useRef();

    console.log(intervalID); // {current: undefined}

    useEffect(() => {
        // console.log("useEffect");
        intervalID.current = setInterval(() => {
            setTime(new Date());
        }, 3000);

        return () => {
            // console.log("Executes before next useEffect");
            clearInterval(intervalID.current);
        };
    });

    return <p>Current time: {time.toLocaleTimeString()}</p>;
}

// import React, { Component } from "react";

// export default class Clock extends Component {
//     state = {
//         time: new Date(),
//     };

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//             this.setState({ time: new Date() });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         console.log("Clock unmount");
//         clearInterval(this.intervalId);
//     }

//     render() {
//         return <p>Current time: {this.state.time.toLocaleTimeString()}</p>;
//     }
// }

// useEffect
// 1. Обновился state, props
// 2. На первый рендер  массив зависмостей пустой []
// 3. Cледит хуком  за куском state массив зависмостей [time]
// 4. Когда копонент исчез из DOM нужно вернуть из useEffect функию которая выполниться при вызове следующего useEffect - без массива зависимостей
