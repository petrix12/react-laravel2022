import React from 'react';

const App = (props) => {
    const { nombre = "Leticia" } = props;
    return (
        <div>
            <h1>Laravel 9, vite y react</h1>
            <p>{ nombre }</p>
        </div>
    )
}

export default App;
