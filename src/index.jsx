import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import toggleSearchReducer from './redux/reducers/toggleSearch';

module.hot && module.hot.accept();

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose

const rootReducer = combineReducers({
    toggleSearch: toggleSearchReducer,
});
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const params = process.env.NODE_ENV !== 'development' ? [rootReducer] : [rootReducer, devTool];

const store = createStore(...params);

ReactDOM.render(
    <Router>
        <Switch>
            <Provider store={store}>
                <App>
                    <Route path="/" exact component={Home} />
                </App>
            </Provider>
        </Switch>
    </Router>,
    document.getElementById('main'),
);
