import React from "react";

//Arrow function syntax

const HelloWithout = () => {
    return React.createElement(
        'div', 
        {id: 'hello', class: 'DummyClass'},
        React.createElement('h1', null, 'Heloop pp'))
}

export default HelloWithout;