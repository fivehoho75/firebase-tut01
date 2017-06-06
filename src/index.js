import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import registerServiceWorker from 'registerServiceWorker';
import firebase from 'firebase';
import firebaseConfig from 'config/firebase';
import reduxStore from 'config/reduxStore';
import { browserHistory } from 'react-router';

firebase.initializeApp(firebaseConfig);
const store = reduxStore();
const render = (Component) => {
    ReactDOM.render(<Root store={store} history={browserHistory}/>, document.getElementById('root'));
}

registerServiceWorker();

render(Root);

if ( module.hot ) {
    module.hot.accept('containers/Root', () => {
        const NextRoot = require('containers/Root').default;
        render(NextRoot);
    });
};