import React from 'react';
import mock from '../mock'

const Numeric = ({numeric, checkValue}) => {
    return (
        <div className="numeric">
            <input
                id="numeric"
                type="checkbox"
                checked={numeric}
                onClick={() => {
                    checkValue('numeric')
                }}
            />
            <label htmlFor="numeric">
                Numeric
            </label>
            <select
                type="select"
                className="select-field"
            >
                {
                    mock.map((item, index) => <option key={index}>{item}</option>)
                }
            </select>
        </div>
    )
};

export default Numeric;