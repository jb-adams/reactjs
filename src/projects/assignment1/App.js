import React, { Component } from 'react';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import './App.css';

class App extends Component {
    state = {
        users: [
            {"name": "Jeremy"},
            {"name": "Samantha"},
            {"name": "Graeme"}
        ]
    }

    nameChangeHandler = (idx, event) => {
        let newState = {users: [...this.state.users]};
        newState.users[idx] = {"name": event.target.value};
        this.setState(newState);
    }

    render() {
        return (
            <div className="App">
                <h1>Assignment 1</h1>

                <div className="Tile">
                    <UserInput 
                        username={this.state.users[0].name} 
                        onChange={this.nameChangeHandler.bind(this, 0)} />
                    <UserOutput 
                        username={this.state.users[0].name}
                        par1="Lorem Ipsum 1"
                        par2="Lorem Ipsum 2" />
                </div>

                <div className="Tile">
                    <UserInput 
                        username={this.state.users[1].name} 
                        onChange={this.nameChangeHandler.bind(this, 1)} />
                    <UserOutput
                        username={this.state.users[1].name}
                        par1="Lorem Ipsum A"
                        par2="Lorem Ipsum B" />
                </div>

                <div className="Tile">
                    <UserInput 
                        username={this.state.users[2].name} 
                        onChange={this.nameChangeHandler.bind(this, 2)} />
                    <UserOutput 
                        username={this.state.users[2].name}
                        par1="Lorem Ipsum X"
                        par2="Lorem Ipsum Y" />
                </div>

            </div>
        )
    }
}

export default App