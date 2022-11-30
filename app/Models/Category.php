<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];
}
