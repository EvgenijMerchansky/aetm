import React, { Component } from 'react';
import './style.css';

class Error extends Component {

    render = () => {
        let { errorText } = this.props;
        return (
            <p
                className="error"
            >
                {errorText}
            </p>
        )
    }
}

export default Error;