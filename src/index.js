import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import MainSPA from './modules/containers/MainSPA';

import initialState from './initialState';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainSPA />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
