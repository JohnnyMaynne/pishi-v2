<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfilesController extends Controller
{
    public function posts()
    {
        return inertia('Profile/Posts',[
            'posts' => auth()->user()->posts()->with('category')->paginate()
        ]);
    }

    public function comments()
    {
        return inertia('Profile/Comments');
    }

    public function followers()
    {
        return inertia('Profile/Followers',[
            'followers' => auth()->user()->followers()->paginate()
        ]);
    }

    public function followings()
    {
        return inertia('Profile/Followings',[
            'followings' => auth()->user()->followings()->paginate()
        ]);
    }

    public function blackList()
    {
        return inertia('Profile/BlackList');
    }

    public function statistics()
    {
        return inertia('Profile/Statistics');
    }
}
