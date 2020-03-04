// functional stateless components can also receive props
import React from 'react';

export function Greeting(props) {
    return (<p>{props.greeting}</p>);
}