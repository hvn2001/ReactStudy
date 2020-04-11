import React from "react";

class Greeting extends React.Component {
    constructor() {
        super();
        console.log("created");
    }

    componentDidMount() {
        console.log("mounted");
    }

    componentWillUnmount() {
        console.log("unmounted");
    }

    static getDerivedStateFromProps(newProps) {
        console.log("props received", newProps);
    }

    render() {
        return (
            <div>
                <span>Hello {this.props.name}!</span>
            </div>
        );
    }
}

export default Greeting;	