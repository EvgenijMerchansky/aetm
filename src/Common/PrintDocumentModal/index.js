import React, { Component } from 'react';
import './style.css';

class PrintModal extends Component {
    constructor () {
        super();

        this.state = {
            printed: false
        }
    }

    componentDidMount() {
        this.printedMessage();
    }

    printedMessage = () => {
        this.setState({
            printed: true
        });

        setTimeout(() => {
            this.setState({
                printed: false
            });
        }, 1500)
    };

    render = () => {
        let { printed } = this.state;

        return (
            <div className="print-modal" style={{ display: printed ? 'block' : 'none' }}>
                {
                    this.state.printed &&

                    <p className="generic-title">
                        Printed...
                    </p>
                }
            </div>
        )
    }
}

export default PrintModal;