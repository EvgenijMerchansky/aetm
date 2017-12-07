import React from 'react';

const Date = ({date, checkValue}) => {
    return (
        <div className="plain-text">
            <input
                id="date"
                type="checkbox"
                checked={date}
                onClick={() => {
                    checkValue('date')
                }}
            />
            <label htmlFor="date">
                Date
            </label>
        </div>
    )
};

export default Date;