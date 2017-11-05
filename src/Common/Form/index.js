import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../../Actions';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: false,
            lname: false,
            age: false,
        };
    }

    submitForm = (e) => {
        e.preventDefault();
        let {name, lname, age} = this.refs;

        const newUser = {
            name: name.value,
            lname: lname.value,
            age: age.value,
            id: Date.now(),
            date: new Date(),
        };

        if (newUser.name === '') {
            this.setState({
                name: true,
            });

            return;
        }

        if (newUser.lname === '') {
            this.setState({
                lname: true,
            });

            return;
        }

        if (newUser.age === '') {
            this.setState({
                age: true,
            });

            return;
        }

        this.props.addUser(newUser);

        this.props.history.push('/table');

    };

    render = () => {
        return (
            <div className="container container-align">
                <div className="col-md-12 title">
                    <h3>User form(create new user)</h3>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form
                            className="form"
                            onSubmit={(e) => this.submitForm(e)}
                        >
                            <label htmlFor="name">
                                Type your name:
                            </label>
                            <input
                                className="field"
                                type="text"
                                ref="name"
                                id="name"
                            /><br/>

                            <label htmlFor="lname">
                                Type your last name:
                            </label>
                            <input
                                className="field"
                                type="text"
                                ref={'lname'}
                                id="lname"
                            /><br/>

                            <label htmlFor="age">
                                Type your age:
                            </label>
                            <input
                                className="field"
                                type="number"
                                ref={'age'}
                                id="age"
                            /><br/>

                            <button
                                type="submit"
                                className="next-button"
                            >
                                Add user
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formState: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addUser
        // ...
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);