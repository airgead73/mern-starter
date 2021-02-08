import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.scss';
__webpack_nonce__ = require('../../_CONFIG/nonce');

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);