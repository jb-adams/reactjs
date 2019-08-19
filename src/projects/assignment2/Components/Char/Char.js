import React from 'react';
import ReactDOM from 'react-dom';
import './Char.css';

const Char = (props) => {

    const pStyle = {color: "#6B5B95"};

    return (
        <div className="Char col-lg-2" onClick={props.onClick}>
            <p style={pStyle}>{props.char}</p>
        </div>
    )
}

export default Char;