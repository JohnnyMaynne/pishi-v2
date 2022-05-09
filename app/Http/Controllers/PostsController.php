<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function __invoke(User $user, Post $post)
    {
        views($post)->record();

        return  inertia('Posts/Show',[
            'post' => $post,
            'author' => $user,
            'categories' => PostCategory::get()
        ]);
    }
}
