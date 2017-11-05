import React, { Component } from 'react';
import './style.css';
import FormatingModal from '../FormattingModal';
import FontSizeModal from '../FontSizeModal';
import PrintModal from '../PrintModal';

class ToolBar extends Component {
    constructor() {
        super();

        this.state = {
            formattingModal: false,
            fontSizeModal: false,
            printModal: false,
        }
    }

    showModal = (modalType) => {
        if (!this.state[modalType]) {
            this.setState({
                [modalType]: true,
            })
        } else {
            this.setState({
                [modalType]: false,
            })
        }
    };

    render = () => {
        const {formattingModal, fontSizeModal, printModal} = this.state;

        return (
            <div className="toolbar">
                {formattingModal && <FormatingModal/>}
                {fontSizeModal && <FontSizeModal/>}
                {printModal && <PrintModal/>}
                <button
                    className="interface-btn"
                    title="Merge group rows"
                >
                    <i className="fa fa-th-large"/>
                </button>
                <button
                    className="interface-btn"
                    title="Delete bunch of rows"
                >
                    <i className="fa fa-times"/>
                </button>
                <button
                    className="interface-btn"
                    title="Align center"
                >
                    <i className="fa fa-align-center"/>
                </button>
                <button
                    className="interface-btn"
                    title="Align justify"
                >
                    <i className="fa fa-align-justify"/>
                </button>
                <button
                    className="interface-btn"
                    title="Align left"
                >
                    <i className="fa fa-align-left"/>
                </button>
                <button
                    className="interface-btn"
                    title="Align right"
                >
                    <i className="fa fa-align-right"/>
                </button>
                <button
                    className="interface-btn"
                    title="Formatting for rows/columns"
                    onClick={() => {
                        this.showModal('formattingModal')
                    }}
                >
                    <i className={`fa ${formattingModal ? `fa-times`:`fa-list-alt`}`}/>
                </button>
                <button
                    className="interface-btn"
                    title="Font"
                >
                    <i className="fa fa-font"/>
                </button>
                <button
                    className="interface-btn"
                    title="Font size"
                    onClick={() => {
                        this.showModal('fontSizeModal')
                    }}
                >
                    <i className={`fa ${fontSizeModal ? `fa-times`:`fa-text-height`}`}/>
                </button>
                <button
                    className="interface-btn"
                    title="Bold text"
                >
                    <i className="fa fa-bold"/>
                </button>
                <button
                    className="interface-btn"
                    title="Italic text"
                >
                    <i className="fa fa-italic"/>
                </button>
                <button
                    className="interface-btn"
                    title="Underline text"
                >
                    <i className="fa fa-underline"/>
                </button>
                <button
                    className="interface-btn"
                    title="Zoom in"
                >
                    <i className="fa fa-search-plus"/>
                </button>
                <button
                    className="interface-btn"
                    title="Zoom out"
                >
                    <i className="fa fa-search-minus"/>
                </button>
                <button
                    className="custom interface-btn"
                    title="Print"
                    onClick={() => {
                        this.showModal('printModal')
                    }}
                >
                    <i className={`fa fa-print`}/>
                </button>
            </div>
        )
    }
}

export default ToolBar;