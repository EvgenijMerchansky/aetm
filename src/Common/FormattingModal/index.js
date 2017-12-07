import React, { Component } from 'react';
import Numeric from './Numeric';
import PlainText from './PlainText';
import Date from './Date';
import './style.css';

class FormatingModal extends Component {
    constructor () {
        super();

        this.state = {
            numeric: false,
            plainText: false,
            date: false,
        }
    }

    saveCheckValue = (format) => {
        for (let field in this.state) {
            if (field === format) {
                this.setState({
                    [field]: true
                })
            } else {
                this.setState({
                    [field]: false
                })
            }
        }
    };

    render = () => {
        return (
            <div className="formating-modal">
                <Numeric
                    numeric={this.state.numeric}
                    checkValue={this.saveCheckValue}
                />
                <PlainText
                    plainText={this.state.plainText}
                    checkValue={this.saveCheckValue}
                />
                <Date
                    date={this.state.date}
                    checkValue={this.saveCheckValue}
                />
            </div>
        )
    }
}

export default FormatingModal;