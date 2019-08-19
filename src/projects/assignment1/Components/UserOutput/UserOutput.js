import React from 'react';

const UserOutput = props => {

    return (
        <div>
            <p>Username: {props.username}</p>
            <p>{props.par1}</p>
            <p>{props.par2}</p>
        </div>
    )
}

export default UserOutput;