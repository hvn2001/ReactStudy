import React from 'react';
import PropTypes from 'prop-types';
import enhanceComponent from './enhanceComponent.jsx';


var Content = (props) => <p>I am {props.name}</p>;
var EnhancedContent = enhanceComponent(Content);

Content.propTypes = {
    name: PropTypes.string
};

export default class App extends React.Component {
    render() {
        return <EnhancedContent name='Content component'/>;
    }
};