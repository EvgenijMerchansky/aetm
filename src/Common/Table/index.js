import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import ToolBar from '../ToolBar';
import { Link } from 'react-router-dom'

class Table extends Component {
    constructor() {
        super();

        this.users = [];
        this.state = {
            sortByName: false,
        }
    }

    componentWillMount () {
        if (this.props.tableState) {

            this.users = this.props.tableState
        }
    }

    changeField = (id, fieldName, query) => {

        this.users.forEach(elem => {
            if (elem.id === id) {

                elem[fieldName] = query;
            }
        })
    };

    sortBy = (fieldName) => {
        if (this.state.sort === false) {

            function compare (a, b) {
                if (a[fieldName] < b[fieldName])
                    return -1;

                if (a[fieldName] > b[fieldName])
                    return 1;
            }

            this.users.sort(compare);
            this.setState({ sort: true, });

        } else {

            this.setState({ sort: false, });
            this.users.reverse();
        }

        this.forceUpdate();
    };

    render = () => {
        let { sort } = this.state;

        return (
            <div>
                <p className="title-editor">
                    <Link to="/" className="back-link">
                        <i className="fa fa-arrow-circle-left arr-back-align"/>
                        Back
                    </Link>
                    <i className={`fa fa-long-arrow-${sort ? 'up' : 'down'} arr-custom` }/>
                    Editor
                </p>
                <ToolBar/>
                <table className="table">
                    <tbody>
                    <tr className="interface-row">
                        <td>
                            <button
                                className="sorting-name"
                                onClick={() => {this.sortBy('name')}}
                            >
                                name
                            </button>
                        </td>
                        <td>
                            <button
                                className="sorting-lname"
                                onClick={() => {this.sortBy('lname')}}
                            >
                                Last name
                            </button>
                        </td>
                        <td>
                            <button
                                className="sorting-age"
                                onClick={() => {this.sortBy('age')}}
                            >
                                Age
                            </button>
                        </td>
                        <td>
                            <button
                                className="sorting-date"
                                onClick={() => {this.sortBy('age')}}
                            >
                                Date
                            </button>
                        </td>
                    </tr>
                    {
                        this.users.map(elem => {
                            return (
                                <tr
                                    key={elem.id}
                                    className="generic-row"
                                >
                                    <td>
                                        <input
                                            type="text"
                                            className="name"
                                            defaultValue={elem.name}
                                            onChange={(e) => {
                                                this.changeField(elem.id, 'name', e.target.value)
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="lname"
                                            defaultValue={elem.lname}
                                            onChange={(e) => {
                                                this.changeField(elem.id, 'lname', e.target.value)
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="age"
                                            defaultValue={elem.age}
                                            onChange={(e) => {
                                                this.changeField(elem.id, 'age', e.target.value)
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="date"
                                            defaultValue={elem.date}
                                            onChange={(e) => {
                                                this.changeField(elem.id, 'date', e.target.value)
                                            }}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tableState: state
    }
};

export default connect(mapStateToProps)(Table);