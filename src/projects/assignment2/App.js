import React, { Component } from 'react';
import Validation from './Components/Validation/Validation';
import Char from './Components/Char/Char';
import './App.css';

class App extends Component {
    state = {
        inputText: "",
        inputLength: 0,
        minLength: 5
    }

    textChangeListener = (event) => {
        const text = event.target.value;
        const newLength = text.length;
        this.setState({inputText: text, inputLength: newLength});
    }

    deleteCharListener = (charIndex, event) => {
        let newTextArr = this.state.inputText.split('');
        newTextArr.splice(charIndex, 1);
        let newText = newTextArr.join("");
        let newLength = newText.length;
        this.setState({inputText: newText, inputLength: newLength});
    }

    render() {
        return (
            <div className="container">
                <h1>Assignment 2</h1>
                <label for="text">Enter text:</label>
                <input 
                    id="text"
                    type="text"
                    placeholder="text goes here"
                    value={this.state.inputText}
                    onChange={this.textChangeListener}>
                </input>
                <p id="length">Input Length: {this.state.inputLength}</p>
                <Validation 
                    inputLength={this.state.inputLength}
                    minLength={this.state.minLength}>    
                </Validation>
                <div className="charComponents">
                    <h4>Char Components</h4>
                    <div class="row">
                        {this.state.inputText.split('').map((char, i) => {
                            return (
                                <Char 
                                    char={char}
                                    index={i}
                                    onClick={this.deleteCharListener.bind(this, i)}>
                                </Char>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default App