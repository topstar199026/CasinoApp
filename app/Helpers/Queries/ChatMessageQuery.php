<?php

namespace App\Helpers\Queries;

use Illuminate\Database\Eloquent\Builder;

class ChatMessageQuery extends Query
{
    public function search(Builder $query): Builder
    {
        return $query->whereHas('user', function ($query) {
            $query->whereRaw('LOWER(name) LIKE ?', ['%' . strtolower($this->getSearch()) . '%']);
            $query->orWhere('id', intval($this->getSearch()));
        });
    }
}
