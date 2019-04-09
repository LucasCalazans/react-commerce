import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

module.hot && module.hot.accept();

ReactDOM.render(
    <Router>
        <Switch>
            <App>
                <Route path="/" exact component={Home} />
            </App>
        </Switch>
    </Router>,
    document.getElementById('main'),
);
