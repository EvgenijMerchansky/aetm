import React, { Component } from 'react';
import './style.css';

import mock from './mock';

class FontSizeModal extends Component {
    render = () => {
        return (
            <div className="font-size-block">
                <p>choose font-size:</p>
                <select>
                    {
                        mock.map((item, index) => <option key={index}>{item}</option>)
                    }
                </select>
            </div>
        )
    }
}

export default FontSizeModal;