import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import CONFIG from './config';
import dependencies from './dependencies';

dependencies.register('config', CONFIG);

export default class App extends React.Component {
    getChildContext() {
        return dependencies;
    }

    render() {
        return <Header/>;
    }
};
App.childContextTypes = {
    data: PropTypes.object,
    get: PropTypes.func,
    register: PropTypes.func
};