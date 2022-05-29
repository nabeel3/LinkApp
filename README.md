<br>
<a href="https://larasoft.io/assets/img/logo-colour.webp" target="_blank">


### composer

 Run `composer install` to install dependencies
 Run `php artisan migrate` to migrate database
 Run `php artisan storage:link` to storage link
 Run `php artisan serve` to start the server


### npm

9. Run `npm install` to install dependencies
10. Run `npm run dev` to compile assets

### env

 Create .env under linkAppFrontend folder and create varible a `VITE_APP_ROOT_API="YOUR_FRONTEND_URL"`

### vite.config.js

add laravel backedn url  
 server: {
    proxy: {
      '/api': {
           target: 'YOUR_LARAVEL_BACKEND_URL',
           changeOrigin: true,
           secure: false,      
           ws: true,
       }
  }
  }

