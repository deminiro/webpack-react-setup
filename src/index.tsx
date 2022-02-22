import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// async/await for babel
import 'regenerator-runtime/runtime';

import './libs/i18n';

import { store } from './libs/redux/store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
