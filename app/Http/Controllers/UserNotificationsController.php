<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserNotificationsController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $noty = $user->notifications()->latest()->paginate();

        $user->unreadNotifications->markAsRead();

        return $noty;
    }
}
