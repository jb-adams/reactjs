import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {id: 'abc1', name: 'Jeremy', age: 29},
            {id: 'def2', name: 'Samantha', age: 28},
            {id: 'ghi3', name: 'Graeme', age: 30}
        ],
        showPersons: false
    }
        // state is a reserved attribute in classes that extend Component
        // use function-based React components as often as possible,
        // use class-based React components when you need to manage states
        // if state changes, it will re-render the DOM automatically
    
    /* deprecated method
    switchNameHandler = (newName) => {
        // DON'T CHANGE STATE LIKE THIS this.state.persons[0].name = "Maximilian";
        
        // use the setState method, and the new object passed to the method
        // will merge with the original state
        // this is the default way of modifying state, but state can also be
        // changed using React Hooks
        this.setState({"persons": [
            {name: newName, age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 27}
        ]})
    }
    */

    nameChangedHandler = (idx, event) => {
        // const personsState = this.state.persons.slice(); // copies full array
        const personsState = [...this.state.persons];
        personsState[idx].name = event.target.value;
        this.setState(personsState);
    }

    deletePersonHandler = (personIndex) => {
        const personsState = [...this.state.persons];
        personsState.splice(personIndex, 1);
        this.setState({persons: personsState});
    }

    togglePersonsHandler = (event) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        // inline css styles can be added via a javascript object
        // how to add dynamic styles, like hover, clicked, etc
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            // we can use the map method on a list of data, to produce a list
            // of JSX elements

            // use the 'key' property for JSX to uniquely identify them,
            // makes it easier for React to re-render the DOM on key changes
            persons = (
                <div>
                    {this.state.persons.map((person, i) => {
                        return (
                            <Person 
                                name={person.name}
                                age={person.age} 
                                changed={this.nameChangedHandler.bind(this, i)}
                                click={this.deletePersonHandler.bind(this, i)}
                                key={person.id}>
                            </Person>
                        )
                    })}
                </div>
            );

            // change style dynamically based on the state of showPersons
            style.backgroundColor = 'red';
        }

        // dynamically set classes based on state
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        )
    }
}

export default App;