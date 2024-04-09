import React from 'react';
import ReactDOM from 'react-dom';

import 'XP/assets/clear.css';
import 'XP/assets/font.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

if (module.hot && !window.frameElement) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
