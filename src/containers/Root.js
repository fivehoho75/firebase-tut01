import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';
import PropTypes from 'prop-types';

class Root extends Component {
    render() {
    const { store, history } = this.props;
    return (
        <Provider store={store}>
            <Router routes={routes} history={history} createElement={this.createElement}/>
        </Provider>
    );
  }
}

Root.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
}

export default Root;
