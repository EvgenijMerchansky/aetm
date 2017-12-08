import React from 'react';
import './style.css';

const Error = ({errorText}) => {

    return (
        <p
            className="error"
        >
            {errorText}
        </p>
    )
};

export default Error;