1. Crear proyecto jetstream - livewire
    + $ laravel new prueba --jet
2. Crear base de datos del proyecto
3. $ php artisan migrate
4. En **package.json** eleminar dependencias:
    + "laravel-vite-plugin": "^0.6.0",
    + "vite": "^3.0.0",
5. $ npm install vite laravel-vite-plugin --save-dev
6. $ npm install @vitejs/plugin-react --force
7. $ npm install react@latest react-dom@latest
    + Nota: en caso de problemas:
        + $ npm install react@latest react-dom@latest --force
8. Modificar **vite.config.js**:
    ```js
    import { defineConfig } from 'vite';
    import laravel, { refreshPaths } from 'laravel-vite-plugin';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
        plugins: [
            react(),
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/js/app.js',
                ],
                refresh: [
                    ...refreshPaths,
                    'app/Http/Livewire/**',
                ],
            }),
        ],
    });
    ```
9.  Crear **resources\js\components\App.jsx**:
    ```jsx
    import React from 'react';

    const App = () => {
        return (
            <div>
                <h1>Laravel 9, vite y react</h1>
            </div>
        )
    }

    export default App;
    ```
10. Cambiar nombre de **resources\js\app.js** a **resources\js\app.jsx**.
10. Modificar **resources\js\app.jsx**:
    ```js
    import './bootstrap';

    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';

    import Alpine from 'alpinejs';

    window.Alpine = Alpine;

    Alpine.start();

    if (document.getElementById('app')) {
        ReactDOM.render(<App />, document.getElementById('app'));
    }
    ```
11. Modificar **resources\views\welcome.blade.php**:
    ```php
    <!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <title>Laravel</title>

            <!-- Fonts -->
            <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
            @viteReactRefresh
            @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        </head>
        <body>
            <div id='app'></div>
        </body>
    </html>
    ```
    
## Subir a GitHub:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **react-laravel2022**.
    + **Description**: Ejemplo de una aplicación Laravel con React.js.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/react-laravel2022.git
    + $ git push -u origin main
