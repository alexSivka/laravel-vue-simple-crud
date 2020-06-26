<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Worker extends Model
{
    protected $table = 'workers';

    protected $attributes = [
        'name' => '',
        'img' => ''
    ];

    public function jobs()
    {
        return $this->belongsToMany('App\Models\Job', 'worker_jobs');
    }

}