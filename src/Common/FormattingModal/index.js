import React, { Component } from 'react';
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
                <div className="numeric">
                    <input
                        id="numeric"
                        type="checkbox"
                        checked={this.state.numeric}
                        onClick={() => {
                            this.saveCheckValue('numeric')
                        }}
                    />
                    <label htmlFor="numeric">
                        Numeric
                    </label>
                    <select
                        type="select"
                        className="select-field"
                    >
                        <option>
                            Float
                        </option>
                        <option>
                            Money
                        </option>
                        <option>
                            Accounting
                        </option>
                    </select>
                </div>
                <div className="plain-text">
                    <input
                        id="plainText"
                        type="checkbox"
                        checked={this.state.plainText}
                        onClick={() => {
                            this.saveCheckValue('plainText')
                        }}
                    />
                    <label htmlFor="plainText">
                        Plain text
                    </label>
                </div>
                <div className="date">
                    <input
                        id="date"
                        type="checkbox"
                        checked={this.state.date}
                        onClick={() => {
                            this.saveCheckValue('date')
                        }}
                    />
                    <label htmlFor="date">
                        Date
                    </label>
                </div>
            </div>
        )
    }
}

export default FormatingModal;