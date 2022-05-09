<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Http\Request;

class LatestPostsController extends Controller
{
    public function __invoke()
    {
        return inertia('Posts/Latest',[
            'posts' => Post::latest()->with('user')->withCount(['views','comments'])->paginate(),
            'categories' => PostCategory::get(),
            'users'  => auth()->user()->attachFollowStatus(User::limit(5)->withoutAuth()->get())->toArray()
        ]);
    }
}
