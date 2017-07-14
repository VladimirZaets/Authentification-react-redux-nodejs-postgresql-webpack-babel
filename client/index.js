import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router';
import App from './components/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import history from './history';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);