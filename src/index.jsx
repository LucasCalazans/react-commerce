import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

module.hot && module.hot.accept();

const basename = ENV_MODE === 'production' ? '/react-commerce' : '';

ReactDOM.render(
    <Router basename={basename}>
        <Switch>
            <App>
                <Route path="/" exact component={Home} />
            </App>
        </Switch>
    </Router>,
    document.getElementById('main'),
);
