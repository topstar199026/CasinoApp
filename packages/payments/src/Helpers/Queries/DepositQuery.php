<?php

namespace Packages\Payments\Helpers\Queries;

use App\Helpers\Queries\Query;
use Illuminate\Database\Eloquent\Builder;

class DepositQuery extends Query
{
    protected function getBaseBuilder(): Builder
    {
        return $this->getModel()::when($this->getSearch(), function($query) {
            $query->whereHas('account.user', function ($query) {
                $query->whereRaw('LOWER(name) LIKE ?', ['%' . strtolower($this->getSearch()) . '%']);
                $query->orWhere('users.id', intval($this->getSearch()));
            });
        });
    }
}
