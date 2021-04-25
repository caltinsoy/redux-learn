import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';

import { Provider } from 'react-redux';

const store = createStore(allReducers
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // on browser you can see your state with this param !

//In nornally , createStore method takes just 1 reducer as a parameter , but the depend on your projects , it takes a number so that you can not use all reducers in createStore
//We need to combined them and than merged to store ! we used index.js in reducers 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
