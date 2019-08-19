import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is working now</p>
            </div>
        )
        
        // The above syntax is favored
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    }
}

export default App;