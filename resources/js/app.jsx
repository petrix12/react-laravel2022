import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

if (document.getElementById('app')) {
    ReactDOM.render(<App nombre/>, document.getElementById('app'));
}
