<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;

class PostsController extends Controller
{
    public function __invoke(User $user, Post $post)
    {
        views($post)->record();

        $post->makeRecent();

        return  inertia('Posts/Show',[
            'post' => $post->loadCount(['views','comments','favorites']),
            'author' => $user,
            'comments' => $post->comments()->get()->toTree()
        ]);
    }
}
