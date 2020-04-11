import React from 'react';
import Dataprovider from './dataprovider.js';

export default class App extends React.Component {
    render() {
        return (
            <Dataprovider render={data => <p>The data is here!</p>}/>
        );
    }
}
