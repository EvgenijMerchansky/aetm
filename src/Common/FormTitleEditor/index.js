import React from 'react';
import { Link } from 'react-router-dom'

const FormTitleEditor = ({sort}) => {
    return (
        <p className="title-editor">
            <Link to="/" className="back-link">
                <i className="fa fa-arrow-circle-left arr-back-align"/>
                Back
            </Link>
            <i className={`fa fa-long-arrow-${sort ? 'up' : 'down'} arr-custom` }/>
            Editor
        </p>
    )
};

export default FormTitleEditor;