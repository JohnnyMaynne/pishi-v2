<?php

namespace App\Observers;

use App\Models\Comment;

class CommentObserver
{
    public function creating(Comment $comment)
    {
        if(auth()->check())
        {
            $comment->user_id = auth()->user()->id;
            $comment->save();
         }
    }
}
