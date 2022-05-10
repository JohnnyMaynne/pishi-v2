<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserNotificationsController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $user->unreadNotifications->markAsRead();

        return $user->notifications()->latest()->paginate();
    }
}
