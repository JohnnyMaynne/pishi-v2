<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;

class CommentsController extends Controller
{
    public function __invoke(Post $post, Comment $comment)
    {
//        $comment->user_id = auth()->user()->id;
//        $comment->commentable()->associate($post);
//        $comment->body = request('body');
//        $comment->save();

        return redirect()->back();
    }
}
