<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class EditorsController extends Controller
{
    public function __invoke(User $user, Post $post)
    {
        return inertia('Editor/Show',[
            'user' => $user,
            'post' => $post,
        ]);
    }
}
