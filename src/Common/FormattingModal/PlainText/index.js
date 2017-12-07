import React from 'react';

const PlainText = ({plainText, checkValue}) => {
    return (
        <div className="plain-text">
            <input
                id="plainText"
                type="checkbox"
                checked={plainText}
                onClick={() => {
                    checkValue('plainText')
                }}
            />
            <label htmlFor="plainText">
                Plain text
            </label>
        </div>
    )
};

export default PlainText;