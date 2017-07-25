import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import rootReducer from './App/rootReducer';

// Aside from appReducer, we also need redux-thunk for async actions
// and a script provided by @zalmoxisus/redux-devtools-extension
// for better redux developing experience.
const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore);

const appStore = createStoreWithMiddleware(rootReducer, typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
