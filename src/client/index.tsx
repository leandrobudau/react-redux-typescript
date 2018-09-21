import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { clientReducers } from './reducers';
import { combineReducers } from 'redux';
import { App } from './components';
declare const window: Window & {
    //    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:(a: any): void;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
};
const store = createStore(
    combineReducers({
        client: clientReducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);