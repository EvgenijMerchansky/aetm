import React, { Component } from 'react';
import './style.css';
import FormatingModal from '../FormattingModal';
import FontSizeModal from '../FontSizeModal';
import PrintModal from '../PrintDocumentModal';
import mock from './mock';

class ToolBar extends Component {
    constructor() {
        super();

        this.state = {
            formattingModal: false,
            fontSizeModal: false,
            printModal: false,
            currentModalName: ''
        }
    }

    showModal = (modalType) => {
        if (!this.state[modalType]) {
            this.setState({
                [modalType]: true,
                currentModalName: modalType
            })
        } else {
            this.setState({
                [modalType]: false,
                currentModalName: ''
            })
        }
    };

    render = () => {
        const {formattingModal, fontSizeModal, printModal, currentModalName} = this.state;

        return (
            <div className="toolbar">
                {formattingModal && <FormatingModal/>}
                {fontSizeModal && <FontSizeModal/>}
                {printModal && <PrintModal/>}
                {
                    mock.map(elem => {
                        return (
                            <button
                                key={elem.id}
                                id={elem.id}
                                className="interface-btn"
                                title={elem.title}
                                onClick={elem.callIdentificator ?
                                    () => this.showModal(elem.callIdentificator) : null
                                }
                            >
                                <i
                                    className={`fa ${
                                        currentModalName === elem.callIdentificator ?
                                        elem.helpClass : elem.buttonIco
                                    }`}
                                />
                            </button>
                        )
                    })
                }
            </div>
        )
    }
}

export default ToolBar;