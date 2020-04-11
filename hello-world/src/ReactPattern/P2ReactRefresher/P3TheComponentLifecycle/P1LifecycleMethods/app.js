import React from 'react';
import Greeting from './greeting';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showGreeting: true,
            name: "Alice",
        }

        this.toggle = this.toggle.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    toggle() {
        this.setState(state => ({
            showGreeting: !state.showGreeting,
        }));
    };

    updateName(event) {
        this.setState({
            name: event.target.value,
        });
    };

    render() {
        const greeting = this.state.showGreeting ? (
            <Greeting name={this.state.name}/>
        ) : null;
        return (
            <div>
                <h1 className="heading">Hello React!</h1>
                <p>
                    What's her name? <input onChange={this.updateName}/>
                </p>
                <p>
                    Show Greeting{" "}
                    <input type="checkbox" onChange={this.toggle}/>
                </p>
                {greeting}
            </div>
        );
    }
}

export default App;
