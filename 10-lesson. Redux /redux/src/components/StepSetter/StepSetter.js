import React from "react";
import { connect } from "react-redux";

import { changeStep } from "../../redux/counterActions";

function StepSetter({ step, options, onChangeStep }) {
    return (
        <div>
            <select
                value={step}
                onChange={(event) => onChangeStep(event.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        step: state.counter.step,
    };
};

let mapDispatchToProps = {
    onChangeStep: changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSetter);
