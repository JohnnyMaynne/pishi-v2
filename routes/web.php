<?php

use App\Http\Controllers\CommentsController;
use App\Http\Controllers\EditorsController;
use App\Http\Controllers\FavouritePostsController;
use App\Http\Controllers\FavouritesController;
use App\Http\Controllers\FollowsController;
use App\Http\Controllers\LatestPostsController;
use App\Http\Controllers\PopularPostsController;
use App\Http\Controllers\PostCategoriesController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\RecentPostsController;
use App\Http\Controllers\UserNotificationsController;
use App\Http\Controllers\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    // posts
    Route::get('latest', LatestPostsController::class)->name('posts.latest');
    Route::get('popular', PopularPostsController::class)->name('posts.popular');
    Route::get('favourite', FavouritePostsController::class)->name('posts.favourite');
    Route::get('recent', RecentPostsController::class)->name('posts.recent');

    // posts category
    Route::get('categories', [PostCategoriesController::class,'index'])->name('categories.index');
    Route::get('categories/{category:slug}', [PostCategoriesController::class,'show'])->name('categories.show');

    // profile
    Route::prefix('user')->group(function () {
        Route::get('/', [ProfilesController::class,'posts'])->name('user.posts');
        Route::get('comments', [ProfilesController::class,'comments'])->name('user.comments');
        Route::get('followers', [ProfilesController::class,'followers'])->name('user.followers');
        Route::get('followings', [ProfilesController::class,'followings'])->name('user.followings');
        Route::get('black-list', [ProfilesController::class,'blackList'])->name('user.black-list');
        Route::get('statistics', [ProfilesController::class,'statistics'])->name('user.statistics');
    });

    // user
    Route::get('{user:slug}', UsersController::class)->name('user.show');

    // user notifications
    Route::get('notifications', [UserNotificationsController::class,'index'])->name('notifications.index');

    // comments
    Route::post('comments/{post:uuid}', CommentsController::class)->name('comments.store');

    // editor
    Route::get('editor/{user:slug}/{post:uuid}', [EditorsController::class,'show'])->name('editor.show');
    Route::put('editor/{post:uuid}', [EditorsController::class,'update'])->name('editors.update');

    // follows
    Route::post('follows/{user}', FollowsController::class)->name('follow.store');

    // posts
    Route::get('{user:slug}/{post:uuid}', PostsController::class)->name('post.show');

    // favourites
    Route::post('favourites', FavouritesController::class)->name('favourites.invoke');
});
