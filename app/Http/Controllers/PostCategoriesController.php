<?php

namespace App\Http\Controllers;

use App\Models\PostCategory;

class PostCategoriesController extends Controller
{
    public function index()
    {
        return PostCategory::get();
    }

    public function show(PostCategory $category)
    {
        return inertia('Categories/Show',[
            'category' => $category,
            'posts' => $category->posts()->with('user')->withCount(['views','comments'])->paginate()
        ]);
    }
}
