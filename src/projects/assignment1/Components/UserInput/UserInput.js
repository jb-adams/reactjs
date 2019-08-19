import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <label for="input">Username:</label>
            <input 
                type="text"
                onChange={props.onChange}
                value={props.username} />
        </div>
    )
}

export default UserInput