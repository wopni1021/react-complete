import React from 'react';

const validation = (props) => {
    let validationText = null;
    if (props.input.length > 10) {
        validationText =  <p>text too long</p>;
    }
    else if (props.input.length < 3) {
        validationText =  <p>text too short</p>;
    }
    return validationText;
}

export default validation;