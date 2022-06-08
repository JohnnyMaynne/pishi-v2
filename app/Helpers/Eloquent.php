<?php

namespace App\Helpers;

use Illuminate\Database\Eloquent\Model;

class Eloquent
{
    public static function getRecordByModel(string $model, int $id): Model
    {
        return ('App\\Models\\' . $model)::findOrFail($id);
    }
}
