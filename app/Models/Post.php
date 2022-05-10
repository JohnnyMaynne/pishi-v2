<?php

namespace App\Models;

use App\Traits\HasComments;
use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Overtrue\LaravelFavorite\Traits\Favoriteable;

class Post extends Model implements Viewable
{
    use HasFactory, HasComments, InteractsWithViews, Favoriteable;

    protected $guarded = ['id'];

    protected $appends = ['date'];

    protected $casts = [
        'raw' => 'array'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(PostCategory::class);
    }

    public function date(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->created_at->diffForHumans(),
        );
    }

}
