import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from 'registerServiceWorker';
import firebase from 'firebase';
import firebaseConfig from 'config/firebase';
import reduxStore from 'config/reduxStore';
import { browserHistory } from 'react-router';

firebase.initializeApp(firebaseConfig);
const store = reduxStore();
const render = (Component) => {
    ReactDOM.render(<App store={store} history={browserHistory}/>, document.getElementById('root'));
}

registerServiceWorker();

render(App);

if ( module.hot ) {
    module.hot.accept('containers/App', () => {
        const NextRoot = require('containers/App').default;
        render(NextRoot);
    });
};