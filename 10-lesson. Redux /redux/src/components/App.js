import React from "react";
import Counter from "./Counter";
import StepSetter from "./StepSetter";

let steps = [5, 10, 15, 20];

export default function App() {
    return (
        <div>
            <Counter />
            <StepSetter options={steps} />
        </div>
    );
}
