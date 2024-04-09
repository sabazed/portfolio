import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import 'XP/assets/clear.css';
import 'XP/assets/font.css';
import App from './App';

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

if (module.hot && !window.frameElement) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
