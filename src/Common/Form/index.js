import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../../Actions';
import Error from '../Error';
import { ERROR_TEXT } from '../../constants';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            error: false
        };
    }

    disableError = () => {

        setTimeout(() => {
            this.setState({
                error: false,
            });
        }, 1000);
    };

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
                error: true,
            });

            this.disableError();
            return;
        }

        if (newUser.lname === '') {
            this.setState({
                error: true,
            });

            this.disableError();
            return;
        }

        if (newUser.age === '') {
            this.setState({
                error: true,
            });

            this.disableError();
            return;
        }

        this.props.addUser(newUser);

        this.props.history.push('/table');

    };

    render = () => {
        let { error } = this.state;

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
                            {
                                error && <Error errorText={ERROR_TEXT}/>
                            }
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