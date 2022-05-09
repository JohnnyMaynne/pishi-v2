<?php

namespace App\Http\Controllers;

use App\Models\PostCategory;
use Illuminate\Http\Request;

class PostCategoriesController extends Controller
{
    public function __invoke(PostCategory $category)
    {
        return inertia('Categories/Show',[
            'categories' => PostCategory::get(),
            'category' => $category,
            'posts' => $category->posts()->with('user')->withCount(['views','comments'])->paginate()
        ]);
    }
}
