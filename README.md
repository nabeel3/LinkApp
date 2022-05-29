<br>
<a href="https://larasoft.io/assets/img/logo-colour.webp" target="_blank">


### composer

1. Run `composer install` to install dependencies
2. Run `php artisan migrate` to migrate database
3. Run `php artisan storage:link` to storage link
4. Run `php artisan serve` to start the server


### npm

5. Run `npm install` to install dependencies
6. Run `npm run dev` to compile assets

### env

7. Create .env under linkAppFrontend folder and create varible a `VITE_APP_ROOT_API="YOUR_FRONTEND_URL"`

### vite.config.js

8. Add laravel backedn url  
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

