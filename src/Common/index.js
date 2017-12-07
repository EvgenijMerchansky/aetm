import React, { Component } from 'react';
import FormContainer from './FormContainer';
import Table from './Table';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

class Common extends Component {

    render = () => {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={FormContainer}/>
                        <Route path="/table" component={Table}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Common;