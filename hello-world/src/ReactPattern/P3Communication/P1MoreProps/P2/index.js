import React from 'react';

require('./style.css');

import ReactDOM from 'react-dom';
import SomethingElse from './somethingElse.js';
import Answer from './answer.js';

ReactDOM.render(
    <SomethingElse answer={<Answer/>}/>,
    document.getElementById('root')
);
