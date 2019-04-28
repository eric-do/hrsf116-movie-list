import App from './components/App.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  Store  from './store/store.js';

var store = Store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('app'));