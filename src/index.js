import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// components
import App from './components/App';

// store
import storeFactory from './store';
const store = storeFactory();

// render
window.React = React;
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector(".react-container")
);
