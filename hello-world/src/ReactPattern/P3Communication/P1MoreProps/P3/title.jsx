import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {

    render() {
        return (
            <h1>
                {this.props.text}
                {this.props.children}
            </h1>
        );
    }
};
Title.propTypes =
    {
        text: PropTypes.string,
        children: PropTypes.any

    };

Title.defaultProps =
    {
        text: PropTypes.string
    };