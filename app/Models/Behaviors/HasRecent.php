<?php

namespace App\Models\Behaviors;

use App\Models\Recent;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait HasRecent
{
    protected static function bootHasRecent(): void
    {
        static::deleted(function ($recentable) {
            foreach ($recentable->recents as $recent) {
                $recent->delete();
            }
        });
    }

    public function recents(): MorphMany
    {
        return $this->morphMany(Recent::class, 'recentable');
    }


    public function scopeGetRecents($query)
    {
        $records = Recent::where([
            'user_id'         => auth()->id(),
            'recentable_type' => self::class,
        ])
            ->latest('updated_at')
            ->pluck('recentable_id')
            ->toArray();

        $ordered = implode(',', $records);

        return $query
            ->whereIn('id', $records)
            ->orderByRaw("FIELD(id, $ordered)");
    }

    public function makeRecent(): void
    {
        $exist = Recent::where([
            'user_id'         => auth()->id(),
            'recentable_id'   => $this->id,
            'recentable_type' => self::class,
        ])->first();

        if($exist) {
            $exist->update(['updated_at' => now()]);
            return;
        }

        $recent = new Recent();
        $recent->recentable()->associate($this);
        $recent->save();
    }


}
