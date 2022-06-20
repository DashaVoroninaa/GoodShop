import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components'
import './server'
import { BrowserRouter } from "react-router-dom"
import {Provider} from 'react-redux'
import {store} from './components/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
