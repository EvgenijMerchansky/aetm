import React, { Component } from 'react';
import Form from './Form';
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
                        <Route exact path="/" component={Form}/>
                        <Route path="/table" component={Table}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Common;