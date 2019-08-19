import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
    // changing state using React Hooks
    // use state returns 2 things
    // 1. the state object that has been set
    // 2. a function used to update the state with something else
    // React Hooks doesn't merge state, it actually overwrites state
    // you have to make sure you include all old data when you update state
    // with React Hooks
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Jeremy', age: 29},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    }
    
    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is working now</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    )
}

export default app;