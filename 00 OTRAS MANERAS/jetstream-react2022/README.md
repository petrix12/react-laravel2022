<div>
    <p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>
    <p align="center">
    <a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
    <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
    <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
    <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
    </p>
</div>

https://github.com/andyyou/react-jetstream-like-demo
https://morioh.com/p/09fabdbef0a5
https://www.youtube.com/watch?v=svziC8BblM0

## Cambio de Vue.js por React.js en Proyecto Laravel Inertia Jetstream
+ https://blog.dij.digital/laravel-jetstream-with-interia-and-react
+ $ laravel new jetstream-react --jet --stack=inertia -n
+ $ php artisan migrate
+ $ npm remove @inertiajs/inertia-vue3 vue
+ $ npm install react react-dom @inertiajs/inertia-react --dev
+ $ npm install @vitejs/plugin-react
+ Configurar **vite.config.js**:
    ```js
    import { defineConfig } from 'vite';
    import laravel from 'laravel-vite-plugin';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
        plugins: [
            laravel({
                input: 'resources/js/app.js',
                refresh: true,
            }),
            react,
        ],
    });
    ```
+ Crear **resources\js\Components\App.jsx**:
    ```jsx
    import React from "react";
    import { render } from 'react-dom';
    import { InertiaApp } from '@inertiajs/inertia-react';

    const el = document.getElementById('app');

    const App = () => {
        //return (<div>Laravel Jetstream with React</div>);
        return (<InertiaApp
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={name => require(`./Pages/${name}`).default}
        />);
    }

    export default App

    if (el) {
        render(<App />, el);
    }
    ```
+ Modificar **resources\js\app.js**:
    ```js
    import './bootstrap';
    import { InertiaProgress } from '@inertiajs/progress';
    import './Components/App';
    ```
+ Crear **resources\js\Pages\Welcom.jsx**:
    ```jsx
    import React from 'react';

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
    ```
+ mmm





    ```php
    ≡
    ≡
    ```














*******************************
## Integración de React.js e Inertia en Proyecto Laravel Jetstream Livewire
### Creación del proyecto Laravel
+ Documentación: https://inertiajs.com/server-side-setup
+ Tutorial: https://www.youtube.com/watch?v=Wnfu0p-G9FM&t=1981s
1. Crear proyecto Laravel Jetstream Livewire:
    + $ laravel new inertia-react-jetstream2022 --jet
2. Crear base de datos y ejecutar las migraciones:
    + $ php artisan migrate

### Instalación de Inertia y React del lado del servidor
1. Instalar **Inertia**:
    + $ composer require inertiajs/inertia-laravel
2. Crear **resources\views\app.blade.php**:
    ```php
    ```  
3. Configurar middleware de inertia:
    + $ php artisan inertia:middleware
4. Registrar el middleware creado en el Kernel (app\Http\Kernel.php):
    ```php
    ≡
    'web' => [
        // ...
        \App\Http\Middleware\HandleInertiaRequests::class,
    ],
    ≡
    ```

### Instalación de React del lado del cliente
1. Instalar dependencias de Reac.js:
    + $ npm install @inertiajs/inertia @inertiajs/inertia-react
2. Modificar el archivo principal de JavaScript del proyecto (resources\js\app.js) para poder inicializar React:
    ```js
    ≡
    import React from 'react'
    import { render } from 'react-dom'
    import { createInertiaApp } from '@inertiajs/inertia-react'

    createInertiaApp({
        resolve: name => require(`./Pages/${name}`),
        setup({ el, App, props }) {
            render(<App {...props} />, el)
        },
    })
    ```
3. Instalar el indicador de progreso:
    + $ npm install @inertiajs/progress
    + **Nota**: para poder luego utilizar el progress bar:
        ```js
        ≡
        import { InertiaProgress } from '@inertiajs/progress'

        InertiaProgress.init()
        ≡
        ```
4. Instalar Babel (para utilizar jsx):
    + $ npm install @babel/plugin-syntax-dynamic-import     
5. Crear **.babelrc**:
    ```babelrc
    {
        "plugins": ["@babel/plugin-syntax-dynamic-import"]
    }
    ```
6. Crear directorio **resources\js\Pages** para alojar los componentes de React.
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
9. Ejecutar:
    + $ npm install react
    + $ npm install react-dom
    + $ npm install
    + $ npm install vite laravel-vite-plugin --save-dev
    + $ npm install @vitejs/plugin-react --force
    <!-- + $ npm install react@latest react-dom@latest
    + Nota: en caso de problemas:
        + $ npm install react@latest react-dom@latest --force -->


11. En **package.json** eleminar dependencias:
    + "laravel-vite-plugin": "^0.6.0",
    + "vite": "^3.0.0",
12. $ npm install vite laravel-vite-plugin --save-dev
13. $ npm install @vitejs/plugin-react --force
14. $ npm install react@latest react-dom@latest
    + Nota: en caso de problemas:
        + $ npm install react@latest react-dom@latest --force


### Probar integración de React con Laravel Inertia
1. Crear ruta para probar React (routes\web.php):
    ```php
    ≡
    Route::inertia('/test', 'TestComponent');
    ```
2. Crear componente **resources\js\Pages\TestComponent.js**:
    ```js
    import React from 'react';

    const TestComponent = () => {
        return (
            <div>
                <h1>Prueba Inertia React</h1>
            </div>
        )
    }

    export default TestComponent;
    ```
3. mmmm






    ```php
    ≡
    ≡
    ```














********************
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
