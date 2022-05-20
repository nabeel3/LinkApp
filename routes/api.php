
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TagController;

Route::get('/test', function(){
    return 1;

});
Route::post('login', [ApiController::class, 'authenticate']);
Route::post('register', [ApiController::class, 'register']);



Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('logout', [ApiController::class, 'logout']);
    Route::get('get_user', [ApiController::class, 'get_user']);
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/{id}', [ProductController::class, 'show']);
    Route::post('create', [ProductController::class, 'store']);
    Route::put('update/{product}',  [ProductController::class, 'update']);
    Route::delete('delete/{product}',  [ProductController::class, 'destroy']);


    Route::post('posts', [PostController::class, 'store']);
    Route::get('posts', [PostController::class, 'index']);
    Route::get('post/{id}', [PostController::class, 'show']);
    Route::put('post/{id}', [PostController::class, 'update']);
    Route::delete('post/{id}', [PostController::class, 'destroy']);



    Route::post('tags', [TagController::class, 'store']);
    Route::get('tags', [TagController::class, 'index']);
    Route::get('tag/{id}', [TagController::class, 'show']);
    Route::put('tag/{id}', [TagController::class, 'update']);
    Route::delete('tag/{id}', [TagController::class, 'destroy']);


    Route::post('/comment/store', 'CommentController@store')->name('comment.add');
    Route::post('/reply/store', 'CommentController@replyStore')->name('reply.add');



});

