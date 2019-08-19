import React from 'react';
import ReactDOM from 'react-dom';

const Validation = (props) => {

    let message = <p>Text too short</p>;
    if (props.inputLength >= props.minLength) {
        message = <p>Text long enough</p>;
    }

    return (
        <div>
            <h4>Validation Component</h4>
            {message}
        </div>
    )
}

export default Validation;