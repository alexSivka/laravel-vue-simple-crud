<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table = 'jobs';

    protected $attributes = [
        'name' => '',
        'description' => '',
        'status' => 'новое'
    ];

    const STATUSES = [
        'новое',
        'выполняется',
        'выполнено'
    ];

    public function workers()
    {
        return $this->belongsToMany('App\Models\Worker', 'worker_jobs');
    }

}