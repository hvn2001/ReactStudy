import React from 'react';
import Header from './Header.jsx';
import {register} from './di.jsx';

register('my-awesome-title', 'React in patterns Above 16,3');

export default class App extends React.Component {
    render() {
        return <Header/>;
    }
};