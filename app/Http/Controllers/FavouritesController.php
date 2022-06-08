<?php

namespace App\Http\Controllers;


use App\Helpers\Eloquent;

class FavouritesController extends Controller
{
    public function __invoke()
    {
        $model = Eloquent::getRecordByModel(request('model'),request('id'));

        auth()->user()->toggleFavorite($model);

        return back();
    }
}
