<?php

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
    Route::get('/latest', function () {
        return Inertia::render('PostsLatest');
    })->name('posts.latest');

    Route::get('/popular', function () {
        return Inertia::render('PostsPopular');
    })->name('posts.popular');

    Route::get('/favourite', function () {
        return Inertia::render('PostsFavourite');
    })->name('posts.favourite');

    Route::get('/recent', function () {
        return Inertia::render('PostsRecent');
    })->name('posts.recent');


    // admin
    Route::get('/admin', function () {
        return Inertia::render('Admin/Posts');
    })->name('admin.posts');

    Route::get('/admin/comments', function () {
        return Inertia::render('Admin/Comments');
    })->name('admin.posts');

    Route::get('/admin/black-list', function () {
        return Inertia::render('Admin/BlackList');
    })->name('admin.black-list');

    Route::get('/admin/statistics', function () {
        return Inertia::render('Admin/Statistics');
    })->name('admin.statistics');

    Route::get('/admin/profile', function () {
        return Inertia::render('Admin/Profile');
    })->name('admin.profile');
});
