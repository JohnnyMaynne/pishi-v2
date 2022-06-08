<?php

namespace App\Models;

use App\Models\Behaviors\HasComments;
use App\Models\Behaviors\HasRecent;
use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Overtrue\LaravelFavorite\Traits\Favoriteable;

class Post extends Model implements Viewable
{
    use HasFactory;
    use HasComments;
    use HasRecent;
    use InteractsWithViews;
    use Favoriteable;

    protected $guarded = [];

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
}
