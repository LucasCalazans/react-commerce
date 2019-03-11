import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

module.hot && module.hot.accept();

ReactDOM.render(
    <Router>
        <Route path="/" exact component={App} />
    </Router>,
    document.getElementById('main'),
);
