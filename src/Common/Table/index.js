import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import ToolBar from '../ToolBar';
import TableInterface from '../TableInterface';
import FormTitleEditor from '../FormTitleEditor';

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
                <FormTitleEditor sort={sort} />
                <ToolBar/>
                <table className="table">
                    <tbody>
                    <TableInterface sortBy={this.sortBy} />
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