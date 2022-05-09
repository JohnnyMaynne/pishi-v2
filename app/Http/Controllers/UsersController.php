<?php

namespace App\Http\Controllers;

use App\Models\PostCategory;
use App\Models\User;

class UsersController extends Controller
{
    public function __invoke(User $user)
    {
        return inertia('User/Show',[
            'author' => $user,
            'posts' => $user->posts()->with('user')->withCount(['views','comments'])->paginate(),
            'categories' => PostCategory::get()
        ]);
    }
}
