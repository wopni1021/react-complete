import React from 'react';
import './Char.css';

const char = (props) => {
    return <span className='char' onClick={props.click}>{props.char}</span>;
}

export default char;