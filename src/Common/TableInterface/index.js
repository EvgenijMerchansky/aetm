import React from 'react';

const TableInterface = ({sortBy}) => {
    return (
        <tr className="interface-row">
            <td>
                <button
                    className="sorting-name"
                    onClick={() => {sortBy('name')}}
                >
                    name
                </button>
            </td>
            <td>
                <button
                    className="sorting-lname"
                    onClick={() => {sortBy('lname')}}
                >
                    Last name
                </button>
            </td>
            <td>
                <button
                    className="sorting-age"
                    onClick={() => {sortBy('age')}}
                >
                    Age
                </button>
            </td>
            <td>
                <button
                    className="sorting-date"
                    onClick={() => {sortBy('age')}}
                >
                    Date
                </button>
            </td>
        </tr>
    )
};

export default TableInterface;