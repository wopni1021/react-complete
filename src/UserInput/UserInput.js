import React from 'react';

const userInput = (props) => {
    return <input value={props.name} onChange={props.changeValue} style={props.style}></input>
}

export default userInput;