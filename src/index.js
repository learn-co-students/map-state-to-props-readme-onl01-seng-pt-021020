import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */

import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, /* code change */
  document.getElementById('root')
);

//Using the <Provider> component provided by the React Redux library, we gave our components the ability to be connected to the store.
// However, we don't want every component re-rendering in response to every change in the state. So the React Redux library requires us to specify which changes to the store's state should prompt a re-render of the application.
// We will specify this with the connect() function.
