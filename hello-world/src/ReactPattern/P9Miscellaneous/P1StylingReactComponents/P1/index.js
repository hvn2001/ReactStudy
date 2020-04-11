import React from 'react';
import ReactDOM from 'react-dom';

const inlineStyles = {
    color: 'red',
    fontSize: '10px',
    marginTop: '2em',
    'border-top': 'solid 1px #000'
};

const theme = {
    fontFamily: 'Georgia',
    color: 'blue'
};
const paragraphText = {
    ...theme,
    fontSize: '20px'
};

function App() {
    return (
        <section>
            <h1 className='title'>Styling</h1>
            <h2 style={inlineStyles}>Inline styling</h2>
            <p style={paragraphText}>This is a paragraph here!</p>
        </section>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
