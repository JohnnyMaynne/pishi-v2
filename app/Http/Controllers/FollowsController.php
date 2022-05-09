<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class FollowsController extends Controller
{
    public function __invoke(User $user)
    {
        auth()->user()->toggleFollow($user);
    }
}
