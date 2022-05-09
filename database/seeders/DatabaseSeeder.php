<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // admin
        User::create([
            'name' => 'Johnny Maynne',
            'slug' => 'johnny-maynne',
            'email' => 'johnnymaynne@gmail.com',
            'password' => bcrypt(123123123)
        ]);

        // users
        User::factory(100)->create();

        // posts
        Post::factory(1000)->create();

        // posts categories
        foreach (config('categories') as $category) {
            PostCategory::create([
                'title' => $category['title'],
                'slug' => Str::slug($category['title']),
                'icon' => $category['icon'],
                'color' => $category['color'],
            ]);
        }
    }
}
