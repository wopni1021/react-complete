import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return <p className='output'>{props.output}</p>
}

export default userOutput;