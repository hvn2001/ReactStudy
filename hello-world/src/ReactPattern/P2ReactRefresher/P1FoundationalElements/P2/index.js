import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting.js';

require('./style.css');

ReactDOM.render(
    <Greeting name="Alice"/>,
    document.getElementById('root')
);
