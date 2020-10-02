# Implementación de la autentificación

## Ejecutar el comando make:auth


Para poder crear todo lo necesario para la autentificación de Laravel debemos correr el siguiente comando

```
php artisan make:auth
```

Sin embargo, apartir de Laravel 6 para arriba, cuando ejecutamos el comando php artisan make:auth nos dice que el comando no está definido **(Command «make:auth» is not defined)**. Así que en este tutorial hablaremos con detalle de este cambio en el framework y cómo podemos volver a tener esta funcionalidad en la aplicación.

A partir de Laravel 6 no decidirá por ti con cuál pre-procesador y framework de Javascript y CSS trabajar en tu aplicación. Es por ello que fue movida toda la funcionalidad para el frontend **(scaffolding)** que venía por defecto (Bootstrap y Vue) en el framework a un nuevo paquete Composer oficial llamado laravel/ui.

Para volver a tener la funcionalidad vamos a instalar el nuevo paquete ejecutando:

```
composer require laravel/ui
```

Con ellos ya tendremos disponible los comandos Artisan.

Para agrega la configuración básica solo tenemos que ejecutar uno de estos 3 comandos:

```
php artisan ui bootstrap
php artisan ui vue
php artisan ui react
```

Para agregar la configuración básica incluyendo las vistas para registro y autenticación de usuarios, debemos indicar la opción de --auth al comando correspondiente:

```
php artisan ui bootstrap --auth
php artisan ui vue --auth
php artisan ui react --auth
```

Esta es solo una configuración básica que puedes modificarla según las necesidades de tu proyecto, removiendo o agregando nuevos paquetes a tu archivo package.json

Luego, debes instalar los paquetes NPM con:

```
npm install
```

Finalmente, a través de las instrucciones del archivo webpack.mix.js Webpack compilará tanto los archivos Sass para convertirlos a CSS plano así como el archivo resources/js/app.js, al ejecutar:

```
npm run dev
```

Listo, volvemos a tener la funcionalidad en nuestra aplicación. La ventaja de esta separación a un paquete Composer es abrir la posibilidad de algún momento tener diferentes opciones de frontend para nuestros proyectos sin necesidad de actualizar el framework completo. ¡Ojala!, Jajajaja.