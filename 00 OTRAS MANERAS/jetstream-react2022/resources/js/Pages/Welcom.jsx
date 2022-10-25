import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Welcome = ({canLogin, user, laravelVersion, phpVersion}) => {
    return (
        <div>
            <h1>{ user }</h1>
            <p>Texto de prueba</p>
            <p>{ canLogin }</p>
            <p>{ laravelVersion }</p>
            <p>{ phpVersion }</p>
        </div>
    );
};

export default Welcome;
