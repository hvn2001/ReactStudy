import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <h1>
                {this.props.text}
            </h1>
        );
    }
};
Title.propTypes =
    {
        text: PropTypes.string
    };

Title.defaultProps =
    {
        text: 'Some default meaningful value'
    };
